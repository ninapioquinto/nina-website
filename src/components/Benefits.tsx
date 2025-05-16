
import { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Check, Award, Star } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const benefitItems = [
    {
      icon: <Check className="h-10 w-10 text-primary" />,
      title: "Custom Systems Integration",
      description: "Get a tailored system that integrates seamlessly with your existing tools and workflows."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Time & Cost Efficiency",
      description: "Save up to 20 hours per week with automated processes that eliminate repetitive tasks."
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Scalable Solutions",
      description: "Future-proof systems that grow with your business without adding complexity."
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center reveal">
            Why Work With <span className="text-gradient">Me</span>
          </h2>
          
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto reveal">
            I deliver custom solutions that solve real business problems, saving you time and resources while improving operational efficiency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefitItems.map((item, index) => (
              <Card key={index} className="bg-accent/20 border border-primary/20 backdrop-blur-sm overflow-hidden relative reveal float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-accent-blue/50"></div>
                <CardContent className="p-8">
                  <div className="mb-6 rounded-full bg-primary/10 p-3 w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center reveal">
            <div className="inline-block bg-accent/30 border border-primary/30 px-6 py-4 rounded-lg max-w-2xl">
              <p className="text-lg italic text-white/90">
                "My focus is on creating systems that make your business run smoother, faster, and with fewer headaches."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
