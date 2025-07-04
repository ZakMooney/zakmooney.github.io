import React from 'react';
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import astronaut from "../../assets/emoji/astronaut.png";
import man from "../../assets/emoji/man.png";
import computer from "../../assets/emoji/computer.png";
import envelope from "../../assets/emoji/envelope.png";

import SideNav from './sidenav';
import TopNav from './topnav';

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
      <aside className="w-full max-w-[96rem] my-0 mx-auto">
        <TopNav links={links} />
        <div className="flex flex-col md:flex-row">
          <SideNav links={links} />
          <main role="main" className="flex-1 p-4 2xl:pr-0">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="w-full h-full flex-grow overflow-auto"
            >
              {props.children}
              
              <div className="block pb-[80px]"/>
            </motion.div>
          </main>
        </div>
      </aside>

    </>
  );
}

export default LayoutDash;