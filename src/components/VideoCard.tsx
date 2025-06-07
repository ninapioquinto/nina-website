
import { Play, Eye, Clock, Heart, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadTime: string;
  category: string;
  videoUrl?: string;
}

const VideoCard = ({ title, description, thumbnail, duration, views, uploadTime, category, videoUrl }: VideoCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleVideoClick = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleVideoClick}>
      <div className="relative overflow-hidden rounded-3xl aspect-video mb-6 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-400/20">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/30">
            {videoUrl ? (
              <ExternalLink className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            )}
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-lg font-medium backdrop-blur-sm">
          {duration}
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white text-sm px-3 py-1 rounded-lg font-medium">
          {category}
        </div>

        {/* Like button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-300 ${
              isLiked ? 'text-red-500 fill-current' : 'text-white'
            }`} 
          />
        </button>
      </div>
      
      <div className="space-y-3 px-2">
        <h3 className="text-white font-semibold text-xl leading-relaxed line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-base line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{uploadTime}</span>
          </div>
          {videoUrl && (
            <div className="flex items-center space-x-2 text-primary">
              <ExternalLink className="w-4 h-4" />
              <span>Watch Video</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
