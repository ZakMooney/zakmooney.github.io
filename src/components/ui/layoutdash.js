import React from 'react';
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import SideNav from './sidenav';
import TopBar from './topbar';

const LayoutDash = (props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="content w-full h-full flex flex-col-reverse sm:flex-row flex-grow overflow-hidden">
      <TopBar />
      <SideNav />
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
  );
}

export default LayoutDash;