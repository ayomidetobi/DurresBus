function Stepper() {
  return (
    <div>
      <div className="max-w-md mx-auto mt-10 pb-5">
        {/* Step 1 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              1
            </div>
            <div className="h-20 border-l-2 border-blue-500"></div>
          </div>
          <div className="pb-8">
            <p className="font-bold text-lg">Hostel Durres</p>
            <p className="text-gray-500">Departure: 10:00 AM</p>
            <a
              href="https://www.google.com/maps/dir/Hostel+Durres/Bus+Terminal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View route on Google Maps
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              2
            </div>
            <div className="h-20 border-l-2 border-blue-500"></div>
          </div>
          <div className="pb-8">
            <p className="font-bold text-lg">Bus Terminal</p>
            {/* <p className="text-gray-500">Arrival: 10:20 AM</p> */}
            <p className="text-gray-500">Departure: 10:30 AM</p>
            <a
              href="https://www.google.com/maps/dir/Bus+Terminal/Plepa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View route on Google Maps
            </a>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              3
            </div>
            <div className="h-20 border-l-2 border-blue-500"></div>
          </div>
          <div className="pb-8">
            <p className="font-bold text-lg">Plepa</p>
            {/* <p className="text-gray-500">Arrival: 11:00 AM</p> */}
            <p className="text-gray-500">Departure: 11:10 AM</p>
            <a
              href="https://www.google.com/maps/dir/Plepa/Tirana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View route on Google Maps
            </a>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex items-start">
          <div className="flex flex-col items-center mr-4">
            <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
              4
            </div>
          </div>
          <div>
            <p className="font-bold text-lg">Tirana</p>
            <p className="text-gray-500">Arrival: 12:00 PM</p>
            <a
              href="https://www.google.com/maps/dir/Tirana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View route on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
