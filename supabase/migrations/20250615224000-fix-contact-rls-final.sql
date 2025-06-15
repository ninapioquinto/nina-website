
-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "allow_anyone_insert" ON public.contact_submissions;
DROP POLICY IF EXISTS "anon_and_auth_insert" ON public.contact_submissions;
DROP POLICY IF EXISTS "authenticated_can_select" ON public.contact_submissions;

-- Disable and re-enable RLS to clear everything
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows anyone (including anonymous users) to insert
CREATE POLICY "allow_contact_form_submissions" ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to view submissions (for admin purposes)
CREATE POLICY "authenticated_users_can_view" ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT SELECT ON public.contact_submissions TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Verify the policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';
