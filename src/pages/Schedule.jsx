import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import { cities } from "../data"; // Assuming cities data is in this file

function Schedule() {
  const { city } = useParams(); // Get the city name from URL parameters
  const selectedCity = cities.find((c) => c.name === city); // Find the city in data

  if (!selectedCity) {
    return (
      <h2 className="text-center font-semibold text-3xl my-4">
        City not found
      </h2>
    );
  }

  // Helper function to calculate waiting time
  const calculateWaitingTime = (startTime) => {
    const [startHour, startMinutes] = startTime.split(":").map(Number);

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    const start = new Date();
    start.setHours(startHour, startMinutes, 0, 0); // Set the start time

    const diff = start - now; // Difference in milliseconds

    if (diff <= 0) {
      return "0h 0m"; // If the start time has already passed
    }

    const diffHours = Math.floor(diff / (1000 * 60 * 60)); // Convert milliseconds to hours
    const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Remaining minutes

    return `${diffHours}h ${diffMinutes}m`;
  };

  return (
    <div>
      <Header />
      <h2 className="text-center font-semibold text-3xl my-4">
        Schedule for {selectedCity.name}
      </h2>

      {/* Render all schedules for the city */}
      {selectedCity.schedules.map((schedule, index) => (
        <Card
          key={index}
          startTime={schedule.startTime}
          endTime={schedule.endTime}
          price={schedule.price}
          waitingTime={calculateWaitingTime(schedule.startTime)}
        />
      ))}
    </div>
  );
}

export default Schedule;
