import React from 'react';

const snapshots = [
  {
    title: 'Proven-To-Convert Sales Funnels and Websites',
    image: '/assets/workflow-automation.svg',
    features: [
      {
        title: 'Lead Qualifying',
        description: 'Sales Funnels Built To Convert Clicks Into Customers'
      },
      {
        title: 'Industry Specific',
        description: 'Website With Home, About, Services, & Contact'
      },
      {
        title: 'Fully Mobile Responsive',
        description: 'So You Can Reach Your Audience On Any Device'
      },
      {
        title: 'Simple To Customize',
        description: 'With Custom Values And Easy Page Editor'
      }
    ]
  },
  {
    title: 'Nurture & Segment Your Leads With Automated Workflows',
    image: '/assets/booking-system.svg',
    features: [
      {
        title: 'Automated Follow-Ups',
        description: 'To Move Leads Along The Customer Journey'
      },
      {
        title: 'Increase Engagement',
        description: 'With Pre-Built Conversation Workflows'
      },
      {
        title: 'Appointment Campaigns',
        description: 'Ensure Your Prospects Show Up Every Time'
      },
      {
        title: 'Capture Reviews',
        description: 'And Boost Your Companies Online Trust Factor'
      }
    ]
  },
  {
    title: 'Manage Your Leads With Pipelines & Opportunities',
    image: '/assets/team-management.svg',
    features: [
      {
        title: 'Visually',
        description: 'Keep Track Of Every Stage Of Your Sales Cycle'
      },
      {
        title: 'Automatically',
        description: 'Move Leads Through Your Pipelines'
      },
      {
        title: 'Instantly',
        description: 'See The Value Of The Deals In Each Stage Of Your Pipeline'
      },
      {
        title: 'Uncover And Unlock',
        description: 'Bottlenecks That Used To Cripple Your Business'
      }
    ]
  }
];

export default function SystemSnapshots() {
  return (
    <div className="py-24 bg-[#0B1121] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5CCC] opacity-10 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#512889] opacity-10 blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What's Inside{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5CCC] to-[#512889]">
              RapidScale Marketing
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to capture, convert, and close more leads automatically
          </p>
        </div>

        <div className="space-y-24">
          {snapshots.map((snapshot, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <img
                    src={snapshot.image}
                    alt={snapshot.title}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>

                <div>
                  <div className="inline-block bg-gradient-to-r from-[#FF5CCC] to-[#512889] px-6 py-2 rounded-full font-bold text-white mb-8">
                    {snapshot.title}
                  </div>

                  <div className="space-y-6">
                    {snapshot.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start space-x-3"
                        style={{
                          animation: 'fadeInUp 0.5s ease-out forwards',
                          animationDelay: `${featureIndex * 0.1}s`
                        }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 bg-gradient-to-r from-[#FF5CCC] to-[#512889] rounded-full" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#FF5CCC] text-lg">
                            {feature.title}{' '}
                            <span className="font-normal text-gray-300">
                              {feature.description}
                            </span>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}