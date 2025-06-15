
-- First, let's make sure we completely reset the RLS policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;

-- Temporarily disable RLS to clear any cached policies
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create the INSERT policy with explicit permissions
CREATE POLICY "Allow anonymous contact submissions" ON public.contact_submissions
FOR INSERT 
TO anon, public
WITH CHECK (true);

-- Create the SELECT policy for authenticated users only
CREATE POLICY "Authenticated users can view submissions" ON public.contact_submissions
FOR SELECT 
TO authenticated
USING (true);

-- Grant necessary permissions to anon role
GRANT INSERT ON public.contact_submissions TO anon;
GRANT INSERT ON public.contact_submissions TO public;
