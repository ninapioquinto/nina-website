
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

    // Check current session and user
    const { data: session } = await supabase.auth.getSession();
    console.log('[Diagnostic] Current session:', session);
    console.log('[Diagnostic] Current user:', session.session?.user || 'No user (anonymous)');

    // Test if we can call our debug function
    try {
      const { data: debugInfo, error: debugError } = await supabase.rpc('debug_current_context');
      if (debugError) {
        console.error('[Diagnostic] Debug function error:', debugError);
      } else {
        console.log('[Diagnostic] Debug context info:', debugInfo);
      }
    } catch (err) {
      console.log('[Diagnostic] Debug function not available yet:', err);
    }

    // LOG the input object we're actually sending to Supabase insert
    const submission = {
      name: data.name,
      email: data.email,
      business_type: data.business_type,
      message: data.message,
    };
    console.log('[Diagnostic] Row to insert:', submission);
    
    // Validate all required fields are present and not empty
    console.log('[Diagnostic] Field validation:');
    console.log('- name:', data.name, 'type:', typeof data.name, 'length:', data.name?.length);
    console.log('- email:', data.email, 'type:', typeof data.email, 'length:', data.email?.length);
    console.log('- business_type:', data.business_type, 'type:', typeof data.business_type, 'length:', data.business_type?.length);
    console.log('- message:', data.message, 'type:', typeof data.message, 'length:', data.message?.length);

    // Check if any field is null, undefined, or empty
    const requiredFields: (keyof typeof submission)[] = ['name', 'email', 'business_type', 'message'];
    for (const field of requiredFields) {
      const value = submission[field];
      if (!value || value.trim() === '') {
        console.error(`[Diagnostic] Field [${field}] is missing, null, undefined, or empty:`, value);
        throw new Error(`Field ${field} is required and cannot be empty`);
      }
    }

    console.log('[Diagnostic] All fields validated successfully');

    // ACTUAL INSERT with maximum verbosity
    console.log('[Diagnostic] About to call Supabase insert...');
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert(submission)
      .select()
      .single();

    if (error) {
      console.error('[Diagnostic] Supabase insert error details:');
      console.error('- Error object:', error);
      console.error('- Error code:', error.code);
      console.error('- Error message:', error.message);
      console.error('- Error details:', error.details);
      console.error('- Error hint:', error.hint);
      
      if (error.code === '42501' || error.message?.includes('row-level security')) {
        console.error('[Diagnostic] RLS Policy violation detected!');
        console.error('[Diagnostic] This means the row-level security policy is blocking the insert');
        console.error('[Diagnostic] Checking if this is an anonymous user issue...');
        
        // Try to get more info about the current role/context
        try {
          const { data: roleCheck } = await supabase.rpc('current_user');
          console.error('[Diagnostic] Current database role:', roleCheck);
        } catch (rpcError) {
          console.error('[Diagnostic] Could not check current user role:', rpcError);
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
