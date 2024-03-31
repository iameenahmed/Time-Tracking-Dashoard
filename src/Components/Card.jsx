/* eslint-disable react/prop-types */
import ellipse from "../assets/icon-ellipsis.svg";

const Card = ({
  color,
  icon,
  title,
  currentTimeFrame,
  previousTimeFrame,
  currentTimeFrameName,
}) => {
  return (
    <div
      className={`relative h-36 overflow-hidden rounded-2xl lg:h-auto lg:w-auto ${color}`}
    >
      <div className="-mt-1 flex justify-end px-2">
        <img src={icon} alt="icon" />
      </div>
      <div className="absolute bottom-0 w-full rounded-xl bg-DarkBlue px-4 py-5 lg:p-7">
        <div className="flex items-center justify-between">
          <h2 className="font-medium md:text-[1.125rem]">{title}</h2>
          <img src={ellipse} alt="ellipse icon" />
        </div>
        <div className="my-1 flex items-center justify-between font-light lg:flex-col lg:items-start lg:gap-2">
          <p className="text-4xl lg:mt-5 lg:text-[3.5rem] lg:leading-[1em]">
            {currentTimeFrame}hrs
          </p>
          <p className="opacity-70">
            Last - {currentTimeFrameName} <span>{previousTimeFrame}hrs</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
