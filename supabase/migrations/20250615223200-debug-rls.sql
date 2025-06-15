
-- Create a debug function to check current user context
CREATE OR REPLACE FUNCTION public.debug_current_context()
RETURNS TABLE (
  current_role text,
  current_user_id uuid,
  session_info text
) AS $$
BEGIN
  RETURN QUERY SELECT 
    current_user::text as current_role,
    auth.uid() as current_user_id,
    'Debug info'::text as session_info;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to anon and authenticated
GRANT EXECUTE ON FUNCTION public.debug_current_context() TO anon, authenticated;

-- Also let's make sure our table has the right structure
\d public.contact_submissions;

-- And check what policies are actually active
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'contact_submissions';

-- Check table permissions
SELECT grantee, privilege_type 
FROM information_schema.table_privileges 
WHERE table_name = 'contact_submissions' AND table_schema = 'public';
