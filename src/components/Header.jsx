import { Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Menu, X } from "lucide-react";
import { MdOutlineLogout } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { authUser, logout, viewUserProfile, setViewUserProfile } = useAuth();

  return (
    <div className="bg-primary max-w-7xl text-white py-3 flex items-center justify-between px-4 md:px-6 lg:px-8 sticky top-0 right-0 left-0 z-50">
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-bold">
        <Link to="/">
          Drive<span className="text-accent">line</span>
        </Link>
      </div>

      {/* Navbar */}
      <Navbar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />

      {/* Toggle Menu & Register */}
      <div className="flex items-center justify-center gap-3">
        {!authUser ? (
          <button className="px-5 py-2 rounded-full bg-white text-primary font-medium hover:cursor-pointer">
            <Link to="/register">Register</Link>
          </button>
        ) : (
          <button
            className="cursor-pointer"
            onClick={() => setViewUserProfile(!viewUserProfile)}
          >
            <div className="size-10 rounded-full bg-accent flex items-center justify-center">
              <span className="font-semibold text-lg">
                {/* {authUser?.name[0].toUpperCase()} */}
              </span>
            </div>
          </button>
        )}

        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="cursor-pointer flex md:hidden"
        >
          {!menuOpened ? (
            <Menu className="size-10" strokeWidth={2} />
          ) : (
            <X className="size-10" strokeWidth={2} />
          )}
        </button>
      </div>

      {viewUserProfile && (
        <div className="border border-white/20 rounded-lg text-gray-300 bg-secondary absolute top-13 right-1 p-2">
          <div className="w-full font-medium text-surface flex items-center justify-between border-b border-white/20 p-2 mb-1">
            User Profile{" "}
            <button
              onClick={() => setViewUserProfile(false)}
              className="cursor-pointer"
            >
              <GrClose className="rounded-full size-5" />
            </button>
          </div>
          <ul className="px-2 py-1 flex flex-col gap-3">
            <li className="flex flex-col justify-between items-baseline">
              <p className="font-semibold text-surface">Name:</p>
              <p>{authUser?.name}</p>
            </li>
            <li className="flex flex-col justify-between items-baseline">
              <p className="font-semibold text-surface">Email:</p>
              <p>{authUser?.email}</p>
            </li>
          </ul>
          <button
            onClick={() => logout()}
            className="w-full flex p-2 items-center gap-2 text-accent cursor-pointer font-medium mt-1 border-t border-white/20"
          >
            Logout <MdOutlineLogout className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
