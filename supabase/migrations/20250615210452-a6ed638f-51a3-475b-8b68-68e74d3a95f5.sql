
-- 🚨 HARD RESET: Remove ALL conflicting or old policies
DROP POLICY IF EXISTS "allow_anonymous_inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "authenticated_select_only" ON public.contact_submissions;
DROP POLICY IF EXISTS "contact_insert_policy" ON public.contact_submissions;
DROP POLICY IF EXISTS "contact_select_policy" ON public.contact_submissions;
DROP POLICY IF EXISTS "public_insert_all" ON public.contact_submissions;
DROP POLICY IF EXISTS "auth_select_all" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "public_insert_contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "authenticated_select_contact_submissions" ON public.contact_submissions;

-- 🚨 Disable RLS to flush all policies
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- ✅ Create the textbook universal insert policy
CREATE POLICY "allow_anyone_insert" ON public.contact_submissions
FOR INSERT
TO PUBLIC
WITH CHECK (true);

-- ✅ Authenticated SELECT for admin viewing
CREATE POLICY "authenticated_can_select" ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- ✅ Fix all grants
GRANT USAGE ON SCHEMA public TO PUBLIC;
GRANT INSERT ON public.contact_submissions TO PUBLIC;

-- (For UUIDs, grant all anno/pubs on sequences)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO PUBLIC;

-- 👀 Diagnostics: show the new policies after migration
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';
