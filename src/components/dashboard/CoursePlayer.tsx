import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, BookOpen, CheckCircle2, Download, PlayCircle, Presentation } from "lucide-react";

type Module = { id: string; title: string; description: string | null; thumbnail_url: string | null; position: number };
type Lesson = { id: string; module_id: string; title: string; description: string | null; content: string | null; video_provider: string | null; video_url: string | null; position: number };
type Resource = { id: string; lesson_id: string; title: string; resource_type: string; file_path: string };

const db = supabase as any;
const embedUrl = (provider: string | null, value: string | null) => {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    if (provider === "vimeo" && (url.hostname === "vimeo.com" || url.hostname === "www.vimeo.com" || url.hostname === "player.vimeo.com")) {
      const id = url.pathname.split("/").filter(Boolean).find(segment => /^\d+$/.test(segment));
      return id ? `https://player.vimeo.com/video/${id}${url.searchParams.get("h") ? `?h=${encodeURIComponent(url.searchParams.get("h")!)}` : ""}` : null;
    }
    if (provider === "loom" && (url.hostname === "www.loom.com" || url.hostname === "loom.com")) {
      const id = url.pathname.match(/\/(?:share|embed)\/([a-zA-Z0-9]+)/)?.[1];
      return id ? `https://www.loom.com/embed/${id}` : null;
    }
  } catch { return null; }
  return null;
};

export default function CoursePlayer() {
  const { courseId } = useParams();
  const [title, setTitle] = useState("");
  const [modules, setModules] = useState<Module[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError("");
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user) { if (active) { setError("Sign in to access your course."); setLoading(false); } return; }
      const enrollment = await supabase.from("user_courses").select("id").eq("user_id", auth.user.id).eq("course_id", courseId!).in("status", ["active", "completed"]).maybeSingle();
      if (enrollment.error || !enrollment.data) { if (active) { setError("This course is not in your library."); setLoading(false); } return; }
      const [course, moduleRes] = await Promise.all([
        supabase.from("courses").select("title").eq("id", courseId!).single(),
        db.from("course_modules").select("id,title,description,thumbnail_url,position").eq("course_id", courseId!).eq("is_published", true).order("position")
      ]);
      if (moduleRes.error) { if (active) { setError(moduleRes.error.message); setLoading(false); } return; }
      const ms = (moduleRes.data || []) as Module[];
      const ids = ms.map(m => m.id);
      const lessonRes = ids.length ? await db.from("course_lessons").select("id,module_id,title,description,content,video_provider,video_url,position").in("module_id", ids).eq("is_published", true).order("position") : { data: [], error: null };
      if (lessonRes.error) { if (active) { setError(lessonRes.error.message); setLoading(false); } return; }
      const ls = (lessonRes.data || []) as Lesson[];
      const lessonIds = ls.map(l => l.id);
      const [resourceRes, progressRes] = await Promise.all([
        lessonIds.length ? db.from("lesson_resources").select("id,lesson_id,title,resource_type,file_path").in("lesson_id", lessonIds).order("position") : Promise.resolve({ data: [] }),
        db.from("lesson_progress").select("lesson_id").eq("user_id", auth.user.id).eq("completed", true)
      ]);
      if (active) {
        setTitle(course.data?.title || "Your course"); setModules(ms); setLessons(ls);
        setResources((resourceRes.data || []) as Resource[]);
        setCompleted((progressRes.data || []).map((p: { lesson_id: string }) => p.lesson_id));
        setSelected(current => ls.some(l => l.id === current) ? current : ls[0]?.id || null);
        setLoading(false);
      }
    }
    if (courseId) load();
    return () => { active = false; };
  }, [courseId]);

  const lesson = lessons.find(l => l.id === selected);
  const progress = lessons.length ? Math.round(completed.filter(id => lessons.some(l => l.id === id)).length / lessons.length * 100) : 0;
  const toggleComplete = async () => {
    if (!lesson) return;
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) return;
    const done = !completed.includes(lesson.id);
    const { error: saveError } = await db.from("lesson_progress").upsert({
      user_id: auth.user.id, lesson_id: lesson.id, completed: done,
      completed_at: done ? new Date().toISOString() : null, last_viewed_at: new Date().toISOString()
    }, { onConflict: "user_id,lesson_id" });
    if (saveError) { setError(saveError.message); return; }
    setCompleted(previous => done ? [...previous, lesson.id] : previous.filter(id => id !== lesson.id));
  };
  const download = async (resource: Resource) => {
    setDownloading(resource.id);
    const { data, error: downloadError } = await supabase.storage.from("course-materials").createSignedUrl(resource.file_path, 60);
    setDownloading(null);
    if (downloadError || !data?.signedUrl) { setError(downloadError?.message || "Unable to download this file."); return; }
    window.open(data.signedUrl, "_blank", "noopener,noreferrer");
  };
  if (loading) return <div className="p-8 text-gray-700">Loading your course…</div>;
  if (error && !lessons.length) return <div className="p-8 text-red-700" role="alert">{error} <Link className="underline" to="/dashboard/courses">Back to courses</Link></div>;
  return <div className="space-y-6">
    <Link to="/dashboard/courses" className="inline-flex items-center gap-2 text-gray-700 hover:text-[#FD0061]"><ArrowLeft size={18}/> My Courses</Link>
    <div><h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1><p className="text-gray-600 mt-2">{progress}% complete · {completed.filter(id => lessons.some(l => l.id === id)).length} of {lessons.length} lessons</p><div className="h-2 rounded-full bg-gray-200 mt-3"><div className="h-2 rounded-full bg-[#FD0061]" style={{width: `${progress}%`}} /></div></div>
    <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-6 items-start">
      <aside className="rounded-xl border border-gray-200 bg-white overflow-hidden" aria-label="Course curriculum">
        <div className="bg-gray-900 text-white px-4 py-3 font-semibold">Course content</div>
        {modules.map(module => <div key={module.id} className="border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50">{module.thumbnail_url && <img src={module.thumbnail_url} alt="" className="h-10 w-12 object-cover rounded" />}<div><p className="font-semibold text-gray-900 text-sm">{module.title}</p>{module.description && <p className="text-xs text-gray-600 line-clamp-2">{module.description}</p>}</div></div>
          {lessons.filter(l => l.module_id === module.id).map(l => <button key={l.id} type="button" onClick={() => { setSelected(l.id); setError(""); }} className={`w-full text-left px-4 py-3 flex items-center gap-2 text-sm border-t border-gray-100 hover:bg-pink-50 ${selected === l.id ? "bg-pink-50 text-[#B50048] font-semibold" : "text-gray-800"}`} aria-current={selected === l.id ? "step" : undefined}>{completed.includes(l.id) ? <CheckCircle2 className="h-4 w-4 shrink-0 text-green-700"/> : <PlayCircle className="h-4 w-4 shrink-0"/>}{l.title}</button>)}
        </div>)}
        {!lessons.length && <p className="p-4 text-gray-600 text-sm">Lessons will appear here when published.</p>}
      </aside>
      <section className="bg-white border border-gray-200 rounded-xl overflow-hidden min-w-0">
        {lesson ? <><div className="p-5 md:p-7 space-y-5">
          <div><h2 className="text-xl md:text-2xl font-bold text-gray-900">{lesson.title}</h2>{lesson.description && <p className="text-gray-600 mt-2 whitespace-pre-wrap">{lesson.description}</p>}</div>
          {lesson.video_url && (embedUrl(lesson.video_provider, lesson.video_url) ? <div className="aspect-video bg-gray-950 rounded-lg overflow-hidden"><iframe title={lesson.title} src={embedUrl(lesson.video_provider, lesson.video_url)!} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"/></div> : <p className="text-amber-800">This lesson's video link needs to be corrected by the administrator.</p>)}
          {lesson.content && <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">{lesson.content}</div>}
          {resources.some(r => r.lesson_id === lesson.id) && <div className="border-t pt-5"><h3 className="font-semibold text-gray-900 mb-3">Lesson downloads</h3><div className="space-y-2">{resources.filter(r => r.lesson_id === lesson.id).map(r => <button key={r.id} onClick={() => download(r)} disabled={downloading === r.id} className="flex w-full items-center justify-between gap-3 rounded-lg border border-gray-200 p-3 text-left text-gray-900 hover:bg-gray-50 disabled:opacity-50"><span className="flex items-center gap-2">{r.resource_type === "slides" ? <Presentation className="h-5 w-5 text-[#FD0061]"/> : <BookOpen className="h-5 w-5 text-[#FD0061]"/>}{r.title}</span><Download className="h-4 w-4"/></button>)}</div></div>}
          {error && <p role="alert" className="text-red-700">{error}</p>}
          <button onClick={toggleComplete} className="rounded-lg bg-[#FD0061] text-white font-semibold px-5 py-3 hover:bg-[#D00050]">{completed.includes(lesson.id) ? "Mark as incomplete" : "Mark lesson complete"}</button>
        </div></> : <div className="p-8 text-gray-600">Select a lesson to begin.</div>}
      </section>
    </div>
  </div>;
}
