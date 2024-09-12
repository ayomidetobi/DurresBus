import { Link } from "react-router-dom";

function List({ filteredCities }) {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {filteredCities.map((city, index) => (
          <li key={index} className="p-3">
            <Link
              to={`/schedule/${city.name}`}
              className="text-blue-500 hover:underline"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
