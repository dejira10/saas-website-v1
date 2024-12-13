import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkflowShowcase from './components/WorkflowShowcase';
import SystemSnapshots from './components/SystemSnapshots';
import AIFeatures from './components/sections/AIFeatures';
import PlatformEfficiency from './components/sections/PlatformEfficiency';
import RevenueSolution from './components/sections/RevenueSolution';
import AlternateWorkflowShowcase from './components/AlternateWorkflowShowcase';
import MissedCallDemo from './components/MissedCallDemo';
import WorkflowDemo from './components/WorkflowDemo';
import HowItWorks from './components/HowItWorks';
import ContactForm from './components/ContactForm';
import PricingPage from './components/pricing/PricingPage';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WorkflowShowcase />
      <SystemSnapshots />
      <AIFeatures />
      <PlatformEfficiency />
      <RevenueSolution />
      <AlternateWorkflowShowcase />
      <MissedCallDemo />
      <WorkflowDemo />
      <HowItWorks />
      <PricingPage />
      <ContactForm />
    </div>
  );
}

export default App;