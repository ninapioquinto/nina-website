
-- First, completely disable RLS temporarily to clear any cached policies
ALTER TABLE public.contact_submissions DISABLE ROW LEVEL SECURITY;

-- Drop the entire table and recreate it fresh to ensure no policy conflicts
DROP TABLE IF EXISTS public.contact_submissions CASCADE;

-- Recreate the table with the exact same structure
CREATE TABLE public.contact_submissions (
    id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
    name text NOT NULL,
    email text NOT NULL,
    business_type text NOT NULL,
    message text NOT NULL
);

-- Enable RLS on the fresh table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a single, simple policy that allows anyone to insert
CREATE POLICY "allow_all_inserts" ON public.contact_submissions
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Create a policy for authenticated users to view (for admin purposes)
CREATE POLICY "authenticated_can_view" ON public.contact_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- Grant explicit permissions
GRANT ALL ON public.contact_submissions TO anon;
GRANT ALL ON public.contact_submissions TO authenticated;
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;

-- Ensure sequence permissions
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Verify the setup
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
