import React from 'react';
import { Hero } from './components/Hero';
import { Empathy } from './components/Empathy';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Offer } from './components/Offer';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';
import { SocialProofToast } from './components/SocialProofToast';
import { CountdownBar } from './components/CountdownBar';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-holiday-red selection:text-white">
      <CountdownBar />
      <main>
        <Hero />
        <Empathy />
        <Solution />
        <Benefits />
        <Testimonials />
        <Offer />
        <Guarantee />
      </main>
      <Footer />
      <SocialProofToast />
      
      {/* Sticky Mobile CTA that appears on scroll could be added here if needed, 
          but the main CTA in the Hero and Offer sections are prominent enough for this design. */}
    </div>
  );
}

export default App;