import React from 'react';
import { Video, Smartphone, Mic, Sun } from 'lucide-react';

const RecordingInstructions: React.FC = () => {
  return (
    <section id="instructions" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto inline-block after:left-1/2 after:-translate-x-1/2">How to Record Your Video</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-8">
            Recording a great 15-second video is easy! Follow these simple tips to ensure your submission looks and sounds its best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Submission Guidelines</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-accent-100 p-2 rounded-full mr-4 mt-1">
                  <Video className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Keep it short and sweet</p>
                  <p className="text-gray-600">Your video should be maximum 15 seconds long. Focus on why you're donating to Feel the Magic.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-accent-100 p-2 rounded-full mr-4 mt-1">
                  <Smartphone className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Use portrait orientation</p>
                  <p className="text-gray-600">Hold your phone horizontally (portrait) for the best video format on social media.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-accent-100 p-2 rounded-full mr-4 mt-1">
                  <Mic className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Speak clearly</p>
                  <p className="text-gray-600">Find a quiet location and speak directly to the camera with a clear, natural voice.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-accent-100 p-2 rounded-full mr-4 mt-1">
                  <Sun className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Find good lighting</p>
                  <p className="text-gray-600">Natural light is best. Position yourself facing a window or in a well-lit area.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Example Script</h3>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-500">
              <p className="italic text-gray-700 mb-4">
                "Hi, I'm [Your Name]. I'm donating to Feel the Magic because every child deserves support during grief. Join me in helping reach the $250,000 goal and watch Gavin face his fear of snakes!"
              </p>
              <p className="text-sm text-gray-500">
                Feel free to personalize your message. If you have a personal connection to the cause, sharing that can be very powerful (while keeping within the 15-second limit).
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-3">Tips for Smartphone Recording</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Clean your camera lens before recording
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Try to hold your phone in a stable position when recording
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Position the camera at eye level for the most flattering angle
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Do a test recording to check audio and framing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  Make sure there's nothing distracting in the background
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-8 md:p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Your Video Matters</h3>
              <p className="mb-4">
                Your personal message helps create a community of support around this campaign. CEO Gavin will record a personal reply to each submission.
              </p>
              <p>
                These videos will be shared on Feel the Magic's social media platforms, inspiring others to join our cause and helping us reach our $250,000 goal.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4">What Happens Next?</h4>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                  <p>Record your 15-second video explaining why you're donating</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                  <p>Upload your video to our Google Drive link (see below)</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                  <p>CEO Gavin will record a personal reply to your message</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                  <p>Watch for your video on our social media channels!</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordingInstructions;