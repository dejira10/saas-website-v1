import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface WorkflowNodeProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  type?: 'trigger' | 'action' | 'condition';
}

export default function WorkflowNode({ icon, title, subtitle, type = 'action' }: WorkflowNodeProps) {
  const getBgColor = () => {
    switch (type) {
      case 'trigger':
        return 'bg-emerald-50 border-emerald-200';
      case 'condition':
        return 'bg-purple-50 border-purple-200';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className={`flex items-center p-4 border rounded-lg ${getBgColor()} w-72`}>
      <div className="flex-1 flex items-center">
        <div className="mr-3">{icon}</div>
        <div>
          <div className="text-sm font-medium">{title}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  );
}