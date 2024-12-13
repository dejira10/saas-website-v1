import React from 'react';

interface WorkflowBranchProps {
  label: string;
  condition: string;
  children: React.ReactNode;
}

export default function WorkflowBranch({ label, condition, children }: WorkflowBranchProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-gray-300" />
      <div className="pt-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-purple-500" />
            <span className="text-sm font-medium">{label}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{condition}</p>
        </div>
        {children}
      </div>
    </div>
  );
}