import React from 'react';
import { ChevronLeft, Edit, Clock } from 'lucide-react';

export default function WorkflowHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Workflows
        </button>
        <h1 className="text-lg font-medium">000. Organize New Leads</h1>
        <Edit className="h-4 w-4 text-gray-400" />
      </div>
      <div className="flex items-center space-x-4">
        <Clock className="h-4 w-4 text-gray-400" />
        <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm">
          Saved
        </button>
      </div>
    </div>
  );
}