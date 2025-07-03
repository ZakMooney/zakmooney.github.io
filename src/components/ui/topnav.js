import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import me from "../../assets/images/me.jpg";

import ThemeToggle from "./themetoggle";
import ButtonNavMob from './buttonnavmob';

const TopNav = ({links}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center frost frost-squared sticky top-0 z-50 px-4 sm:px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between w-full max-w-[1440px]">
          <div className="flex items-center w-full md:w-auto">
            <button
              className="md:hidden backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 rounded-[12px] p-2 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
              onClick={() => setNavOpen(!navOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <div className="flex w-full justify-center md:w-auto md:justify-start">
              <div className="profile-icon pi-xs flex flex-col justify-center">
                <img
                  src={me}
                  className="rounded-full drop-drop-shadow-md"
                  alt="Zak Mooney"
                />
              </div>
              <div className="flex flex-col justify-center ml-4">
                <h2 className="text-lg font-medium drop-shadow-sm">Zak M.</h2>
                <p className="text-xs opacity-50 font-medium drop-shadow-sm">
                  Frontend Dev 🚀
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-10">
            {/* {links.map((item, index) => {
              return (
                <Fragment index={index}>
                  <Link
                    to={item.link}
                    className="opacity-80 hover:opacity-100 duration-200 font-medium"
                  >
                    {item.name || ""}
                  </Link>
                </Fragment>
              );
            })} */}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div
        className={
          navOpen
            ? "md:hidden frost fixed top-16 left-0 right-0 z-40 p-4 opacity-1 transition-all duration-300 ease-in-out"
            : "md:hidden frost fixed top-16 left-0 right-0 z-40 p-4 transform -translate-y-full opacity-0 transition-all duration-300 ease-in-out"
        }
      >
        <div className="space-y-4 mt-4">
          {links.map((item, index) => {
            return (
              <ButtonNavMob
                linkIcon={<img src={item.icon} alt={'About'} className="h-auto w-auto object-contain"></img>}
                linkText={item.name}
                linkTo={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );

};

export default TopNav;
