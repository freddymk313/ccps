import React from "react";

import { NavLink } from "react-router-dom";
import ccpsLogo from "./../assets/images/ccpslogo.png";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Barnav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="meduim"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-blue-700" : ""
          }
        >
          Aceuil
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="meduim"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-blue-700" : ""
          }
        >
          Gallery
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="meduim"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/apropos"
          className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "text-blue-700" : ""
          }
        >
          Apropos
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none shadow-none py-2 px-4 md:py-3 md:px-20">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h4"
            className="mr-4 cursor-pointer py-1.5"
          >
            <div className="flex items-center">
              <img
                src={ccpsLogo}
                alt="ccps_logo"
                className="h-9 w-9 lg:h-11 lg:w-11 object-cover"
              />
              <span className="mt-1">CCPS</span>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {/* <Button
              color='indigo'
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block rounded-full py-3 px-7"
            >
              <span>Donate</span>
            </Button> */}
            <button
              className="hidden lg:inline-block py-3 px-8 rounded-full bg-blue-700 border border-blue-700
             text-white hover:bg-transparent hover:text-blue-700 transition"
            >
              Donate
            </button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          {/* <Button variant="gradient" color='indigo' size="sm" fullWidth className="mb-2 rounded-full">
            <span>Donate</span>
          </Button> */}
          <button
            className="mb-2 w-full py-1.5 px-8 rounded-full bg-blue-700 border border-blue-700
             text-white hover:bg-transparent hover:text-blue-700 transition"
          >
            Donate
          </button>
        </MobileNav>
      </Navbar>
    </div>
  );
}

export default Barnav;
