
-- Check current policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- Drop any existing policies completely
DROP POLICY IF EXISTS "allow_anonymous_inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "authenticated_select_only" ON public.contact_submissions;

-- Temporarily disable RLS to ensure clean state
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a very permissive INSERT policy for ALL roles including anonymous
CREATE POLICY "contact_insert_policy" ON public.contact_submissions
FOR INSERT 
TO anon, public, authenticated
WITH CHECK (true);

-- Create a SELECT policy for authenticated users only (admin access)
CREATE POLICY "contact_select_policy" ON public.contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- Ensure all necessary grants are in place
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT ON public.contact_submissions TO authenticated;

-- Verify the policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';
