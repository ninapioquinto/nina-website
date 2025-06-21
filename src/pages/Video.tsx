
import VideoCard from '../components/VideoCard';

const Video = () => {
  const videos = [
    {
      id: "1",
      title: "Custom CRM System Implementation",
      description: "See how I built a custom CRM system for a service-based business that reduced manual work by 15 hours per week.",
      thumbnail: "/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png",
      duration: "8:32",
      views: "1.2K views",
      uploadTime: "2 weeks ago",
      category: "CRM Systems",
      embedCode: '<iframe width="100%" height="315" src="https://drive.google.com/file/d/1Lez8yjnIjR6x64QNXC1ekf_W_QRIKkFn/preview" title="CRM System Demo" frameborder="0" allowfullscreen></iframe>'
    },
    {
      id: "2",
      title: "AI Automation Workflow Demo",
      description: "Watch how I automated a complete client onboarding process using AI tools and workflow automation.",
      thumbnail: "/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png",
      duration: "12:45",
      views: "856 views",
      uploadTime: "3 weeks ago",
      category: "Automation",
      videoUrl: "https://www.youtube.com/watch?v=example"
    },
    {
      id: "3",
      title: "Business Process Optimization",
      description: "A case study showing how I streamlined operations for a growing consulting firm.",
      thumbnail: "/lovable-uploads/58da3295-08c3-4d16-9214-f7d1bd815361.png",
      duration: "15:20",
      views: "2.1K views",
      uploadTime: "1 month ago",
      category: "Process Optimization"
    },
    {
      id: "4",
      title: "GoHighLevel Integration Tutorial",
      description: "Step-by-step guide on integrating custom solutions with GoHighLevel for better client management.",
      thumbnail: "/lovable-uploads/f33f1f05-555a-4043-8f47-babb6b1a2f95.png",
      duration: "18:30",
      views: "945 views",
      uploadTime: "1 month ago",
      category: "Integrations"
    },
    {
      id: "5",
      title: "Data Migration Success Story",
      description: "How I helped a business migrate from multiple spreadsheets to a unified system without losing any data.",
      thumbnail: "/lovable-uploads/ab61576f-da73-4131-bed5-4674c92cee7f.png",
      duration: "10:15",
      views: "734 views",
      uploadTime: "2 months ago",
      category: "Data Management"
    },
    {
      id: "6",
      title: "Client Results: 20 Hours Saved Weekly",
      description: "Real testimonial and system walkthrough showing the impact of custom automation solutions.",
      thumbnail: "/lovable-uploads/cc9d382f-4232-40fb-9355-3cf96bcbc0d8.png",
      duration: "14:22",
      views: "1.8K views",
      uploadTime: "2 months ago",
      category: "Case Studies"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              Video Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Watch real implementations, case studies, and tutorials showcasing how I build systems that save time and streamline operations for businesses.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                {...video}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-400/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to See Your Business Transform?
              </h2>
              <p className="text-muted-foreground mb-6">
                These are just examples of what's possible. Let's discuss how I can build custom solutions for your specific needs.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
