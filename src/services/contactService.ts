
export type ContactSubmission = {
  name: string;
  email: string;
  business_type: string;
  message: string;
  created_at?: string;
};

export const submitContactForm = async (data: ContactSubmission) => {
  // For now, we'll just log the submission and simulate success
  console.log('Contact form submission:', data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return a mock successful response
  return [{
    ...data,
    id: Date.now().toString(),
    created_at: new Date().toISOString()
  }];
};
