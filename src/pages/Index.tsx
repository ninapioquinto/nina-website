
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Automating The Future With
              <span className="text-primary"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transforming businesses through innovative AI solutions and automation engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">View Portfolio</Button>
              <Button size="lg" variant="outline">Contact Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-accent">
        <div className="container">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">AI Automation Expert</h3>
                <p className="text-muted-foreground mb-6">
                  With extensive experience in AI and automation engineering, I help businesses
                  streamline their operations and enhance productivity through cutting-edge
                  technology solutions.
                </p>
                <Button>Learn More</Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">100%</h4>
                    <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-4">
                    <h4 className="text-4xl font-bold text-primary mb-2">30+</h4>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="container">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">AI Automation Project {item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Automated workflow solution for enterprise operations
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-accent">
        <div className="container max-w-3xl">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What AI technologies do you specialize in?</AccordionTrigger>
                <AccordionContent>
                  I specialize in machine learning, natural language processing, computer vision,
                  and robotic process automation technologies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary based on complexity, but typically range from 2-6 months
                  for full implementation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer maintenance and support?</AccordionTrigger>
                <AccordionContent>
                  Yes, I provide ongoing maintenance and support services to ensure your AI
                  solutions continue to perform optimally.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container max-w-3xl">
          <div className="reveal">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full p-3 border rounded-md h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
