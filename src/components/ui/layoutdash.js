import React from 'react';
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import astronaut from "../../assets/emoji/astronaut.png";
import man from "../../assets/emoji/man.png";
import computer from "../../assets/emoji/computer.png";
import envelope from "../../assets/emoji/envelope.png";

import SideNav from './sidenav';
import TopBar from './topbar';

const LayoutDash = (props) => {
  const location = useLocation();
  const { pathname } = location;

  const links = [
    {
      name: "About",
      link: "/about",
      icon: astronaut,
    },
    {
      name: "Experience",
      link: "/experience",
      icon: man,
    },
    {
      name: "Portfolio",
      link: "/portfolio",
      icon: computer,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: envelope,
    },
  ];

  return (
    <>
      <TopBar links={links} />
      <div className="content w-full h-full flex flex-col-reverse sm:flex-row flex-grow overflow-hidden">
          {/* <SideNav /> */}
        <main role="main" className="w-full h-full flex-grow">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="w-full h-full flex-grow p-4 mb-0 pb-20 sm:pb-4 overflow-auto pt-[94px] sm:pt-4"
          >
            {props.children}
          </motion.div>
        </main>
      </div>

    </>
  );
}

export default LayoutDash;