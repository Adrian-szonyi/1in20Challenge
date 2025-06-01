import React from 'react';
import { Upload, DollarSign, Share2 } from 'lucide-react';

const UploadSection: React.FC = () => {
  return (
    <section id="upload" className="py-16 md:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Upload Your Video & Donate</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Join our community of supporters and help us reach our $250,000 goal by June 30th!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Upload Your Video</h3>
            <p className="mb-6">
              Submit your 15-second video telling us why you're supporting Feel the Magic.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1CksSTtlIkXOsxtwL4HYpXIOcpI8mCdLL?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary bg-white/20 hover:bg-accent-500 hover:text-primary-600 border-white/40 text-white"
            >
              Google Drive Upload
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Make Your Donation</h3>
            <p className="mb-6">
              Every dollar helps us provide healing programs for children experiencing grief.
            </p>
            <a href="https://www.1in20.org.au/donate" className="btn-primary text-accent-500">
              Donate Now
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Share2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Share The Challenge</h3>
            <p className="mb-6">
              Help spread the word by sharing this campaign with your friends and family.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.open('https://www.facebook.com/FeelTheMagic/', '_blank')}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent-500 hover:text-primary-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={() => window.open('https://www.linkedin.com/company/feel-the-magic/', '_blank')}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent-500 hover:text-primary-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button 
                onClick={() => window.open('https://www.instagram.com/feelthemagicau/', '_blank')}
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-accent-500 hover:text-primary-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white text-gray-800 rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="bg-accent-100 p-4 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Google Drive Upload Instructions</h3>
              <p className="text-gray-600">Click the link above and follow these steps to upload your video:</p>
            </div>
          </div>
          
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <p>Rename your video file to include your full name (e.g., "Jane_Smith_Donation.mp4")</p>
            </li>
            <li className="flex items-start">
              <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <p>Click the "+" button or drag and drop your video into the Google Drive folder</p>
            </li>
            <li className="flex items-start">
              <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <p>Wait for the upload to complete (you'll see a green checkmark)</p>
            </li>
            <li className="flex items-start">
              <span className="bg-accent-500 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <p>That's it! No need to share permissions - we'll be able to see your upload</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;