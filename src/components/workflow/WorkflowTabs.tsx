import React from 'react';

const tabs = ['Builder', 'Settings', 'Enrollment History', 'Execution Logs'];

export default function WorkflowTabs() {
  return (
    <div className="flex space-x-8 px-6 border-b">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`py-3 border-b-2 ${
            index === 0 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}