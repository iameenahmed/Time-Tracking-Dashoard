/* eslint-disable react/prop-types */
import Card from "./Card";
import workIcon from "../assets/icon-work.svg";
import playIcon from "../assets/icon-play.svg";
import studyIcon from "../assets/icon-study.svg";
import exerciseIcon from "../assets/icon-exercise.svg";
import socialIcon from "../assets/icon-social.svg";
import selfCareIcon from "../assets/icon-self-care.svg";

const Dashboard = ({ state, currentTimeFrameName }) => {
  const icons = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon,
  ];

  const colors = [
    "bg-LightOrange",
    "bg-SoftBlue",
    "bg-LightRed",
    "bg-LimeGreen",
    "bg-Violet",
    "bg-SoftOrange",
  ];

  return (
    <>
      {state.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          icon={icons[index]}
          color={colors[index]}
          currentTimeFrame={item.current}
          previousTimeFrame={item.previous}
          currentTimeFrameName={currentTimeFrameName}
        />
      ))}
    </>
  );
};

export default Dashboard;
