import { useEffect, useState } from "react";
import data from "./data.json";

import Dashboard from "./Components/Dashboard";
import User from "./Components/User";

const App = () => {
  const [state, setState] = useState([]);
  const [currentTimeFrameName, setCurrentTimeFrameName] = useState("Week");

  function filterData(timeframe) {
    const filteredData = data.map((item) => ({
      title: item.title,
      current: item.timeframes[timeframe].current,
      previous: item.timeframes[timeframe].previous,
    }));
    setState(filteredData);
  }

  useEffect(() => {
    filterData("weekly");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="my-20 grid gap-8 px-6 font-Rubik text-white min-[440px]:w-[480px] lg:my-0 lg:h-[32.5rem] lg:w-full lg:grid-cols-4 lg:grid-rows-2 min-[1180px]:w-[69.375rem] min-[1180px]:px-0">
        <User
          filterData={filterData}
          setCurrentTimeFrameName={setCurrentTimeFrameName}
        />
        <Dashboard state={state} currentTimeFrameName={currentTimeFrameName} />
      </div>
    </main>
  );
};

export default App;
