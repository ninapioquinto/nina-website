
-- Let's check what policies currently exist and fix them properly
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- Drop ALL existing policies to start completely fresh
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;

-- Disable RLS temporarily to clear everything
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a simple, permissive INSERT policy for everyone
CREATE POLICY "public_insert_contact_submissions" ON public.contact_submissions
FOR INSERT 
TO public, anon, authenticated
WITH CHECK (true);

-- Create a SELECT policy for authenticated users
CREATE POLICY "authenticated_select_contact_submissions" ON public.contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- Grant explicit permissions
GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.contact_submissions TO public;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO public;
