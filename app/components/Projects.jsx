import DotPattern from "@/components/ui/dot";
import React from "react";

const Projects = () => {
  const sections = [
    {
      id: 1,
      heading: "Poseidon",
      date: "12/06/2023",
      image: "/poseidon.png",
      description:
        "Poseidon, our inaugural build for the Technoxian Water Rocket Challenge, marked Ignition's entry into competitive rocketry. It provided key insights into aerodynamics and design, fueling progress for future projects.",
      status: "Completed",
      achievements: [
        "Achieved a top 10 finish at the Technoxian World Cup, setting a strong foundation for Ignition's competitive journey.",
      ],
      distance: "400 km",
      apogee: "150 km",
      thrust: "1,500 kN",
      weight: "500 tons",
    },
    {
      id: 2,
      heading: "Jericho",
      date: "06/08/2023",
      image: "/jericho.png",
      description:
        "Jericho introduced Ignition to solid-fuel rocketry, expanding our knowledge of rocket mechanics and system integration. This project deepened our expertise and prepared us for more advanced builds.",
      status: "Discontinued",
      achievements: [
        "Provided foundational experience in solid-fuel rocketry, significantly enhancing our technical understanding despite technical challenges.",
      ],
      distance: "350 km",
      apogee: "120 km",
      thrust: "1,200 kN",
      weight: "450 tons",
    },
    {
      id: 3,
      heading: "Pioneer",
      date: "31/10/2023",
      image: "/pioneer.png",
      description:
        "Pioneer is a high-powered rocket designed to reach a 1 km apogee, powered by our SRAD motor. It carries Suryasat, a CANSAT studying UV radiation effects at high altitudes, advancing our scientific research contributions.",
      status: "Ongoing",
      achievements: [
        "Completed a successful static test, making us one of the fastest teams to reach this milestone. Data collection will focus on UV radiation exposure at high altitudes, contributing valuable insights to atmospheric research.",
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
      image: "/ignitexx.png",
      description:
        "IgniteX is our entry for the InSpace competition, featuring innovative recovery systems and a deployable CANSAT at 1 km. This project showcases our advancements in design, creativity, and engineering.",
      status: "Ongoing",
      achievements: [
        "This is our first entry in an Indian competition, with the launch set for March 2025, highlighting our commitment to pushing the boundaries of rocketry and CANSAT deployment technology.",
      ],
      distance: "500 km",
      apogee: "180 km",
      thrust: "1,800 kN",
      weight: "550 tons",
    },
  ];

  const heightReduction = 80;
  const totalHeight = `calc((${sections.length * 100}vh - 100 -  ${
    (sections.length - 1) * heightReduction
  })px)`;

  return (
    <div
      id="projects"
      className="relative w-full"
      style={{ height: totalHeight }}
    >
      <div className="w-full text-left text-[150px] text-white bg-white h-[140px] -mb-4 flex items-center overflow-hidden relative">
        <DotPattern />
        <div className=" text-black m-2 z-30 w-full text-right">PROJECTS</div>
        {/* <div className="flex flex-col items-cente h-full w-full -mt-[15px] overflow-hidden">
          <div
            className="flex-1 h-1/2 text-transparent"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.20) 0, rgba(0, 0, 0, 0.20) 1px, transparent 1px, transparent 40px)",
            }}
          >
            .
          </div>
          <div
            className="flex-1 h-1/2 text-transparent"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-135deg, rgba(0, 0, 0, 0.20) 0, rgba(0, 0, 0, 0.20) 1px, transparent 1px, transparent 40px)",
            }}
          >
            .
          </div>
        </div> */}
      </div>
      {sections.map((section, index) => {
        const topOffset = index * heightReduction;

        return (
          <div
            key={section.id}
            className={`sticky flex items-start w-full bg-black border-t-[1.5px] border-dashed rounded-t-xl border-white/20 overflow-hidden`}
            style={{
              top: `${topOffset + 80}px`,
              height: `calc(100vh - ${index * heightReduction + 80}px)`,
              zIndex: index + 1,
            }}
          >
            <div className="w-full mb-4 lg:mb-0 lg:w-1/3  font-bn">
              <div className="text-2xl font-bold text-[30px] my-[25px] ml-10 flex justify-center items-center">
                {section.date}
                <div className="h-[1px] bg-white/40 w-full mx-6" />
              </div>
              {/* <div className="w-full ml-8 lg:w-3/4">
                <p className="mb-4 w-full">{section.description}</p>
                <div>
                  <strong>Key Achievements:</strong>
                  <ul className="list-disc list-inside">
                    {section.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div> */}
              <div className="w-full ml-10 lg:w-2/4 flex flex-col justify-center items-center rounded-lg overflow-auto">
                <div className="w-full bg-white/20 text-white text-center py-4 rounded-lg">
                  <strong>Status:</strong> {section.status}
                </div>
                <div className="space-y-4 mt-4 w-full h-full">
                  <div className="flex flex-col justify-center items-center bg-white/10 rounded-md border-2 border-white/20 border-dashed">
                    <strong>Distance:</strong> {section.distance}
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white/10 rounded-md border-2 border-white/20 border-dashed">
                    <strong>Apogee:</strong> {section.apogee}
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white/10 rounded-md border-2 border-white/20 border-dashed">
                    <strong>Thrust:</strong> {section.thrust}
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white/10 rounded-md border-2 border-white/20 border-dashed">
                    <strong>Weight:</strong> {section.weight}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col text-white">
              <div className="text-white text-[55px]">{section.heading}</div>
              <div className="flex">
                <div className="w-full mb-4 lg:mb-0 lg:w-3/4 -mt-10">
                  <img
                    src={section.image}
                    alt={`Section ${section.id} Image`}
                    className="h-full w-full -rotate-90 object-cover filter grayscale"
                  />
                </div>
                {/* <div className="w-full ml-8 lg:w-2/4 flex flex-col justify-center items-center  pr-6 rounded-lg border border-white/20 border-dashed">
                  <div className="w-full bg-white/20 text-white text-center py-4 rounded-t-lg">
                    <strong>Status:</strong> {section.status}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 w-full h-full">
                    <div className="flex justify-center items-center bg-white/20 rounded-md">
                      <strong>Distance:</strong> {section.distance}
                    </div>
                    <div className="flex justify-center items-center bg-white/20 rounded-md">
                      <strong>Apogee:</strong> {section.apogee}
                    </div>
                    <div className="flex justify-center items-center bg-white/20 rounded-md">
                      <strong>Thrust:</strong> {section.thrust}
                    </div>
                    <div className="flex justify-center items-center bg-white/20 rounded-md">
                      <strong>Weight:</strong> {section.weight}
                    </div>
                  </div>
                  <button className="bg-white/20 text-white w-full mt-4 py-3 rounded-b-lg hover:bg-gray-700">
                    Learn More
                  </button>
                </div> */}
                <div className="w-full lg:w-3/4 px-10 text-xl font-bn">
                  <p className="mb-4 w-full">{section.description}</p>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
