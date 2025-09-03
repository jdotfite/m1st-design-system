import React, { useState, useRef, useEffect } from 'react';
import { Card, CardBody } from '../Card';
import { useTheme } from '../../../contexts/ThemeContext';

interface DistributionTestProps {
  componentName: string;
  htmlExample: string;
  description?: string;
}

export const DistributionTest: React.FC<DistributionTestProps> = ({
  componentName,
  htmlExample,
  description = "Compare how this component renders with different CSS distributions"
}) => {
  const { resolvedTheme } = useTheme();
  const [showTest, setShowTest] = useState(false);
  const monolithicRef = useRef<HTMLIFrameElement>(null);
  const incrementalRef = useRef<HTMLIFrameElement>(null);
  const [framesReady, setFramesReady] = useState({ monolithic: false, incremental: false });

  // Handle messages from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'ready') {
        setFramesReady(prev => ({
          ...prev,
          [event.data.distribution]: true
        }));
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Send HTML and theme to iframes when they're ready
  useEffect(() => {
    if (framesReady.monolithic && monolithicRef.current) {
      monolithicRef.current.contentWindow?.postMessage({
        type: 'setComponent',
        html: htmlExample
      }, '*');
      monolithicRef.current.contentWindow?.postMessage({
        type: 'setTheme',
        theme: resolvedTheme
      }, '*');
    }
    
    if (framesReady.incremental && incrementalRef.current) {
      incrementalRef.current.contentWindow?.postMessage({
        type: 'setComponent', 
        html: htmlExample
      }, '*');
      incrementalRef.current.contentWindow?.postMessage({
        type: 'setTheme',
        theme: resolvedTheme
      }, '*');
    }
  }, [framesReady, htmlExample, resolvedTheme]);

  // Update theme when it changes
  useEffect(() => {
    if (framesReady.monolithic && monolithicRef.current) {
      monolithicRef.current.contentWindow?.postMessage({
        type: 'setTheme',
        theme: resolvedTheme
      }, '*');
    }
    
    if (framesReady.incremental && incrementalRef.current) {
      incrementalRef.current.contentWindow?.postMessage({
        type: 'setTheme',
        theme: resolvedTheme
      }, '*');
    }
  }, [resolvedTheme, framesReady]);

  if (!showTest) {
    return (
      <Card>
        <CardBody>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Distribution Testing</h3>
              <p className="text-neutral-600 text-sm">{description}</p>
            </div>
            <button
              onClick={() => setShowTest(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Test Distributions
            </button>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardBody>
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Distribution Testing</h3>
          <button
            onClick={() => setShowTest(false)}
            className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Hide
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monolithic Version */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h4 className="font-semibold">Monolithic CSS</h4>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <iframe
                ref={monolithicRef}
                src="/test/monolithic-frame.html"
                className="w-full h-32 border-0"
                title={`${componentName} - Monolithic Distribution`}
              />
            </div>
          </div>

          {/* Incremental Version */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <h4 className="font-semibold">Incremental CSS</h4>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <iframe
                ref={incrementalRef}
                src="/test/incremental-frame.html"
                className="w-full h-32 border-0"
                title={`${componentName} - Incremental Distribution`}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h5 className="font-semibold text-sm mb-1">What to Check:</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Both versions should look identical</li>
            <li>• Colors, spacing, and typography should match</li>
            <li>• Interactive states should work in both</li>
          </ul>
        </div>
      </CardBody>
    </Card>
  );
};
