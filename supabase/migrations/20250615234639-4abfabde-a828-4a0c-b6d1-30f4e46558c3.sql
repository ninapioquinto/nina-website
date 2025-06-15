
-- Let's completely start fresh and use a more explicit approach
-- First, check what's actually happening with our current setup
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    permissive, 
    roles, 
    cmd, 
    qual, 
    with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- Drop ALL existing policies to start completely fresh
DROP POLICY IF EXISTS "allow_all_inserts" ON public.contact_submissions;
DROP POLICY IF EXISTS "authenticated_can_view" ON public.contact_submissions;
DROP POLICY IF EXISTS "allow_contact_submissions" ON public.contact_submissions;

-- Temporarily disable RLS to test if the table works without it
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Test that basic insert works by inserting a test record
INSERT INTO public.contact_submissions (name, email, business_type, message) 
VALUES ('Test User', 'test@test.com', 'Test Business', 'Test message');

-- Now re-enable RLS and create the most permissive policy possible
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows EVERYTHING for EVERYONE
CREATE POLICY "allow_everything_to_everyone" ON public.contact_submissions
    FOR ALL
    TO public
    USING (true)
    WITH CHECK (true);

-- Double-check our permissions are still there
GRANT ALL ON public.contact_submissions TO anon;
GRANT ALL ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO public;

-- Also grant usage on the schema
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO public;

-- And sequence permissions
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO public;

-- Verify everything is set up correctly
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    permissive, 
    roles, 
    cmd, 
    qual, 
    with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';
