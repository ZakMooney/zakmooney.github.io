import React, {useEffect} from 'react';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import LayoutDash from './layoutdash';

const Layout = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate("/about");
    }
  }, [location]);

  return (
    <LayoutDash>
      <Outlet/>
    </LayoutDash>
  );

}

export default Layout;
