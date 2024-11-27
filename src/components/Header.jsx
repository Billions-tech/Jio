import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 fixed w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center p-2">
        <h1 className="mr-2 font-bold">JIO ROYAL HOTEL</h1>
        <nav>
          <ul className="flex lg:space-x-4 space-x-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
