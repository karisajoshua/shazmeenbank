-- Public content is separate from private drafts so anonymous users never receive unpublished text.
CREATE TABLE IF NOT EXISTS public.site_content (
 page_key text NOT NULL,
 section_key text NOT NULL,
 content jsonb NOT NULL DEFAULT '{}'::jsonb,
 updated_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(page_key,section_key),
 CONSTRAINT site_content_keys_valid CHECK (page_key ~ '^[a-z0-9_-]{1,80}$' AND section_key ~ '^[a-z0-9_-]{1,80}$')
);
CREATE TABLE IF NOT EXISTS public.site_content_drafts (
 page_key text NOT NULL,
 section_key text NOT NULL,
 content jsonb NOT NULL DEFAULT '{}'::jsonb,
 updated_at timestamptz NOT NULL DEFAULT now(),
 PRIMARY KEY(page_key,section_key),
 CONSTRAINT site_content_draft_keys_valid CHECK (page_key ~ '^[a-z0-9_-]{1,80}$' AND section_key ~ '^[a-z0-9_-]{1,80}$')
);
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content_drafts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Everyone reads published content" ON public.site_content FOR SELECT TO anon,authenticated USING (true);
CREATE POLICY "Admins publish content" ON public.site_content FOR ALL TO authenticated USING (public.lms_is_admin()) WITH CHECK (public.lms_is_admin());
CREATE POLICY "Admins manage drafts" ON public.site_content_drafts FOR ALL TO authenticated USING (public.lms_is_admin()) WITH CHECK (public.lms_is_admin());
