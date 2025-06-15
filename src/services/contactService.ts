
import { supabase } from '@/integrations/supabase/client';

export type ContactSubmission = {
  name: string;
  email: string;
  business_type: string;
  message: string;
  created_at?: string;
};

export const submitContactForm = async (data: ContactSubmission) => {
  console.log('Attempting to submit contact form with data:', data);
  console.log('Supabase client session:', await supabase.auth.getSession());
  
  try {
    // First, let's check if we can connect to the table at all
    console.log('Testing connection to contact_submissions table...');
    
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
      console.error('Supabase error details:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Error details:', error.details);
      console.error('Error hint:', error.hint);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log('Contact form submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    throw error;
  }
};
