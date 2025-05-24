
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  credentialId: string;
  image: string;
}

interface CertificationCardProps {
  cert: Certification;
  translate: MotionValue<number>;
}

export const CertificationParallax = ({
  certifications
}: {
  certifications: Certification[];
}) => {
  const firstRow = certifications.slice(0, 3);
  const secondRow = certifications.slice(3, 6);
  const thirdRow = certifications.slice(6, 9);
  
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig
  );
  
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [5, 0]),
    springConfig
  );
  
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-100, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-[150vh] py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto">
            Professional certifications and achievements in AI, automation, and technology
          </p>
        </div>
      </div>

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20 px-4 overflow-visible">
          {firstRow.map((cert) => (
            <CertificationCard
              cert={cert}
              translate={translateX}
              key={cert.id}
            />
          ))}
        </motion.div>
        
        <motion.div className="flex flex-row space-x-10 mb-20 px-4 overflow-visible">
          {secondRow.map((cert) => (
            <CertificationCard
              cert={cert}
              translate={translateXReverse}
              key={cert.id}
            />
          ))}
        </motion.div>
        
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 px-4 overflow-visible">
          {thirdRow.map((cert) => (
            <CertificationCard
              cert={cert}
              translate={translateX}
              key={cert.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const CertificationCard = ({ cert, translate }: CertificationCardProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
      key={cert.id}
      className="w-[400px] h-[300px] relative flex-shrink-0"
    >
      <Card className="group relative h-full border border-white/10 bg-accent/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-20 h-full p-4">
          <div className="w-full h-full rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 animate-pulse-glow" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 z-30 bg-black/80 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-white truncate">{cert.title}</h3>
            <Badge className="h-4 w-4 text-primary flex-shrink-0 ml-2" />
          </div>
          <p className="text-xs text-white/70 mb-1">{cert.organization}</p>
          <p className="text-xs text-white/50">
            {cert.date} • ID: {cert.credentialId}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};
