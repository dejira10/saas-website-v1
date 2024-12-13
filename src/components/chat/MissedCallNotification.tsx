import React from 'react';
import { Phone } from 'lucide-react';

export default function MissedCallNotification() {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
          <Phone className="h-5 w-5 text-red-500" />
        </div>
        <div>
          <p className="font-medium">Missed Call</p>
          <p className="text-sm text-gray-500">Inbound Call - 08:21 PM</p>
        </div>
      </div>
    </div>
  );
}