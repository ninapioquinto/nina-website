
import { supabase } from '@/integrations/supabase/client';

export type ContactSubmission = {
  name: string;
  email: string;
  business_type: string;
  message: string;
  created_at?: string;
};

export const submitContactForm = async (data: ContactSubmission) => {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: data.name,
        email: data.email,
        business_type: data.business_type,
        message: data.message,
      }
    ])
    .select();

  if (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }

  return result;
};
