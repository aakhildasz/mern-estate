import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [seacrhTerm, setSearchTerm] = useState("");
  const tooltipTitle = currentUser ? "Profile" : "Sign In";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", seacrhTerm);
    const searchQuery = urlParams.toString();
    navigate(`search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-FFF1DB shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Az</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={seacrhTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="">
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Tooltip title="home">
            <Link to="/">
              <li className="hidden sm:inline text-slate-700 hover: cursor-pointer">
                Home
              </li>
            </Link>
          </Tooltip>

          <Tooltip title="About">
            <Link to="/about">
              <li className="hidden sm:inline text-slate-700 hover: cursor-pointer">
                About
              </li>
            </Link>
          </Tooltip>
          <Tooltip title={tooltipTitle}>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile-picture"
                />
              ) : (
                <li className="text-slate-700 hover: cursor-pointer">
                  Sign In
                </li>
              )}
            </Link>
          </Tooltip>
        </ul>
      </div>
    </header>
  );
}
