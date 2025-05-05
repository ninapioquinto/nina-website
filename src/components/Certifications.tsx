
import { useRef } from 'react';
import { CertificationParallax } from './CertificationParallax';

const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect",
    organization: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-123456"
  },
  {
    id: 2,
    title: "Google Cloud Professional",
    organization: "Google Cloud",
    date: "2024",
    credentialId: "GCP-789012"
  },
  {
    id: 3,
    title: "Azure Developer Associate",
    organization: "Microsoft",
    date: "2023",
    credentialId: "AZ-204"
  },
  {
    id: 4,
    title: "Certified Kubernetes Administrator",
    organization: "Cloud Native Computing Foundation",
    date: "2023",
    credentialId: "CKA-345678"
  },
  {
    id: 5,
    title: "HashiCorp Terraform Associate",
    organization: "HashiCorp",
    date: "2023",
    credentialId: "HC-901234"
  },
  {
    id: 6,
    title: "Docker Certified Associate",
    organization: "Docker",
    date: "2023",
    credentialId: "DCA-567890"
  },
  {
    id: 7,
    title: "Certified Jenkins Engineer",
    organization: "CloudBees",
    date: "2023",
    credentialId: "CJE-123456"
  },
  {
    id: 8,
    title: "GitLab Certified Associate",
    organization: "GitLab",
    date: "2023",
    credentialId: "GCA-789012"
  },
  {
    id: 9,
    title: "MongoDB Certified Developer",
    organization: "MongoDB",
    date: "2023",
    credentialId: "MCD-345678"
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
