
import { supabase } from '../integrations/supabase/client';

export interface ContactFormData {
  name: string;
  email: string;
  business_type: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    console.log('Submitting contact form:', data);
    
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([{
        name: data.name,
        email: data.email,
        business_type: data.business_type,
        message: data.message
      }])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log('Contact form submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
