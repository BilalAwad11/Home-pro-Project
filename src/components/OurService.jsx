import React from 'react';

// Example array data to keep your code clean, manageable, and easy to scale
const servicesData = [
  {
    id: 1,
    title: 'Plumbing services',
    desc: 'Drain pipe leaking, pipe clogged, replace the pipe line',
    iconBg: 'bg-[#13234e]',
    // Replace with your real icon asset or SVG
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Roofing repair',
    desc: 'Roof leaks, tile replacement, roof cleaning and maintenance',
    iconBg: 'bg-[#13234e]',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Mold Removal',
    desc: 'Removing and cleaning mildew, Restoration and Prevention',
    iconBg: 'bg-[#13234e]',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Tree Trimming',
    desc: 'Trimming and cleaning, Deadwood removal, Tree shaping',
    iconBg: 'bg-[#13234e]',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Appliance Repair',
    desc: 'repair of washing machines, refrigerators, Air conditioner, etc',
    iconBg: 'bg-[#13234e]',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Bathroom Remodeling',
    desc: 'Design and Consulting, installation, Repairing, tile repair',
    iconBg: 'bg-[#13234e]',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Locksmith',
    desc: 'Lock Installation and Repair, Duplication, Lock Rekeying',
    iconBg: 'bg-[#13234e]',
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const OurServices = () => {
  return (
    <section className="bg-white w-full py-20 px-6 md:px-12 lg:px-24 text-center">
      
      {/* Header Container */}
      <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
          Our Services
        </h2>
        <p className="text-[#6b7280] text-sm md:text-base leading-relaxed">
          You have problems with leaking pipes, broken tiles, lost keys or <br className="hidden md:inline"/>
          want to tidy up the trees around you, of course you need our help!
        </p>
      </div>

      {/* Services Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 text-left">
        
        {/* Map through the 7 text services */}
        {servicesData.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 p-2">
            {/* Shaped Icon Box */}
            <div className={`${item.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm`}>
              {item.icon}
            </div>
            
            {/* Title & Description */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#111827]">
                {item.title}
              </h3>
              <p className="text-[#6b7280] text-sm leading-relaxed max-w-[240px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* 8th Item: Blue Custom Call-To-Action Card */}
        <div className="bg-[#00a3ff] rounded-3xl p-8 flex flex-col justify-between text-center text-white min-h-[250px] shadow-lg">
          <div className="flex flex-col gap-2 mt-2">
            <h3 className="text-2xl font-bold">More service?</h3>
            <p className="text-sm opacity-90 leading-relaxed px-2">
              You can tell us what you need and we can help!
            </p>
          </div>
          
          <button className="bg-white text-[#00a3ff] font-bold py-4 px-6 rounded-full w-full hover:bg-opacity-95 transition-all duration-200 shadow-md">
            Call Us Now
          </button>
        </div>

      </div>

    </section>
  );
};

export default OurServices;