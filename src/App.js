import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/ui/layout";
import LayoutWelcome from "./components/ui/layoutwelcome";
import NotFound from "./screens/notfound";
import About from "./screens/about";
import Experience from "./screens/experience";
import Portfolio from "./screens/portfolio";
import Contact from "./screens/contact";
import LandingLoader from "./components/ui/landingloader";
import ThemeHandler from "./components/themehandler";

import './components/stars.scss';

const isPC = navigator?.userAgentData?.platform?.toUpperCase().indexOf('WIN') >= 0;

if (isPC) {
  import('./components/pcscroll.scss');
}

export default function App() {
  return (
    <ThemeHandler>
      <LandingLoader>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
          <Route path="*" element={<LayoutWelcome isRoute={true}/>}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LandingLoader>
    </ThemeHandler>
  );
}
