import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between sm:justify-between py-3">
          <h1 className="text-white text-lg font-medium">
            Logo
          </h1>
          <ul className="flex space-x-4">
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium rounded-md">
              <Link to="/" className="transition duration-300 ease-in-out transform hover:scale-105">Home</Link>
            </li>
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium rounded-md">
              <Link to="/about" className="transition duration-300 ease-in-out transform hover:scale-105">About</Link>
            </li>
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium rounded-md">
              <Link to="/cart" className="transition duration-300 ease-in-out transform hover:scale-105">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

