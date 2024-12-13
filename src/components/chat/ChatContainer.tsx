import React from 'react';
import ChatHeader from './ChatHeader';
import MissedCallNotification from './MissedCallNotification';
import ChatAnimation from './ChatAnimation';

export default function ChatContainer() {
  return (
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
  );
}