import { useState } from "react";
import Stepper from "./Stepper";

function Card({ startTime, endTime, price, waitingTime }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Determine if waiting time is zero (i.e., the bus has already departed)
  const isWaitingZero = waitingTime === "0h 0m";

  return (
    <div
      onClick={toggleOpen}
      className="max-w-full mx-auto my-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      {/* Time and Estimated Waiting Time */}
      <div className="flex flex-col p-6">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-normal">
            {startTime} → {endTime}
          </span>
          <span
            className={`text-sm font-normal ${
              isWaitingZero ? "text-red-600" : "text-green-600"
            }`}
          >
            {waitingTime}
          </span>
        </div>
      </div>

      {/* Stepper Component */}
      {isOpen && <Stepper />}

      {/* Price Section */}
      <div className="bg-slate-100 p-3">
        <p className="text-sm font-normal">Price: &#8364;{price}</p>
      </div>
    </div>
  );
}

export default Card;
