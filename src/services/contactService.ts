
import { supabase } from '@/integrations/supabase/client';

export type ContactSubmission = {
  name: string;
  email: string;
  business_type: string;
  message: string;
  created_at?: string;
};

export const submitContactForm = async (data: ContactSubmission) => {
  console.log('=== Contact form submission started ===');
  console.log('Data to submit:', data);
  
  try {
    // Validate required fields
    const requiredFields = ['name', 'email', 'business_type', 'message'] as const;
    for (const field of requiredFields) {
      if (!data[field] || data[field].trim() === '') {
        throw new Error(`${field} is required`);
      }
    }

    // Prepare the submission object
    const submission = {
      name: data.name.trim(),
      email: data.email.trim(),
      business_type: data.business_type.trim(),
      message: data.message.trim(),
    };

    console.log('Submitting to Supabase:', submission);

    // Insert the contact submission
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert(submission)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Failed to submit contact form: ${error.message}`);
    }

    console.log('Contact form submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error in submitContactForm:', error);
    throw error;
  }
};
