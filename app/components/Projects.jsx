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
      apogee: "60 m",
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
      apogee: "300 m",
      weight: "5 kg",
      height: "140 cm",
    },
    {
      id: 3,
      heading: "Pioneer",
      date: "31/10/2023",
      image: "/pioneer.png",
      description:
        "Pioneer is a high-powered rocket designed to reach a 1 km apogee, powered by our SRAD motor. It carries Suryasat, a CANSAT studying UV radiation effects at high altitudes, advancing our scientific research contributions.",
      status: "Ongoing: launch approval pending",
      achievements: [
        "Completed a successful static test, making us one of the fastest teams to reach this milestone. Data collection will focus on UV radiation exposure at high altitudes, contributing valuable insights to atmospheric research.",
      ],
      apogee: "1 km",
      thrust: "1800 N",
      weight: "12kg",
      height: "194cm",
    },
    {
      id: 4,
      heading: "IgniteX",
      date: "24/10/2024",
      image: "/ignitexx.png",
      description:
        "IgniteX is our entry for the InSpace competition, featuring innovative recovery systems and a deployable CANSAT at 1 km. This project showcases our advancements in design, creativity, and engineering.",
      status: "Ongoing",
      achievements: [
        "This is our first entry in an Indian competition, with the launch set for March 2025, highlighting our commitment to pushing the boundaries of rocketry and CANSAT deployment technology.",
      ],
      apogee: "1 km",
      thrust: "1,350 N",
      weight: "14 kg",
      height: "180 cm",
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
      <div className="w-full text-left text-[4rem] md:text-[150px] text-white bg-white h-[100px] md:h-[140px] -mb-4 flex items-center overflow-hidden relative">
        <DotPattern />
        <div className="text-black m-2 z-30 w-full text-right">PROJECTS</div>
      </div>
      {sections.map((section, index) => {
        const topOffset = index * heightReduction;

        return (
          <div
            key={section.id}
            className="sticky flex flex-col items-start w-full bg-black border-t-[1.5px] border-dashed rounded-t-xl border-white/20 overflow-hidden"
            style={{
              top: `${topOffset + 0}px`,
              height: `calc(100vh - ${index * heightReduction + 0}px)`,
              zIndex: index + 1,
            }}
          >
            <div className="text-xl md:text-[30px] my-4 md:my-[25px] flex justify-center items-center px-5 md:px-6 w-full md:flex-row-reverse">
              <div>{section.date}</div>
              <div className="h-[1px] bg-white/40 w-full mx-6 flex-1" />
              <div className="text-[2rem] md:text-[55px]">
                {section.heading}
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full md:w-1/3 font-bn px-4 md:p-0">
                <div className="w-full md:ml-10 md:w-2/4 flex flex-row md:flex-col justify-between items-center md:space-y-4 space-x-2 md:space-x-0">
                  <div className="w-full bg-white/20 text-white text-center py-4 rounded-lg text-sm md:text-base">
                    <strong>Status:</strong> {section.status}
                  </div>
                  <div className="w-full py-4 text-center bg-white/10 rounded-md border-2 border-white/20 border-dashed text-sm md:text-base">
                    <strong>Apogee:</strong> {section.apogee}
                  </div>
                  <div className="w-full py-4 text-center bg-white/10 rounded-md border-2 border-white/20 border-dashed text-sm md:text-base">
                    <strong>Weight:</strong> {section.weight}
                  </div>
                  {section.height && (
                    <div className="w-full py-4 text-center bg-white/10 rounded-md border-2 border-white/20 border-dashed text-sm md:text-base">
                      <strong>Height:</strong> {section.height}
                    </div>
                  )}
                  {section.thrust && (
                    <div className="w-full py-4 text-center bg-white/10 rounded-md border-2 border-white/20 border-dashed text-sm md:text-base">
                      <strong>Thrust:</strong> {section.thrust}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-2/3 flex flex-col text-white p-4 md:p-0 overflow-y-auto">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-3/4 -my-10 md:-my-0">
                    <img
                      src={section.image}
                      alt={`Section ${section.id} Image`}
                      className=" w-full -rotate-90 scale-150 object-cover filter"
                    />
                  </div>
                  <div className="w-full md:w-3/4 px-4 md:px-10 text-sm md:text-xl font-bn mt-4 md:mt-0">
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
          </div>
        );
      })}
    </div>
  );
};

export default Projects;