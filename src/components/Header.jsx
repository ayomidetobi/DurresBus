import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-100 text-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <Link to="/" className="text-xl font-semibold">
          Durres Bus
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden px-2 py-1 text-gray-800 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() =>
            document
              .getElementById("navbarNavDropdown")
              .classList.toggle("hidden")
          }
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          id="navbarNavDropdown"
          className="hidden lg:flex lg:items-center lg:space-x-4 lg:space-y-0 space-y-4 lg:flex-col lg:relative lg:bg-gray-100 lg:shadow-lg lg:rounded lg:p-4"
        >
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-200">
            Home
          </Link>
          <Link
            to="/features"
            className="block px-3 py-2 rounded hover:bg-gray-200"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 rounded hover:bg-gray-200"
          >
            Pricing
          </Link>
          <div className="relative">
            <button className="block px-3 py-2 rounded hover:bg-gray-200 flex items-center">
              Dropdown
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="absolute right-0 hidden mt-2 w-48 bg-gray-100 text-gray-800 rounded shadow-lg group-hover:block">
              <Link to="/action" className="block px-4 py-2 hover:bg-gray-200">
                Action
              </Link>
              <Link
                to="/another-action"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Another action
              </Link>
              <Link
                to="/something-else"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Something else here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
