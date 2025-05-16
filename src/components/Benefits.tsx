
import { useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Check, Award, Star, ThumbsUp, Rocket, Users } from 'lucide-react';

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
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "30-50% Faster Workflows",
      description: "Stop wasting time on manual tasks. My systems typically cut processing time in half, so your team can focus on growth, not admin."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: "Dramatic Error Reduction",
      description: "Significantly reduce costly mistakes with intelligent quality checks and safeguards that dramatically improve accuracy and consistency."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Scale Without Adding Staff",
      description: "Handle 2-3x more clients or projects with your existing team by automating repetitive processes that drain resources."
    },
    {
      icon: <Check className="h-10 w-10 text-primary" />,
      title: "Seamless Tools Integration",
      description: "Connect your favorite tools in ways you never thought possible, creating a unified ecosystem that works for you, not against you."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Rapid Return on Investment",
      description: "Experience the financial impact quickly as time savings, improved efficiency, and increased capacity start delivering measurable value to your business."
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Future-Proof Operations",
      description: "Get systems built with scalability in mind, easily adaptable as your business grows without major overhauls or disruptions."
    }
  ];

  return (
    <section id="benefits" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center reveal">
            Transform Your Business <span className="text-gradient">Results</span>
          </h2>
          
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto reveal">
            Don't just improve your systems—revolutionize how your business operates. Here's what you'll gain when we work together:
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
                "I don't just build systems—I create transformations that can double your team's productivity while cutting operational costs by up to 40%."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
