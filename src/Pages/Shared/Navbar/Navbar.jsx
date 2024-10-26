import { Link, NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";

import userDefaultPic from "../../../../public/assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLink = (
    <>
      <NavLink to="/">
        <li className="btn btn-sm btn-ghost">Home</li>
      </NavLink>
      <NavLink to="/about">
        <li className="btn btn-sm btn-ghost">About</li>
      </NavLink>
      <NavLink to="/career">
        <li className="btn btn-sm btn-ghost">Career</li>
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <RiMenu2Fill className="h-5 w-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={userDefaultPic} alt="default user img" />
            </div>
          </div>

          {user ? (
            <Link to="/login">
              <button onClick={handleSignOut} className="btn btn-success">
                Sign Out
              </button>
            </Link>
          ) : (
            <Link to="/login" className="btn btn-success">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
