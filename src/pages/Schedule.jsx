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
          waitingTime={`in 2h`}
        />
      ))}
    </div>
  );
}

export default Schedule;
