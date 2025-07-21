import React from 'react';

const Demos: React.FC = () => {
  const demos = [
    {
      title: 'Service dashboard',
      description: 'A dashboard page presents at-a-glance information about service and resource status. Users can monitor this information and act upon it quickly.',
      category: 'Dashboard',
      image: '📊',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Table view',
      description: 'The table view pattern is a collection of resources in a tabular format. It\'s effective for quickly identifying categories or comparing values.',
      category: 'Data Display',
      image: '📋',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Single page create',
      description: 'Use single page create if you want your users to create a resource on a single page. Optimized for simple to medium-complex forms.',
      category: 'Forms',
      image: '📝',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Multipage create',
      description: 'Use the multipage create, which employs the wizard component, when you want users to create resources by completing interrelated tasks.',
      category: 'Wizards',
      image: '🧙‍♂️',
      gradient: 'from-green-400 to-teal-400'
    },
    {
      title: 'Split view with details',
      description: 'An example of comparing key resource details within the split panel on a split view for detailed analysis.',
      category: 'Layout',
      image: '⚡',
      gradient: 'from-pink-400 to-yellow-400'
    },
    {
      title: 'Density settings',
      description: 'The density settings pattern uses local storage to remember the user\'s preferred density setting between comfortable and compact mode.',
      category: 'Settings',
      image: '⚙️',
      gradient: 'from-teal-300 to-pink-300'
    }
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Selected demos</h2>
          <p className="text-lg text-neutral-700 opacity-90 max-w-2xl mx-auto">
            Want to know what the system looks like in action? Below are demos that give you
            a preview. You can find all these in our demos section.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {demos.map((demo, index) => (
            <div key={index} className="bg-white border border-neutral-200 rounded-lg flex flex-col h-full overflow-hidden p-0 hover:shadow-lg transition-shadow duration-200">
              <div className="relative bg-neutral-0 border-b border-neutral-200">
                <div className={`h-44 flex items-center justify-center bg-gradient-to-br ${demo.gradient} relative`}>
                  <span className="text-5xl md:text-4xl filter brightness-0 invert">{demo.image}</span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 text-neutral-700 px-3 py-1 rounded text-sm font-medium">
                  {demo.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-3 text-neutral-900">{demo.title}</h3>
                <p className="flex-1 leading-relaxed text-neutral-700 mb-6 text-sm">
                  {demo.description}
                </p>
                <div className="flex gap-4 items-center flex-col md:flex-row">
                  <a 
                    href={`/demos/${demo.title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm w-full md:w-auto justify-center rounded-lg font-medium transition-colors duration-200"
                  >
                    View demo
                  </a>
                  <a 
                    href={`/examples/${demo.title.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-red-600 no-underline text-sm font-medium px-3 py-2 rounded transition-colors duration-200 hover:bg-red-50"
                  >
                    View code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-neutral-200">
          <a href="/demos" className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 font-semibold rounded-lg transition-colors duration-200">
            View all demos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Demos;
