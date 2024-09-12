import { useState } from "react";
import Stepper from "./Stepper";

function Card() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleOpen}
      className="max-w-full mx-auto my-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      {/* Time and Estimated Waiting Time */}
      <div className="flex flex-col p-6">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-normal">12:30 → 15:45</span>
          <span className="text-gray-700 text-sm font-normal">in 2h 15m</span>
        </div>
      </div>

      {/* Toggle content */}
      {isOpen && <Stepper />}
      <div className="bg-slate-100 p-3">
        <p className="text-sm font-normal">price &#8364;6</p>
      </div>
    </div>
  );
}

export default Card;
