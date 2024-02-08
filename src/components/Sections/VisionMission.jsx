import React from "react";

const VisionMission = () => {
  return (
    <div className="p-5 md:p-10 lg:p-20 flex flex-col gap-10 lg:flex-row">
      <div className="w-ful lg:w-1/2 p-5">
        <div className="text-center space-y-5">
          <img
            src="https://nilethemes.com/kits1/gubsh/wp-content/uploads/sites/12/2022/11/events-1.jpg"
            alt=""
            className="h-full w-full"
          />
          <h2 className="text-5xl font-medium text-aqua">Vision</h2>
          <p className="text-lg text-gray-700">
            Our vision at MCM Phoenix is to build a vibrant and forward-thinking
            Islamic center that serves as a beacon of faith, knowledge, and
            community empowerment. We aspire to create a modern, environmentally
            conscious, and technologically advanced space that meets the
            evolving needs of our diverse community.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-5">
        <div className="text-center space-y-5">
          <h2 className="text-5xl font-medium text-aqua">Mission</h2>
          <p className="text-lg text-gray-700">
            Through the teachings of Islam, we aim to inspire individuals to
            lead purposeful lives and contribute positively to the wider
            society. Our commitment is to uphold the principles of peace,
            tolerance, and community engagement, creating a lasting impact on
            the lives we touch.
          </p>
          <img
            src="https://nilethemes.com/kits1/gubsh/wp-content/uploads/sites/12/2022/11/events-2.jpg"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
