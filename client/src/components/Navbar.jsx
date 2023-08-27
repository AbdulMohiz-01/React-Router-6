import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg mx-auto my-4">
      <div className="container px-4">
        <div className="flex justify-center items-center py-4">
          <ul className="flex space-x-4">
            <li><Link to={"/"} className="text-white hover:text-purple-300 transition duration-300">Home</Link></li>
            <li><Link to={"/"} className="text-white hover:text-purple-300 transition duration-300"></Link></li>
            <li><Link to={"/"} className="text-white hover:text-purple-300 transition duration-300">Services</Link></li>
            <li><Link to={"/"} className="text-white hover:text-purple-300 transition duration-300">Portfolio</Link></li>
            <li>
              {
                user.username ? (
                  // display username
                  <Link to={"/"} className="text-white hover:text-purple-300 transition duration-300">Welcome {user.username}</Link>
                )
                  : (
                    // display login link
                    <Link to={"/login"} className="text-white hover:text-purple-300 transition duration-300">Login</Link>
                  )
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
