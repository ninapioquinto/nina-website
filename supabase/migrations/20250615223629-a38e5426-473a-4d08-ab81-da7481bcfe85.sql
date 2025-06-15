
-- Create a debug function to check current user context (fixed syntax)
CREATE OR REPLACE FUNCTION public.debug_current_context()
RETURNS TABLE (
  db_role text,
  user_id uuid,
  session_info text
) AS $$
BEGIN
  RETURN QUERY SELECT 
    current_user::text as db_role,
    auth.uid() as user_id,
    'Debug info'::text as session_info;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to anon and authenticated
GRANT EXECUTE ON FUNCTION public.debug_current_context() TO anon, authenticated;

-- Check what policies are actually active
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- Check table permissions
SELECT grantee, privilege_type 
FROM information_schema.table_privileges 
WHERE table_name = 'contact_submissions' AND table_schema = 'public';

-- Let's also make sure RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'contact_submissions';
