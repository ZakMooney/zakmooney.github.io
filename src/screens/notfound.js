import React from 'react';
import ButtonLink from '../components/ui/buttonlink';

function NotFound() {

  return (
    <div className="welcome p-8 mx-4 sm:w-3/6 flex flex-col items-center justify-center">
      <h1 className="neon-text text-8xl text-center mb-6">
        404
      </h1>
      <h2 className="neon-text text-4xl text-center mb-10">Page Not Found</h2>
      <ButtonLink
        classes="button btn-pink-gradient"
        linkText="Go Home"
        linkTo="/"
      />
    </div>
  );

}

export default NotFound;
