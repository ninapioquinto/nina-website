
-- First, let's drop any existing conflicting policies
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "public_insert_contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "authenticated_select_contact_submissions" ON public.contact_submissions;

-- Disable RLS temporarily to clear everything
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a simple, permissive INSERT policy that allows everyone including anonymous users
CREATE POLICY "allow_anonymous_inserts" ON public.contact_submissions
FOR INSERT 
TO anon, public, authenticated
WITH CHECK (true);

-- Create a SELECT policy for authenticated users only (for future admin access)
CREATE POLICY "authenticated_select_only" ON public.contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- Ensure permissions are granted
GRANT INSERT ON public.contact_submissions TO anon;
GRANT USAGE ON SCHEMA public TO anon;
