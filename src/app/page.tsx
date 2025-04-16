import React from 'react';
import Quote from '@/components/Quote';
import Metrics from '@/components/Metrics';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Footer from '@/components/footer';
export default function Home() {
  return (
    <div>
      <Hero />
      <Quote />
      <Metrics />
      <Process />
      <CTA />
      <Footer />
    </div>    
  );
}
