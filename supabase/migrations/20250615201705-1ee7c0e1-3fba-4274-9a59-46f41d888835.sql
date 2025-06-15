
-- Enable RLS on the contact_submissions table if not already enabled
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone (including anonymous users) to insert contact submissions
CREATE POLICY "Anyone can submit contact forms" ON public.contact_submissions
FOR INSERT 
TO public
WITH CHECK (true);

-- Create a policy that allows only authenticated users to view contact submissions (for future admin access)
CREATE POLICY "Only authenticated users can view contact submissions" ON public.contact_submissions
FOR SELECT 
TO authenticated
USING (true);
