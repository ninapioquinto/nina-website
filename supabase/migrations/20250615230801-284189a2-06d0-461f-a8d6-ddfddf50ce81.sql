
-- Drop the existing policy and recreate it with more explicit targeting
DROP POLICY IF EXISTS "allow_all_inserts" ON public.contact_submissions;

-- Create a policy that explicitly targets both anon and authenticated roles
CREATE POLICY "allow_contact_submissions" ON public.contact_submissions
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Also ensure we have proper permissions for sequences (for the id generation)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Verify the policy is correctly applied
SELECT 
    schemaname, 
    tablename, 
    policyname, 
    roles,
    cmd,
    with_check
FROM pg_policies 
WHERE tablename = 'contact_submissions' AND policyname = 'allow_contact_submissions';
