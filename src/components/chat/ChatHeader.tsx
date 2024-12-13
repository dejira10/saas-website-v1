import React from 'react';
import { Phone } from 'lucide-react';

export default function ChatHeader() {
  return (
    <div className="bg-gray-100 px-4 py-2 flex justify-between items-center rounded-t-[2.5rem]">
      <span className="text-sm">08:21 PM</span>
      <div className="flex items-center space-x-2">
        <Phone className="h-4 w-4" />
        <div className="h-4 w-4 bg-green-500 rounded-full" />
      </div>
    </div>
  );
}