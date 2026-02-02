import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#e6f4f1]">
      <Link to="/" className="font-bold text-xl text-teal-700">
        Collabo
      </Link>

      <div className="flex gap-6 font-medium text-gray-600">
        <Link to="/">Browse Campaigns</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/influencers">Influencers</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/login">
          <button className="border border-teal-600 text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50">
            Log In
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
