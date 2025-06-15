
-- 🚨 Remove ALL old insert/select policies
DROP POLICY IF EXISTS "allow_anyone_insert" ON public.contact_submissions;
DROP POLICY IF EXISTS "contact_insert_policy" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON public.contact_submissions;

-- 🚨 Remove old select policies too (will restore them)
DROP POLICY IF EXISTS "authenticated_can_select" ON public.contact_submissions;
DROP POLICY IF EXISTS "contact_select_policy" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;

-- Make sure RLS is ON
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- ✅ Correct: allow INSERT for anon and authenticated only, explicitly
CREATE POLICY "anon_and_auth_insert" ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- ✅ Allow SELECT only for authenticated (admin viewing etc)
CREATE POLICY "authenticated_can_select" ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- ✅ Grant all necessary rights needed
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT SELECT ON public.contact_submissions TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- 🔍 Confirm active policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';
