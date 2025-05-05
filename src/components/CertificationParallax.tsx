
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
            Professional certifications and achievements in technology
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
      className="w-[320px] h-[180px] relative flex-shrink-0"
    >
      <Card className="group relative h-full border border-white/10 bg-accent/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-[1px] bg-accent/40 rounded-lg z-10" />
        
        <CardHeader className="relative z-20">
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-xl text-zinc-50">
              {cert.title}
            </CardTitle>
            <Badge className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm text-white/70">{cert.organization}</p>
        </CardHeader>
        
        <CardContent className="relative z-20">
          <p className="text-xs text-white/50">
            Issued {cert.date} • ID: {cert.credentialId}
          </p>
        </CardContent>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-purple/20 animate-pulse-glow" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        </div>
      </Card>
    </motion.div>
  );
};
