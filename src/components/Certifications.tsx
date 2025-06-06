import { useRef } from 'react';
import { CertificationParallax } from './CertificationParallax';

const certifications = [
  {
    id: 3,
    title: "Generative AI in Business",
    organization: "University of Michigan",
    date: "2025",
    credentialId: "PZZTETE6QFDS",
    image: "/lovable-uploads/15357454-e5af-401f-8891-c24484c6ebd6.png"
  },
  {
    id: 2,
    title: "AI Engineering",
    organization: "Coursera",
    date: "2025",
    credentialId: "1MBVJd6KTV8",
    image: "/lovable-uploads/5f80490e-9946-4a79-b59d-85573825b7fa.png"
  },
  {
    id: 1,
    title: "Generative AI for Data Engineers",
    organization: "IBM & Coursera",
    date: "2025",
    credentialId: "XED4DH5RB9C",
    image: "/lovable-uploads/ab61576f-da73-4131-bed5-4674c92cee7f.png"
  },
  {
    id: 6,
    title: "ClickUp Brain Expert",
    organization: "ClickUp",
    date: "2024",
    credentialId: "CLK-BRAIN-EXP",
    image: "/lovable-uploads/00eb4f5b-11e4-4836-a00a-65271df6cd00.png"
  },
  {
    id: 5,
    title: "Airtable Builder Certification",
    organization: "Airtable",
    date: "2025",
    credentialId: "jocRy6mp9rv",
    image: "/lovable-uploads/28ec46ce-d366-429a-92f9-7329ce14a6b5.png"
  },
  {
    id: 4,
    title: "Make Intermediate",
    organization: "Make Academy",
    date: "2024",
    credentialId: "MAKE-INT-2024",
    image: "/lovable-uploads/cc9d382f-4232-40fb-9355-3cf96bcbc0d8.png"
  },
  {
    id: 6,
    title: "Advanced Aptly Inbox",
    organization: "RUN PMC",
    date: "2024",
    credentialId: "APTLY-ADV-2024",
    image: "/lovable-uploads/e326ff7f-0cb0-4f44-84c8-c05a22677deb.png"
  },
  {
    id: 8,
    title: "ClickUp Admin Certification",
    organization: "ClickUp",
    date: "2024",
    credentialId: "5d",
    image: "/lovable-uploads/d2156862-43ba-49d7-84f7-f2a9f31e9e1d.png"
  },
  {
    id: 9,
    title: "ClickUp Expert Certification",
    organization: "ClickUp",
    date: "2024",
    credentialId: "d3",
    image: "/lovable-uploads/ecd966d9-efd2-46b9-871a-e2a4fa462fc2.png"
  }
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="certifications" ref={sectionRef} className="bg-accent/5 relative">
      <CertificationParallax certifications={certifications} />
    </section>
  );
};

export default Certifications;
