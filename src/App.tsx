import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CampaignOverview from './components/CampaignOverview';
import VideoSection from './components/VideoSection';
import RecordingInstructions from './components/RecordingInstructions';
import UploadSection from './components/UploadSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection />
        <CampaignOverview />
        <VideoSection />
        <RecordingInstructions />
        <UploadSection />
      </main>
    </div>
  );
}

export default App;