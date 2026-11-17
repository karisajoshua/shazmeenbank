import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react";

const db = supabase as any;
type Module = { id: string; title: string; description: string | null; thumbnail_url: string | null; position: number; is_published: boolean };
type Lesson = { id: string; module_id: string; title: string; description: string | null; content: string | null; video_provider: string | null; video_url: string | null; thumbnail_url: string | null; position: number; is_published: boolean };
type Resource = { id: string; lesson_id: string; title: string; resource_type: string; file_path: string };
const input = "w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FD0061]";
const action = "inline-flex items-center justify-center gap-2 rounded-lg bg-[#FD0061] px-4 py-2 text-white font-semibold hover:bg-[#D00050] disabled:opacity-50";
const secondary = "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-900";
export function CourseContentEditor({ courseId, onBack }: { courseId: string; onBack: () => void }) {
  const [modules, setModules] = useState<Module[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceType, setResourceType] = useState("workbook");
  const [file, setFile] = useState<File | null>(null);
  const load = async () => {
    const ms = await db.from("course_modules").select("*").eq("course_id", courseId).order("position");
    if (ms.error) { setMessage(ms.error.message); return; }
    const items = (ms.data || []) as Module[];
    setModules(items);
    const ids = items.map(m => m.id);
    const ls = ids.length ? await db.from("course_lessons").select("*").in("module_id", ids).order("position") : {data:[],error:null};
    if (ls.error) { setMessage(ls.error.message); return; }
    const lessonsData = (ls.data || []) as Lesson[];
    setLessons(lessonsData);
    const lessonIds = lessonsData.map(l => l.id);
    const rs = lessonIds.length ? await db.from("lesson_resources").select("*").in("lesson_id", lessonIds).order("position") : {data:[]};
    setResources((rs.data || []) as Resource[]);
  };
  useEffect(() => { load(); }, [courseId]);
  const selected = modules.find(m => m.id === selectedModule);
  const lesson = lessons.find(l => l.id === selectedLesson);
  const save = async (table: string, id: string, values: object) => {
    setBusy(true); setMessage("");
    const { error } = await db.from(table).update(values).eq("id", id);
    setBusy(false);
    if (error) { setMessage(error.message); return; }
    setMessage("Changes saved."); await load();
  };
  const createModule = async () => {
    setBusy(true); const {data,error} = await db.from("course_modules").insert({course_id:courseId,title:"New module",position:modules.length,is_published:false}).select("id").single();
    setBusy(false); if(error) {setMessage(error.message);return;} await load();setSelectedModule(data.id);setSelectedLesson(null);
  };
  const createLesson = async () => {
    if(!selectedModule) return;
    setBusy(true);const {data,error}=await db.from("course_lessons").insert({module_id:selectedModule,title:"New lesson",position:lessons.filter(l=>l.module_id===selectedModule).length,is_published:false}).select("id").single();
    setBusy(false);if(error){setMessage(error.message);return;}await load();setSelectedLesson(data.id);
  };
  const remove = async (table: string, id: string, label: string) => {
    if(!window.confirm(`Permanently delete ${label}? This cannot be undone.`)) return;
    const {error}=await db.from(table).delete().eq("id",id);
    if(error){setMessage(error.message);return;}
    if(table==="course_modules"){setSelectedModule(null);setSelectedLesson(null);}
    if(table==="course_lessons")setSelectedLesson(null);
    await load();
  };
  const upload = async () => {
    if(!file || !selectedLesson || !resourceTitle.trim()) {setMessage("Select a file and enter its title.");return;}
    if(file.size > 50*1024*1024){setMessage("File must be 50 MB or smaller.");return;}
    const allowed=["application/pdf","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if(!allowed.includes(file.type)){setMessage("Upload PDF, Word or PowerPoint files only.");return;}
    setBusy(true);setMessage("");
    const safeName=file.name.replace(/[^a-zA-Z0-9._-]/g,"_");
    const path=`${courseId}/${selectedLesson}/${crypto.randomUUID()}-${safeName}`;
    const uploaded=await supabase.storage.from("course-materials").upload(path,file,{upsert:false,contentType:file.type});
    if(uploaded.error){setBusy(false);setMessage(uploaded.error.message);return;}
    const created=await db.from("lesson_resources").insert({lesson_id:selectedLesson,title:resourceTitle.trim(),resource_type:resourceType,file_path:path,file_name:file.name});
    if(created.error){await supabase.storage.from("course-materials").remove([path]);setMessage(created.error.message);}
    else {setResourceTitle("");setFile(null);setMessage("Material uploaded.");await load();}
    setBusy(false);
  };
  const deleteResource=async(r:Resource)=>{
    if(!window.confirm("Delete this material?"))return;
    const {error}=await db.from("lesson_resources").delete().eq("id",r.id);
    if(error){setMessage(error.message);return;}
    const removed=await supabase.storage.from("course-materials").remove([r.file_path]);
    if(removed.error)setMessage("Resource record deleted, but file cleanup failed: "+removed.error.message);
    await load();
  };
  return <div className="space-y-5 text-gray-900">
    <button className={secondary} onClick={onBack}><ArrowLeft size={16}/> Back to courses</button>
    <div><h2 className="text-2xl font-bold">Course curriculum</h2><p className="text-gray-600">Build modules, lessons, videos and downloadable resources. Publish only when ready.</p></div>
    {message && <p role="status" className="rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900">{message}</p>}
    <div className="grid grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)] gap-5">
      <aside className="rounded-xl border bg-white p-4 space-y-3">
        <button disabled={busy} onClick={createModule} className={action+" w-full"}><Plus size={16}/> Add module</button>
        {modules.map(m=><div key={m.id} className="space-y-1"><button className={`w-full text-left rounded-lg px-3 py-2 font-semibold ${selectedModule===m.id?"bg-pink-100 text-[#A00040]":"bg-gray-100 text-gray-900"}`} onClick={()=>{setSelectedModule(m.id);setSelectedLesson(null);}}>{m.title} {!m.is_published&&<span className="text-xs font-normal">(Draft)</span>}</button>{selectedModule===m.id&&lessons.filter(l=>l.module_id===m.id).map(l=><button key={l.id} onClick={()=>setSelectedLesson(l.id)} className={`w-full rounded px-4 py-2 text-left text-sm ${selectedLesson===l.id?"bg-pink-50 text-[#A00040] font-semibold":"text-gray-700 hover:bg-gray-50"}`}>{l.title} {!l.is_published&&"· Draft"}</button>)}</div>)}
      </aside>
      <section className="rounded-xl border bg-white p-5 space-y-6 min-w-0">
        {selected&&<div className="space-y-3">
          <h3 className="font-bold text-lg">Module details</h3>
          <label className="block text-sm font-medium">Module title<input className={input+" mt-1"} value={selected.title} onChange={e=>setModules(previous=>previous.map(m=>m.id===selected.id?{...m,title:e.target.value}:m))}/></label>
          <label className="block text-sm font-medium">Description<textarea className={input+" mt-1"} value={selected.description||""} onChange={e=>setModules(previous=>previous.map(m=>m.id===selected.id?{...m,description:e.target.value}:m))}/></label>
          <label className="block text-sm font-medium">Module thumbnail URL<input className={input+" mt-1"} type="url" value={selected.thumbnail_url||""} onChange={e=>setModules(previous=>previous.map(m=>m.id===selected.id?{...m,thumbnail_url:e.target.value}:m))}/></label>
          <label className="block text-sm font-medium">Display order<input type="number" min="0" className={input+" mt-1"} value={selected.position} onChange={e=>setModules(previous=>previous.map(m=>m.id===selected.id?{...m,position:Number(e.target.value)}:m))}/></label>
          <label className="flex gap-2 items-center"><input type="checkbox" checked={selected.is_published} onChange={e=>setModules(previous=>previous.map(m=>m.id===selected.id?{...m,is_published:e.target.checked}:m))}/> Publish module</label>
          <div className="flex flex-wrap gap-2"><button className={action} disabled={busy} onClick={()=>save("course_modules",selected.id,{title:selected.title,description:selected.description,thumbnail_url:selected.thumbnail_url,position:selected.position,is_published:selected.is_published})}>Save module</button><button className={secondary} disabled={busy} onClick={createLesson}><Plus size={16}/> Add lesson</button><button className={secondary} onClick={()=>remove("course_modules",selected.id,selected.title)}><Trash2 size={16}/> Delete</button></div>
        </div>}
        {lesson&&<div className="space-y-3 border-t pt-5">
          <h3 className="font-bold text-lg">Lesson editor</h3>
          <label className="block text-sm font-medium">Lesson title<input className={input+" mt-1"} value={lesson.title} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,title:e.target.value}:l))}/></label>
          <label className="block text-sm font-medium">Lesson description<textarea className={input+" mt-1"} value={lesson.description||""} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,description:e.target.value}:l))}/></label>
          <label className="block text-sm font-medium">Lesson text / instructions<textarea rows={5} className={input+" mt-1"} value={lesson.content||""} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,content:e.target.value}:l))}/></label>
          <label className="block text-sm font-medium">Video provider<select className={input+" mt-1"} value={lesson.video_provider||""} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,video_provider:e.target.value||null}:l))}><option value="">No video</option><option value="vimeo">Vimeo</option><option value="loom">Loom</option></select></label>
          <label className="block text-sm font-medium">Vimeo or Loom share URL<input className={input+" mt-1"} type="url" placeholder="https://..." value={lesson.video_url||""} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,video_url:e.target.value}:l))}/></label>
          <label className="block text-sm font-medium">Lesson thumbnail URL<input className={input+" mt-1"} type="url" value={lesson.thumbnail_url||""} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,thumbnail_url:e.target.value}:l))}/></label>
          <label className="block text-sm font-medium">Display order<input type="number" min="0" className={input+" mt-1"} value={lesson.position} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,position:Number(e.target.value)}:l))}/></label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={lesson.is_published} onChange={e=>setLessons(previous=>previous.map(l=>l.id===lesson.id?{...l,is_published:e.target.checked}:l))}/> Publish lesson</label>
          <div className="flex flex-wrap gap-2"><button className={action} disabled={busy} onClick={()=>save("course_lessons",lesson.id,{title:lesson.title,description:lesson.description,content:lesson.content,video_provider:lesson.video_provider,video_url:lesson.video_url,thumbnail_url:lesson.thumbnail_url,position:lesson.position,is_published:lesson.is_published})}>Save lesson</button><button className={secondary} onClick={()=>remove("course_lessons",lesson.id,lesson.title)}><Trash2 size={16}/> Delete lesson</button></div>
          <div className="border-t pt-5 space-y-3"><h4 className="font-semibold">Workbooks, slides and attachments</h4>{resources.filter(r=>r.lesson_id===lesson.id).map(r=><div key={r.id} className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 p-3 text-sm"><span>{r.title} · {r.resource_type}</span><button className="text-red-700 hover:underline" onClick={()=>deleteResource(r)}>Remove</button></div>)}
            <label className="block text-sm font-medium">Resource title<input className={input+" mt-1"} value={resourceTitle} onChange={e=>setResourceTitle(e.target.value)}/></label>
            <label className="block text-sm font-medium">Type<select className={input+" mt-1"} value={resourceType} onChange={e=>setResourceType(e.target.value)}><option value="workbook">Workbook</option><option value="slides">Presentation slides</option><option value="attachment">Other attachment</option></select></label>
            <label className="block text-sm font-medium">PDF, Word or PowerPoint (max 50 MB)<input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" className={input+" mt-1"} onChange={e=>setFile(e.target.files?.[0]||null)}/></label>
            <button className={action} disabled={busy||!file} onClick={upload}><Upload size={16}/> Upload material</button>
          </div>
        </div>}
        {!selected&&<p className="text-gray-600">Select a module on the left, or add a new one.</p>}
      </section>
    </div>
  </div>;
}
