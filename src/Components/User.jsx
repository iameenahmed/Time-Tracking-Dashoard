import { useState } from "react";
import avatar from "../assets/image-jeremy.png";

// eslint-disable-next-line react/prop-types
const User = ({ filterData, setCurrentTimeFrameName }) => {
  const timeframeNames = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
  };

  const buttons = ["Daily", "Weekly", "Monthly"];

  const [selectedButton, setSelectedButton] = useState(buttons[1]);

  const handleClick = (e) => {
    const timeframe = e.target.innerText.toLowerCase();
    filterData(timeframe);
    setCurrentTimeFrameName(timeframeNames[timeframe]);
    setSelectedButton(e.target.innerText);
  };

  return (
    <div className="rounded-xl bg-DarkBlue lg:row-span-2">
      <div className="flex items-center gap-4 rounded-xl bg-Blue p-6 md:px-7 md:py-8 lg:flex-col lg:items-start ">
        <img
          className="w-16 rounded-full border-2 lg:w-[4.875rem]"
          src={avatar}
          alt="jeremy image"
        />

        <h1 className="text-PaleBlue lg:mb-[3rem] lg:mt-8">
          Report for
          <span className="block text-2xl font-light text-white lg:text-[2.5rem] lg:leading-[1.2em]">
            Jeremy Robson
          </span>
        </h1>
      </div>
      <div className="flex justify-between p-5 text-[1.125rem] lg:flex-col lg:gap-3.5">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`hover:cursor-pointer hover:opacity-100 ${
              button === selectedButton ? "opacity-100" : "opacity-70"
            } md:text-left`}
            onClick={handleClick}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};
export default User;
