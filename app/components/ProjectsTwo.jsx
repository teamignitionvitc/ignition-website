import React from "react";

const StackedScroll = () => {
  // Define the sections with their respective content
  const sections = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Project Alpha",
      detail: "This is a detailed description of Project Alpha.",
      completionStatus: "75%",
      keyAchievements: [
        "Initial Phase Completed",
        "Team Formation",
        "Alpha Version Released",
      ],
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Project Beta",
      detail: "This is a detailed description of Project Beta.",
      completionStatus: "50%",
      keyAchievements: ["Beta Testing Started", "User Feedback Collected"],
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Project Gamma",
      detail: "This is a detailed description of Project Gamma.",
      completionStatus: "20%",
      keyAchievements: ["Initial Research", "Team Setup", "Scope Defined"],
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Project Delta",
      detail: "This is a detailed description of Project Delta.",
      completionStatus: "90%",
      keyAchievements: ["Final Version Released", "All Tests Passed"],
    },
  ];

  // Calculate the total height of the container
  const totalHeight = `${sections.length * 100}vh`;

  return (
    <div className="relative w-full mb-36" style={{ height: totalHeight }}>
      {sections.map((section, index) => (
        <div
          key={section.id}
          className="sticky top-0 flex flex-col items-center justify-start w-full bg-blue-300 border-2"
          style={{
            height: "100vh",
            zIndex: index,
          }}
        >
          <h2 className="text-[3.5rem] font-semibold text-gray-800 my-8">
            {section.title}
          </h2>
          <div className="flex bg-red-300 h-full w-11/12 mx-auto rounded-lg shadow-lg overflow-hidden">
            <div className="w-1/3 pr-8 h-full">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="w-2/3 flex flex-col justify-between p-4">
              <p className="text-lg text-gray-700 mb-4">{section.detail}</p>

              <div className="flex items-center mb-4">
                <span className="text-xl font-medium text-gray-600">
                  Completion:
                </span>
                <span className="text-xl font-bold text-green-500 ml-2">
                  {section.completionStatus}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Key Achievements
                </h3>
                <ul className="list-disc pl-6 text-gray-700">
                  {section.keyAchievements.map((achievement, idx) => (
                    <li key={idx} className="mb-2">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-right text-gray-500">End</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedScroll;
