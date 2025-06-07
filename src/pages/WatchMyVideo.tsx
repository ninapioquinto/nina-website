
import { ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Particles from '../components/Particles';

const WatchMyVideo = () => {
  const videos = [
    {
      id: '1',
      title: 'How I Built a Complete CRM System with AI Automation',
      description: 'Watch as I walk through building a complete CRM system from scratch, integrating AI automation to streamline lead management and follow-ups.',
      thumbnail: '/placeholder.svg',
      duration: '12:45',
      views: '2.3K views',
      uploadTime: '2 days ago',
      category: 'CRM Build'
    },
    {
      id: '2',
      title: 'AI-Powered Lead Scoring: From Setup to Success',
      description: 'Learn how to implement AI-powered lead scoring that automatically prioritizes your hottest prospects and increases conversion rates.',
      thumbnail: '/placeholder.svg',
      duration: '8:30',
      views: '1.8K views',
      uploadTime: '5 days ago',
      category: 'AI Automation'
    },
    {
      id: '3',
      title: 'Make.com Workflows That Save 10+ Hours Per Week',
      description: 'Discover the exact Make.com workflows I use to automate repetitive tasks and save my clients over 10 hours per week.',
      thumbnail: '/placeholder.svg',
      duration: '15:20',
      views: '3.1K views',
      uploadTime: '1 week ago',
      category: 'Automation',
      videoUrl: 'https://drive.google.com/file/d/1Lez8yjnIjR6x64QNXC1ekf_W_QRIKkFn/view?usp=sharing'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="mb-12">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                  Watch My Videos
                </h1>
                <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
                  Dive deep into CRM optimization, AI automation, and system engineering with my detailed video tutorials and case studies.
                </p>
                
                {/* Featured Video Section */}
                <div className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 border border-purple-400/40 rounded-2xl p-8 mb-12 backdrop-blur-sm">
                  <div className="flex items-center justify-center mb-4">
                    <Play className="w-6 h-6 text-primary mr-2" />
                    <span className="text-primary font-semibold">Featured Video</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Complete CRM Setup Masterclass
                  </h2>
                  <p className="text-white/70 mb-6">
                    Watch my most popular video where I build a complete CRM system from scratch in under 20 minutes.
                  </p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Watch Now
                  </button>
                </div>
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-indigo-600/10 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-white/70 mb-6">
                  If you're inspired by what you've seen, let's discuss how I can build a custom solution for your business.
                </p>
                <Link 
                  to="/work-with-me" 
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default WatchMyVideo;
