import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons';

function LandingLoader(props) {
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(() => {
    setTimeout(function(){
      document.getElementById("rocket").classList.add("finish");
      document.getElementById("loading").classList.add("opacity-0");
      setTimeout(function(){
        document.getElementById("star-bg").classList.add("finish");
        setTimeout(function(){
          setLoadComplete(true);
        }, 200);  
      }, 600);
    }, 2000);
  }, []);

  if (loadComplete) {
    return (
      props.children
    )
  }

  return (
    <div id="star-bg-con">
      <div id="star-bg">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div
          id="loading"
          className="text-2xl font-medium drop-shadow-sm"
        >Launching</div>
        <div id="rocket">
          <FontAwesomeIcon
            icon={faShuttleSpace}
            color="#ffffff"
          />
        </div>
      </div>
    </div>
  );

}

export default LandingLoader;
