import { useEffect } from "react";

import {
  useStoredTheme,
} from "../app/store";

const ThemeHandler = (props) => {
  const { setStoredTheme, storedTheme } = useStoredTheme();

  useEffect(() => {
    const chosenTheme = localStorage.getItem('theme');
    if (!chosenTheme) {
      setStoredTheme('dark')
    } else if (chosenTheme !== storedTheme) {
      setStoredTheme(chosenTheme)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", storedTheme);
    document.getElementById("body").className = 'zm-' + storedTheme;
  }, [storedTheme]);

  return (
    props.children
  );
}

export default ThemeHandler;