import React from 'react';
import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  const {linkTo, classes, styles, disabled, linkText} = props;

  let isDisabled = false;

  if (!linkTo) {
    isDisabled = true;
  }

  if (disabled) {
    isDisabled = true;
  }

  let useClasses = classes;

  if (!classes) {
    useClasses = "button";
  }

  if (isDisabled) {
    return (
      <div
        className={useClasses}
        disabled={isDisabled}
        styles={styles}
      >
        {linkText || ''}
      </div>
    );  
  }
  return (
    <Link
      className={useClasses}
      styles={styles}
      to={linkTo || '/'}
    >
      {linkText || ''}
    </Link>
  );
}

export default ButtonLink;
