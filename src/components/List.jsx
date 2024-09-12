import { Link } from "react-router-dom";

function List() {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        <li className="p-3">
          <Link to="/schedule" className="text-blue-500 hover:underline">
            Tirana
          </Link>
        </li>
        <li className="p-3">
          <Link to="/schedule" className="text-blue-500 hover:underline">
            Tirana(Airport)
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default List;
