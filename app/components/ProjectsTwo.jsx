import React from "react";

const StackedScroll = () => {
  const sections = [
    {
      id: 1,
      heading: "Poseidon",
      date: "12/06/2023",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 1.",
      status: "Completed",
      achievements: ["Achievement 1.1", "Achievement 1.2", "Achievement 1.3"],
      distance: "400 km",
      apogee: "150 km",
      thrust: "1,500 kN",
      weight: "500 tons",
    },
    {
      id: 2,
      heading: "Jericho",
      date: "06/08/2023",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 2.",
      status: "In Progress",
      achievements: ["Achievement 2.1", "Achievement 2.2"],
      distance: "350 km",
      apogee: "120 km",
      thrust: "1,200 kN",
      weight: "450 tons",
    },
    {
      id: 3,
      heading: "Pioneer",
      date: "31/10/2023",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 3.",
      status: "Pending",
      achievements: [
        "Achievement 3.1",
        "Achievement 3.2",
        "Achievement 3.3",
        "Achievement 3.4",
      ],
      distance: "300 km",
      apogee: "100 km",
      thrust: "1,000 kN",
      weight: "400 tons",
    },
    {
      id: 4,
      heading: "IgniteX",
      date: "24/12/2024",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 4.",
      status: "Completed",
      achievements: ["Achievement 4.1"],
      distance: "500 km",
      apogee: "180 km",
      thrust: "1,800 kN",
      weight: "550 tons",
    },
  ];

  const heightReduction = 80;
  const totalHeight = `calc(${sections.length * 100}vh - ${
    (sections.length - 1) * heightReduction
  }px)`;

  return (
    <div className="relative w-full" style={{ height: totalHeight }}>
      <div className="w-full text-right text-[150px] -mb-16">PROJECTS</div>
      {sections.map((section, index) => {
        const topOffset = index * heightReduction;

        return (
          <div
            key={section.id}
            className={`sticky flex items-start w-full bg-black border-t-2 border-dashed rounded-t-xl border-white/20 overflow-hidden`}
            style={{
              top: `${topOffset + 80}px`,
              height: `calc(100vh - ${index * heightReduction + 80}px)`,
              zIndex: index + 1,
            }}
          >
            <div className="w-full mb-4 lg:mb-0 lg:w-1/3">
              <div className="text-2xl font-bold font-bn text-[30px] my-[25px] ml-10 flex justify-center items-center">
                {section.date}
                <div className="h-[1px] bg-white/40 w-full mx-6" />
              </div>
              <div className="w-full ml-8 lg:w-2/4">
                <p className="mb-4">{section.description}</p>
                <p className="mb-2">
                  <strong>Status:</strong> {section.status}
                </p>
                <div>
                  <strong>Key Achievements:</strong>
                  <ul className="list-disc list-inside">
                    {section.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col text-white">
              <div className="text-white text-[55px]">{section.heading}</div>
              <div className="flex">
                <div className="w-full mb-4 lg:mb-0 lg:w-1/4">
                  <img
                    src={section.image}
                    alt={`Section ${section.id} Image`}
                    className="rounded h-full w-full"
                  />
                </div>
                <div className="w-full ml-8 lg:w-2/4">
                  <p className="mb-4">{section.description}</p>
                  <p className="mb-2">
                    <strong>Status:</strong> {section.status}
                  </p>
                  <div>
                    <strong>Key Achievements:</strong>
                    <ul className="list-disc list-inside">
                      {section.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p>
                      <strong>Distance:</strong> {section.distance}
                    </p>
                    <p>
                      <strong>Apogee:</strong> {section.apogee}
                    </p>
                    <p>
                      <strong>Thrust:</strong> {section.thrust}
                    </p>
                    <p>
                      <strong>Weight:</strong> {section.weight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StackedScroll;
