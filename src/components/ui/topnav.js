import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import me from "../../assets/images/me.jpg";

import ThemeToggle from "./themetoggle";
import ButtonNavMob from './buttonnavmob';
import Button from './button';

const TopNav = ({links}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center frost frost-squared sticky top-0 z-50 px-4 sm:px-6 py-4 shadow-lg max-w-[96rem] m-auto 2xl:rounded-b-[12px]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-full md:w-auto">
            <Button
              onClick={() => setNavOpen(!navOpen)}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              }
              type="outline-icon"
              className="md:hidden"
            />

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
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );

};

export default TopNav;
