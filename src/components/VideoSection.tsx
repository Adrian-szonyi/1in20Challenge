import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">Watch Our Campaign Video</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            Learn more about the 1 in 20 Challenge and how your participation will make a difference in the lives of grieving children.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl group">
          <div className="aspect-video bg-gray-800 flex items-center justify-center relative overflow-hidden">
            {!isPlaying ? (
              <>
                <img 
                  src="/1in20Challenge/images/frame_12014.jpg"
                  alt="Video thumbnail" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute z-10 bg-accent-500 hover:bg-accent-400 text-primary-600 rounded-full w-20 h-20 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110"
                >
                  <Play className="w-10 h-10 fill-current" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">The 1 in 20 Challenge: Help Us Reach $250,000</h3>
                  <p className="text-white/80">Watch CEO Gavin explain the challenge and how your donation helps</p>
                </div>
              </>
            ) : (
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                src="/1in20Challenge/images/Gavin Video 1 V01 (1).mp4"
              />
            )}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
            <h3 className="font-bold text-lg mb-2">CEO's Message</h3>
            <p className="text-gray-600">
              Hear directly from Gavin about why this campaign matters and what it means for the children we support.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary-500">
            <h3 className="font-bold text-lg mb-2">Your Video Challenge</h3>
            <p className="text-gray-600">
              Learn how to participate by recording your own 15-second video sharing why you're supporting this campaign.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent-500">
            <h3 className="font-bold text-lg mb-2">Snake Challenge</h3>
            <p className="text-gray-600">
              Discover what happens when we reach our goal – Gavin faces his fear of snakes live for all to see!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;