import React from 'react';
import { Check } from 'lucide-react';

interface MessageProps {
  text: string;
  time: string;
  isAgent?: boolean;
  isDelivered?: boolean;
}

export default function Message({ text, time, isAgent = false, isDelivered = false }: MessageProps) {
  return (
    <div className={`flex ${isAgent ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isAgent
            ? 'bg-blue-500 text-white rounded-tr-none'
            : 'bg-gray-100 text-gray-800 rounded-tl-none'
        }`}
      >
        <p className="text-sm">{text}</p>
        <div className="flex items-center justify-end mt-1 space-x-1">
          <span className={`text-xs ${isAgent ? 'text-blue-100' : 'text-gray-500'}`}>
            {time}
          </span>
          {isAgent && isDelivered && (
            <Check className="h-3 w-3 text-blue-100" />
          )}
        </div>
      </div>
    </div>
  );
}