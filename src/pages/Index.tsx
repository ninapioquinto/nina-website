
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Automate Your Business with AI
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your operations with cutting-edge AI solutions. 
              Streamline workflows, reduce costs, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Book a Demo <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-accent">
        <div className="container">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              AI Solutions that Drive Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Process Automation",
                  description: "Streamline repetitive tasks and workflows with intelligent automation"
                },
                {
                  title: "Data Analytics",
                  description: "Transform raw data into actionable insights with AI-powered analytics"
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored AI solutions designed for your specific business needs"
                }
              ].map((solution, index) => (
                <div key={index} className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-24">
        <div className="container">
          <div className="reveal">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Approach</h2>
              <p className="text-xl text-muted-foreground mb-12">
                We combine deep expertise in AI with a thorough understanding of your business 
                to deliver transformative solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  {
                    title: "Discovery",
                    description: "We analyze your current processes and identify opportunities for automation"
                  },
                  {
                    title: "Design",
                    description: "Create tailored solutions that align with your business objectives"
                  },
                  {
                    title: "Implementation",
                    description: "Seamless integration of AI solutions into your existing workflows"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-accent aspect-square rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <div className="reveal max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-12 text-white/80">
              Let's discuss how our AI solutions can help you achieve your goals.
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
