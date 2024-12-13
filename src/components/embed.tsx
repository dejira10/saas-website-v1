import React from 'react';
import { createRoot } from 'react-dom/client';
import MissedCallDemo from './MissedCallDemo';

// Create a function to initialize the embed
window.initChatDemo = function(elementId) {
  const container = document.getElementById(elementId);
  if (container) {
    const root = createRoot(container);
    root.render(<MissedCallDemo />);
  }
};

// Export the component for direct usage
export { MissedCallDemo };