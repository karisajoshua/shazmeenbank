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
const defaultContent: Record<string, SiteContent> = {
 'home:intro': {heading:"If you've landed here, you're ready to heal, take responsibility and begin again",body:"Whether you're navigating anxious attachment, healing from heartbreak, or trying to reconnect with your partner—this is a safe space to unlearn old patterns, rebuild your sense of self, and step into relationships that truly honor you."},
 'home:how-i-help': {heading:"Your Path to Healing & Growth",body:"Whether you're here as a couple wanting to reconnect, navigating anxious attachment, or searching for your North Star again, this is your path to healing."},
 'home:new-way-to-love': {heading:"A New Way to Love",body:"You don't have to chase, overthink, or abandon yourself anymore. Here, you'll learn to regulate your emotions, embrace your sensitivity, and show up secure in love.",button_label:"Book 1:1 Self Healing Session",image_url:""},
 'home:free-tools': {heading:"Free Tools for Growth & Clarity",body:"Start where you are—with no pressure. These free downloads are created to help you reconnect with yourself, reflect on what you truly need, and take your next step forward.",button_label:"Access Free Resources"},
 'home:newsletter': {heading:"The Newsletter Reset",body:"Real talk, healing prompts, and soulful check-ins straight to your inbox. Think of it as your weekly moment to reflect, reconnect, and grow.",button_label:"Subscribe to Newsletter"},
 'home:closing': {heading:"You keep choosing connection over peace—and it keeps costing you both.",body:"I know exactly how you feel. You feel stuck in patterns of emotional unavailability, anxious loops, or constantly giving more than you receive.",button_label:"Work With Me",button_url:"/bookings"},
 'about:hero': {heading:"About Shazmeen Bank",body:"My Journey, Real and Raw"},
 'about:cta': {heading:"Ready to Start Your Journey?",body:"Join thousands of people who have transformed their mindset and mastered their future with Shazmeen Bank."},
 'contact:hero': {heading:"Get in Touch",body:"Have questions or want to learn more? We're here to help!"},
 'contact:details': {heading:"Contact Information"}
};
const supportedFields: Record<string, (keyof SiteContent)[]> = {
 'home:intro':['heading','body'],
 'home:how-i-help':['heading','body'],
 'home:new-way-to-love':['heading','body','image_url','button_label'],
 'home:free-tools':['heading','body','image_url','button_label'],
 'home:newsletter':['heading','body','image_url','button_label'],
 'home:closing':['heading','body','image_url','button_label','button_url'],
 'about:hero':['heading','body'],
 'about:cta':['heading','body'],
 'contact:hero':['heading','body'],
 'contact:details':['heading']
};
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
 ]).then(([d,p]:any[])=>{if(active){setPublished(p.data?.content||{});setForm({...defaultContent[key],...(p.data?.content||{}),...(d.data?.content||{})});if(d.error||p.error)toast({title:'Unable to load CMS',description:d.error?.message||p.error?.message,variant:'destructive'});}});return()=>{active=false}},[key]);
 const save=async(publish:boolean)=>{setBusy(true);const target=publish?'site_content':'site_content_drafts';const {error}=await db.from(target).upsert({page_key:page,section_key:section,content:form,updated_at:new Date().toISOString()},{onConflict:'page_key,section_key'});setBusy(false);if(error){toast({title:'Save failed',description:error.message,variant:'destructive'});return;}if(publish){setPublished(form);await db.from('site_content_drafts').upsert({page_key:page,section_key:section,content:form,updated_at:new Date().toISOString()},{onConflict:'page_key,section_key'});}toast({title:publish?'Published':'Draft saved'});};
 const field=(name:keyof SiteContent,label:string,multiline=false)=><label className="block space-y-2"><span className="font-medium text-gray-800">{label}</span>{multiline?<textarea className="w-full rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 p-3 min-h-32" value={form[name]||''} onChange={e=>setForm({...form,[name]:e.target.value})}/>:<input className="w-full rounded-md border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 p-3" value={form[name]||''} onChange={e=>setForm({...form,[name]:e.target.value})}/>}</label>;
 return <div className="p-6 md:p-10 max-w-5xl space-y-6"><div><h1 className="text-3xl font-bold">Website Content</h1><p className="text-gray-600 mt-2">Edit text and links without changing the website layout. Only Publish updates visitors' pages.</p></div><label className="block space-y-2"><span className="font-semibold">Page section</span><select className="border border-gray-300 rounded-md p-3 w-full bg-white text-gray-900" value={key} onChange={e=>setKey(e.target.value)}>{sections.map(([p,s,label])=><option key={p+':'+s} value={p+':'+s}>{label}</option>)}</select></label><div className="bg-white text-gray-900 rounded-xl border p-6 space-y-5">{supportedFields[key].includes('heading') && field('heading','Heading')}{supportedFields[key].includes('body') && field('body','Description',true)}{supportedFields[key].includes('image_url') && field('image_url','Image URL (leave blank to keep existing image)')}{supportedFields[key].includes('button_label') && field('button_label','Button label')}{supportedFields[key].includes('button_url') && field('button_url','Button link')}<div className="flex flex-wrap gap-3"><Button disabled={busy} variant="outline" onClick={()=>save(false)}>Save Draft</Button><Button disabled={busy} onClick={()=>save(true)}>Publish Changes</Button><Button variant="outline" onClick={()=>setForm({...defaultContent[key],...published})}>Restore Published Values</Button></div></div><p className="text-sm text-gray-500">This initial editor covers the sections listed above. Existing blog, courses, services and media have their own management pages.</p></div>;
}
