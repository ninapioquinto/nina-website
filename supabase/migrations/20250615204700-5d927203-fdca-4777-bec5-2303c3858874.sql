
-- Grant basic table permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT INSERT ON public.contact_submissions TO anon;

-- Also ensure the sequence permissions are granted (for the UUID generation)
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;

-- Let's also check the current permissions
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'contact_submissions';
