import React from 'react';

const Research = () => {
  const researchProjects = [
    {
      id: 1,
      title: "Smart Plant Watering System",
      overview:
        "This research explores the design and implementation of an IoT-based Smart Automated Plant Watering System. Aimed at reducing water waste and minimizing manual intervention, the system leverages real-time soil moisture data and embedded hardware to automate irrigation in a sustainable, resource-efficient manner.",
      methodology:
        "The system integrates a soil moisture sensor with an Arduino Uno to control a water pump via a relay. Data is logged using a Python backend with a MySQL database. The setup was tested in a controlled environment for one week.",
      findings:
        "The prototype reduced water usage by approximately 35% compared to manual irrigation, without affecting plant health. It proved to be low-cost, reliable, and scalable.",
      conclusion:
        "The project demonstrates how IoT-based automation can enhance agricultural efficiency. Future work could involve solar integration, AI-based prediction, and remote monitoring to support smart farming.",
    },
    {
      id: 2,
      title: "Empowering Rural Tribal Women Farmers and School Children",
      overview:
        "This field research aimed to understand the socio-economic status and agricultural practices of tribal women farmers in four villages of Nadia district, West Bengal. It also introduced school children to science-based learning through field activities and workshops.",
      methodology:
        "A month-long study (June 5 - July 5, 2024) involving 50 tribal women was conducted using structured interviews, field visits, and group discussions. Partner institutions included ICAR-NDRI and WBUAFS.",
      findings:
        "Women showed strong interest in integrated farming systems and technology adoption. Most used hybrid seeds and social media for farming knowledge. Children participated in science awareness sessions, enhancing their engagement with education.",
      conclusion:
        "The study highlights the potential of combining education with rural empowerment. Scientific training and improved access to technology can significantly uplift agricultural practices and youth education in tribal communities.",
    }
  ];

  return (
        <section>
      <div className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold text-center text-purple-300 mb-12">My Research Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="relative p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.05] cursor-pointer
              bg-black/40 backdrop-blur-xl border border-gray-700 hover:border-purple-400 hover:shadow-purple-500/30"
            >
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-semibold text-purple-200">{project.title}</h3>

                <div className="space-y-3 text-gray-200">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-1">Overview</h4>
                    <p>{project.overview}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-1">Methodology</h4>
                    <p>{project.methodology}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-1">Key Findings</h4>
                    <p>{project.findings}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-1">Conclusion</h4>
                    <p>{project.conclusion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
