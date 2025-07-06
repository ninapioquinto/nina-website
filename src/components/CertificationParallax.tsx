
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
      className="min-h-[120vh] sm:min-h-[150vh] py-16 sm:py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10 mb-12 sm:mb-20 px-4 overflow-visible">
          {firstRow.map((cert) => (
            <CertificationCard
              cert={cert}
              translate={translateX}
              key={cert.id}
            />
          ))}
        </motion.div>
        
        <motion.div className="flex flex-row space-x-6 sm:space-x-10 mb-12 sm:mb-20 px-4 overflow-visible">
          {secondRow.map((cert) => (
            <CertificationCard
              cert={cert}
              translate={translateXReverse}
              key={cert.id}
            />
          ))}
        </motion.div>
        
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10 px-4 overflow-visible">
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
      className="w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] relative flex-shrink-0"
    >
      <Card className="group relative h-full border border-white/10 bg-accent/30 backdrop-blur-sm transition-all duration-500 hover:border-navy-500/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/10 to-navy-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-20 h-full p-3 sm:p-4">
          <div className="w-full h-full rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-600/20 to-navy-800/20 animate-pulse-glow" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-700/5" />
        </div>
        
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 z-30 bg-black/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-xs sm:text-sm font-semibold text-white truncate">{cert.title}</h3>
            <Badge className="h-3 w-3 sm:h-4 sm:w-4 text-accent-gold flex-shrink-0 ml-2" />
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
