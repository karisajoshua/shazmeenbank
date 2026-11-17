import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { SiteContent } from '@/lib/siteContent';
const db = supabase as any;
const sections = [
 ['home','intro','Homepage — Introduction'],
 ['home','how-i-help','Homepage — How I Help'],
 ['home','new-way-to-love','Homepage — A New Way to Love'],
 ['home','free-tools','Homepage — Free Tools'],
 ['home','newsletter','Homepage — Newsletter'],
 ['about','hero','About — Hero'],
 ['about','cta','About — Call to Action'],
 ['home','closing','Homepage — Closing Message'],
 ['contact','hero','Contact — Hero'],
 ['contact','details','Contact — Details'],
] as const;
export default function SiteContentManagement() {
 const [key,setKey] = useState('home:intro');
 const [form,setForm] = useState<SiteContent>({});
 const [published,setPublished] = useState<SiteContent>({});
 const [busy,setBusy] = useState(false);
 const {toast}=useToast();
 const [page,section]=key.split(':');
 useEffect(()=>{let active=true;setForm({});setPublished({});Promise.all([
 db.from('site_content_drafts').select('content').eq('page_key',page).eq('section_key',section).maybeSingle(),
 db.from('site_content').select('content').eq('page_key',page).eq('section_key',section).maybeSingle()
 ]).then(([d,p]:any[])=>{if(active){setPublished(p.data?.content||{});setForm(d.data?.content||p.data?.content||{});if(d.error||p.error)toast({title:'Unable to load CMS',description:d.error?.message||p.error?.message,variant:'destructive'});}});return()=>{active=false}},[key]);
 const save=async(publish:boolean)=>{setBusy(true);const target=publish?'site_content':'site_content_drafts';const {error}=await db.from(target).upsert({page_key:page,section_key:section,content:form,updated_at:new Date().toISOString()},{onConflict:'page_key,section_key'});setBusy(false);if(error){toast({title:'Save failed',description:error.message,variant:'destructive'});return;}if(publish)setPublished(form);toast({title:publish?'Published':'Draft saved'});};
 const field=(name:keyof SiteContent,label:string,multiline=false)=><label className="block space-y-2"><span className="font-medium text-gray-800">{label}</span>{multiline?<textarea className="w-full rounded-md border p-3 min-h-32" value={form[name]||''} onChange={e=>setForm({...form,[name]:e.target.value})}/>:<input className="w-full rounded-md border p-3" value={form[name]||''} onChange={e=>setForm({...form,[name]:e.target.value})}/>}</label>;
 return <div className="p-6 md:p-10 max-w-5xl space-y-6"><div><h1 className="text-3xl font-bold">Website Content</h1><p className="text-gray-600 mt-2">Edit text and links without changing the website layout. Only Publish updates visitors' pages.</p></div><label className="block space-y-2"><span className="font-semibold">Page section</span><select className="border rounded-md p-3 w-full" value={key} onChange={e=>setKey(e.target.value)}>{sections.map(([p,s,label])=><option key={p+':'+s} value={p+':'+s}>{label}</option>)}</select></label><div className="bg-white rounded-xl border p-6 space-y-5">{field('heading','Heading')}{field('body','Description',true)}{field('image_url','Image URL')}{field('button_label','Button label')}{field('button_url','Button link')}<div className="flex flex-wrap gap-3"><Button disabled={busy} variant="outline" onClick={()=>save(false)}>Save Draft</Button><Button disabled={busy} onClick={()=>save(true)}>Publish Changes</Button><Button variant="outline" onClick={()=>setForm(published)}>Restore Published Values</Button></div></div><p className="text-sm text-gray-500">This initial editor covers the sections listed above. Existing blog, courses, services and media have their own management pages.</p></div>;
}
