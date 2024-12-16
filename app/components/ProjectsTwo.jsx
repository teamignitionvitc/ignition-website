import React from "react";

const StackedScroll = () => {
  const sections = [
    {
      id: 1,
      color: "bg-red-500",
      heading: "Section 1 Heading",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 1.",
      status: "Completed",
      achievements: ["Achievement 1.1", "Achievement 1.2", "Achievement 1.3"],
    },
    {
      id: 2,
      color: "bg-green-500",
      heading: "Section 2 Heading",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 2.",
      status: "In Progress",
      achievements: ["Achievement 2.1", "Achievement 2.2"],
    },
    {
      id: 3,
      color: "bg-blue-500",
      heading: "Section 3 Heading",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 3.",
      status: "Pending",
      achievements: [
        "Achievement 3.1",
        "Achievement 3.2",
        "Achievement 3.3",
        "Achievement 3.4",
      ],
    },
    {
      id: 4,
      color: "bg-yellow-500",
      heading: "Section 4 Heading",
      image: "https://via.placeholder.com/150",
      description: "This is the description for section 4.",
      status: "Completed",
      achievements: ["Achievement 4.1"],
    },
  ];

  const heightReduction = 80;
  const totalHeight = `calc(${sections.length * 100}vh - ${
    (sections.length - 1) * heightReduction
  }px)`;

  return (
    <div className="relative w-full mb-56" style={{ height: totalHeight }}>
      {sections.map((section, index) => {
        const topOffset = index * heightReduction;

        return (
          <div
            key={section.id}
            className={`sticky ${section.color} flex items-start w-full p-2`}
            style={{
              top: `${topOffset + 80}px`,
              height: `calc(100vh - ${index * heightReduction + 80}px)`,
              zIndex: index + 1,
            }}
          >
            <div className="w-full mb-4 lg:mb-0 lg:w-1/4">
              <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
            </div>
            <div className="bg-white rounded shadow-md w-full h-full flex flex-col">
              <div className="text-black text-[50px]">{section.heading}</div>

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
