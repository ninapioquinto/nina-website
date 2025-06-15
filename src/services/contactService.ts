
import { supabase } from '@/integrations/supabase/client';

export type ContactSubmission = {
  name: string;
  email: string;
  business_type: string;
  message: string;
  created_at?: string;
};

export const submitContactForm = async (data: ContactSubmission) => {
  // Diagnostic logging for debugging POST
  console.log('=== [Diagnostic] Attempting contact form submit with:', data);
  try {
    // Test connection
    const { data: testData, error: testError } = await supabase
      .from('contact_submissions')
      .select('count', { count: 'exact', head: true });
    if (testError) {
      console.error('[Diagnostic] Supabase connection test failed:', testError);
    } else {
      console.log('[Diagnostic] Supabase connection test successful');
    }
    const { data: session } = await supabase.auth.getSession();
    console.log('[Diagnostic] Current session:', session);

    // LOG the input object we're actually sending to Supabase insert
    const submission = {
      name: data.name,
      email: data.email,
      business_type: data.business_type,
      message: data.message,
    };
    console.log('[Diagnostic] Row to insert:', submission);

    // ACTUAL INSERT
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert(submission)
      .select()
      .single();

    if (error) {
      console.error('[Diagnostic] Supabase insert error:', error);
      if (error.code === '42501' || error.message?.includes('row-level security')) {
        console.error('[Diagnostic] RLS Policy violation detected. Investigating fields:');
        // Log explicitly which keys are missing
        for (const key of ['name', 'email', 'business_type', 'message']) {
          if (!submission[key]) {
            console.error(`[Diagnostic] Field [${key}] is missing or falsy:`, submission[key]);
          }
        }
      }
      throw new Error(`Database error: ${error.message} (Code: ${error.code})`);
    }

    console.log('[Diagnostic] Contact form submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('[Diagnostic] Error in submitContactForm:', error);
    throw error;
  }
};
