import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              The 1 in 20 Challenge
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              Help us raise $250,000 by June 30th and watch our CEO face his biggest fear!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#overview" className="btn-secondary">
                Learn More
              </a>
              <a href="https://www.1in20.org.au/donate" className="btn-primary bg-accent-500 text-accent-500 hover:bg-accent-400">
                Donate Now <ArrowRight className="inline ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative z-10 overflow-hidden rounded-lg transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/images/Gavinphoto.jpeg" 
                alt="Children at a Feel the Magic event" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 p-4 md:p-8 bg-white/10 backdrop-blur-sm rounded-lg text-center">
          <p className="text-xl md:text-2xl font-bold">
            If we reach our goal, our CEO Gavin will hold a snake — and he's terrified of them!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;