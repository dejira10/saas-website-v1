import React from 'react';
import ChatHeader from './chat/ChatHeader';
import MissedCallNotification from './chat/MissedCallNotification';
import ChatAnimation from './chat/ChatAnimation';
import { MessageSquare, ArrowRight, Zap } from 'lucide-react';

export default function MissedCallDemo() {
  return (
    <div className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#512889] mb-4">
            Never Miss Another Lead
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Instantly respond to missed calls with personalized text messages
          </p>
        </div>

        <div className="flex justify-center items-center">
          {/* Decorative Elements - Left */}
          <div className="hidden lg:flex flex-col items-end mr-12 space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center space-x-3 text-[#512889]">
                <MessageSquare className="h-5 w-5" />
                <span className="font-medium">Instant Response</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Automated responses sent within seconds of a missed call
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#FF5CCC] to-[#512889] p-4 rounded-lg shadow-lg max-w-xs text-white transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5" />
                <span className="font-medium">24/7 Availability</span>
              </div>
              <p className="text-sm text-white/90 mt-2">
                Never miss a lead, even outside business hours
              </p>
            </div>
          </div>

          {/* Phone Frame - Fixed Width */}
          <div className="relative w-[360px]">
            <div className="bg-black rounded-[3rem] p-4 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] overflow-hidden h-[700px] w-full">
                <ChatHeader />
                <MissedCallNotification />
                <ChatAnimation />
              </div>
            </div>
            
            {/* Phone Shadow/Reflection */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] h-4 bg-black/10 blur-lg rounded-full"></div>
          </div>

          {/* Decorative Elements - Right */}
          <div className="hidden lg:flex flex-col items-start ml-12 space-y-8">
            <div className="bg-gradient-to-r from-[#512889] to-[#973DA4] p-4 rounded-lg shadow-lg max-w-xs text-white transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center space-x-3">
                <ArrowRight className="h-5 w-5" />
                <span className="font-medium">Smart Routing</span>
              </div>
              <p className="text-sm text-white/90 mt-2">
                Automatically qualify and route leads to the right team
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs transform hover:-translate-y-1 transition-transform">
              <div className="flex items-center space-x-3 text-[#512889]">
                <MessageSquare className="h-5 w-5" />
                <span className="font-medium">Personalized</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Custom messages that feel personal and engaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}