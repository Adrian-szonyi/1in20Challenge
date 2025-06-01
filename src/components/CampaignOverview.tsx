import React from 'react';
import { Target, Calendar, Award, Heart } from 'lucide-react';

const CampaignOverview: React.FC = () => {
  return (
    <section id="overview" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">Campaign Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            Feel the Magic is running the "1 in 20" challenge to raise crucial funds for our programs
            supporting children who have experienced grief.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card text-center group">
            <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 group-hover:text-primary-600 transition-colors duration-300">
              <Target className="w-8 h-8 text-accent-500 group-hover:text-primary-600 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Goal</h3>
            <p className="text-gray-600">
              We're aiming to raise $250,000 by June 30th to support children experiencing grief through our programs.
            </p>
          </div>
          
          <div className="card text-center group">
            <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 group-hover:text-primary-600 transition-colors duration-300">
              <Calendar className="w-8 h-8 text-accent-500 group-hover:text-primary-600 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">The Timeline</h3>
            <p className="text-gray-600">
              Fundraising runs until June 30th, with regular updates on our progress and special video replies from our CEO.
            </p>
          </div>
          
          <div className="card text-center group">
            <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 group-hover:text-primary-600 transition-colors duration-300">
              <Award className="w-8 h-8 text-accent-500 group-hover:text-primary-600 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">The Challenge</h3>
            <p className="text-gray-600">
              If we reach our goal, our CEO Gavin will face his biggest fear by holding a snake in a special live event!
            </p>
          </div>
          
          <div className="card text-center group">
            <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-500 group-hover:text-primary-600 transition-colors duration-300">
              <Heart className="w-8 h-8 text-accent-500 group-hover:text-primary-600 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Your Impact</h3>
            <p className="text-gray-600">
              Every dollar helps us provide support to the 1 in 20 children experiencing grief before they turn 18.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignOverview;