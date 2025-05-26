
import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Instagram, Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Facebook } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', business: '', message: '' });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
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
                
                {isSubmitted ? (
                  <div className="bg-primary/20 border border-primary/30 text-white rounded-lg p-4 flex items-center">
                    <Send className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Thanks for reaching out! I'll get back to you soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-1">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-accent/30 border-white/10 focus:border-primary/50 placeholder:text-white/30 text-sm sm:text-base"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="bg-accent/30 border-white/10 focus:border-primary/50 placeholder:text-white/30 text-sm sm:text-base"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="business" className="block text-sm mb-1">
                          Business Type
                        </label>
                        <Input
                          id="business"
                          name="business"
                          value={formState.business}
                          onChange={handleChange}
                          placeholder="Agency, SaaS, Service Business, etc."
                          className="bg-accent/30 border-white/10 focus:border-primary/50 placeholder:text-white/30 text-sm sm:text-base"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or challenge"
                          required
                          rows={4}
                          className="w-full bg-accent/30 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:border-primary/50 placeholder:text-white/30 text-sm sm:text-base resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full bg-transparent border border-primary/50 hover:bg-primary/10 text-white group py-3"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-r-2 border-white rounded-full"></div>
                            <span className="text-sm sm:text-base">Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <span className="text-sm sm:text-base">Send Message</span>
                            <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
