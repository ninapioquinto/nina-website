
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const CallToAction = () => {
  return (
    <section className="text-center bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-400/20 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        Interested in Similar Results?
      </h2>
      <p className="text-white/80 mb-6">
        Let's discuss how I can build custom solutions for your specific needs.
      </p>
      <Button 
        onClick={() => {
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = '/#contact';
          }
        }}
        className="bg-primary hover:bg-primary/90"
      >
        Get Started
        <ExternalLink className="w-4 h-4 ml-2" />
      </Button>
    </section>
  );
};

export default CallToAction;
