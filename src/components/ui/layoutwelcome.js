import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const LayoutWelcome = (props) => {
  const {isRoute} = props;
  const location = useLocation();
  const { pathname } = location;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        {isRoute ? (
          <Outlet />
        ) : (
          props.children
        )}
      </div>
    </motion.div>
  );
}

export default LayoutWelcome;
