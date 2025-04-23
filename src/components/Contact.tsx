
import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Github, Linkedin, Mail, MessageSquare, Send, Twitter } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      setFormState({ name: '', email: '', message: '' });
      
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
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
                Let's <span className="text-gradient">Connect</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 reveal">
                Interested in working together? Have questions about how AI automation could help your business? I'd love to hear from you.
              </p>
              
              <div className="space-y-6 reveal">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Email</div>
                    <a href="mailto:luna@example.com" className="text-white hover:text-primary transition-colors">
                      luna@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Schedule a call</div>
                    <a href="#" className="text-white hover:text-primary transition-colors">
                      Book a 30-minute consultation
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 reveal">
                <div className="text-sm text-white/50 mb-4">Connect on social</div>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-accent/30 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="reveal">
              <div className="bg-accent/20 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-medium mb-6">Send me a message</h3>
                
                {isSubmitted ? (
                  <div className="bg-primary/20 border border-primary/30 text-white rounded-lg p-4 flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    <span>Thanks for reaching out! I'll get back to you soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
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
                          className="bg-accent/30 border-white/10 focus:border-primary/50 placeholder:text-white/30"
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
                          className="bg-accent/30 border-white/10 focus:border-primary/50 placeholder:text-white/30"
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
                          placeholder="How can I help you?"
                          required
                          rows={5}
                          className="w-full bg-accent/30 border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:border-primary/50 placeholder:text-white/30"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full bg-transparent border border-primary/50 hover:bg-primary/10 text-white group"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-r-2 border-white rounded-full"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            Send Message
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
