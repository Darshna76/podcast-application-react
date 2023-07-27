import React, { useEffect } from "react";
import "./styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("User Logged Out!");
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };

  const logoutButton =
    <Link to="/logout" className="logout" onClick={handleLogout}>
      Logout
    </Link>;



  return (
    <div className="navbar">
      <div className="gradient"></div>
      <div className="links">
        <Link to="/" className={currentPath == "/" ? "active" : ""}>
          Signup
        </Link>
        <Link
          to="/podcasts"
          className={currentPath == "/podcasts" ? "active" : ""}
        >
          Podcasts
        </Link>
        <Link
          to="/create-a-podcast"
          className={currentPath == "/create-a-podcast" ? "active" : ""}
        >
          Start A Podcast
        </Link>
        <Link
          to="/profile"
          className={currentPath == "/profile" ? "active" : ""}
        >
          Profile
        </Link>

        {user &&
          logoutButton}
      </div>
    </div>
  );
}

export default Header;
