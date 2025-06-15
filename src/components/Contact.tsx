import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Instagram, Mail, MessageSquare, ArrowRight, Send } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/services/contactService';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  businessType: z.string().min(2, 'Please enter your business type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      businessType: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form submission started with data:', data);
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm({
        name: data.name,
        email: data.email,
        business_type: data.businessType,
        message: data.message,
      });

      console.log('Form submitted successfully:', result);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error: any) {
      console.error('Form submission error:', error);
      
      let errorMessage = "There was an error sending your message. Please try again.";
      
      if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const section = sectionRef.current;
    const elements = section?.querySelectorAll('.reveal');

    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 reveal">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 reveal">
                Ready to streamline your operations with smart automation? I'd love to hear about your business challenges and how I can help solve them.
              </p>
              
              <div className="space-y-4 sm:space-y-6 reveal">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-white/50">Email</div>
                    <a href="mailto:nina@automationcrmexpert.com" className="text-sm sm:text-base text-white hover:text-primary transition-colors break-all">
                      nina@automationcrmexpert.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-white/50">Schedule a call</div>
                    <a href="#" className="text-sm sm:text-base text-white hover:text-primary transition-colors">
                      Book a 30-minute consultation
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12 reveal">
                <div className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-4">Connect on social</div>
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    href="#" 
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <div className="bg-accent/20 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
                <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6">Send me a message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              {...field} 
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="Your email" 
                              {...field} 
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Business Type</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Agency, SaaS, Service Business, etc." 
                              {...field} 
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project or challenge"
                              {...field} 
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/15 min-h-[120px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 
                               border border-purple-400/40 text-white backdrop-blur-sm
                               hover:from-purple-600/30 hover:via-violet-600/30 hover:to-indigo-600/30 
                               hover:border-purple-300/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                               transition-all duration-700 group relative overflow-hidden py-4"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-violet-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-r-2 border-white rounded-full"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-110" />
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </Form>
                
                <div className="text-center mt-4">
                  <p className="text-white/50 text-xs sm:text-sm">
                    I'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
