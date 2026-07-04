import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ menuOpened, setMenuOpened }) => {
  // menuOpened becomes automatically "false" when screen is md or lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpened(false);
      }
    };
    // Check on mount
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`border border-gray-600/50 items-center justify-center rounded-full ${menuOpened ? "flex flex-col gap-1 border-0 rounded-lg absolute top-16.5 right-0.5 w-48 bg-secondary" : "hidden md:flex"}`}
    >
      <NavLink
        onClick={() => setMenuOpened(false)}
        to="/"
        className={({ isActive }) =>
          `py-2 px-6 rounded-full transition-all duration-300 ${isActive ? "bg-accent" : "hover:opacity-50"} ${menuOpened ? "w-full" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setMenuOpened(false)}
        to="/blogs"
        className={({ isActive }) =>
          `py-2 px-6 rounded-full transition-all duration-300 ${isActive ? "bg-accent" : "hover:opacity-50"} ${menuOpened ? "w-full" : ""}`
        }
      >
        Blogs
      </NavLink>
      <NavLink
        onClick={() => setMenuOpened(false)}
        to="/about"
        className={({ isActive }) =>
          `py-2 px-6 rounded-full transition-all duration-300 ${isActive ? "bg-accent" : "hover:opacity-50"} ${menuOpened ? "w-full" : ""}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="mailto:driveline@gmail.com"
        className={({ isActive }) =>
          `py-2 px-6 rounded-full transition-all duration-300 ${isActive ? "bg-accent" : "hover:opacity-50"} ${menuOpened ? "w-full" : ""}`
        }
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Navbar;
