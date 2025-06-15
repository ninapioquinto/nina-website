
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
  
  try {
    // First, let's test if we can connect to Supabase at all
    console.log('Testing Supabase connection...');
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .select('count', { count: 'exact', head: true });
    
    if (testError) {
      console.error('Supabase connection test failed:', testError);
    } else {
      console.log('Supabase connection test successful');
    }

    // Now attempt the actual insert
    console.log('Attempting to insert contact submission...');
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert({
        name: data.name,
        email: data.email,
        business_type: data.business_type,
        message: data.message,
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
        fullError: error
      });
      throw new Error(`Database error: ${error.message} (Code: ${error.code})`);
    }

    console.log('Contact form submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    throw error;
  }
};
