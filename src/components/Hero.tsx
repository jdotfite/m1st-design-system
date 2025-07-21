import React from 'react';
import { Button } from './ui';

const Hero: React.FC = () => {
  return (
    <section className="bg-neutral-0 border-b border-neutral-200 py-16 lg:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-neutral-900">
            An open source design system for the cloud
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed text-neutral-700 mb-10 opacity-90">
            M1st offers user interface guidelines, front-end components, design
            resources, and development tools for building intuitive, engaging, and 
            inclusive user experiences at scale.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/get-started'}
            >
              Get started
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/demos'}
            >
              View demos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
