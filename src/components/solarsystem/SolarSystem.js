import React from "react";

import "./solarsystem.css";

function Name({name}){
   return(
    <div className="name-link">
        <p>{name}</p>
    </div>
   )
}

function SolarSystem() {
  return (
    <div id="maincontainer">
      <div className="solar-system">
        <div id="sun"></div>

        <div className="orbit mercury-orbit"></div>
        <div className="mercury-spin">
          <div id="mercury"></div>
          <Name name={"Mercury"} />
        </div>

        <div className="orbit venus-orbit"></div>
        <div className="venus-spin">
          <div id="venus"></div>
          <Name name={"Venus"}/>
        </div>

        <div className="orbit earth-orbit"></div>
        <div className="earth-spin">
        
          <div className="orbit moon-orbit"></div>
          <div className="moon-spin">
            <div id="moon"></div>
            
          </div>

          <img
            id="earth"
            src="https://raw.githubusercontent.com/everdimension-personal/codepen-assets/master/earth_small_150.jpg"
          />
          <Name name={"Earth"}/>
        </div>

        <div className="orbit mars-orbit"></div>
        <div className="mars-spin">
          <div id="mars"></div>
          <Name name={"Mars"}/>
        </div>
        <div className="orbit jupiter-orbit"></div>
        <div className="jupiter-spin">
          <div id="jupiter"></div>
          <Name name={"Jupiter"}/>
        </div>
        <div className="orbit saturn-orbit"></div>
        <div className="saturn-spin">
          <div id="saturn"></div>
          <Name name={"Saturn"}/>
        </div>
        <div className="orbit uranus-orbit"></div>
        <div className="uranus-spin">
          <div id="uranus"></div>
          <Name name={"Uranus"}/>
        </div>
        <div className="orbit neptune-orbit"></div>
        <div className="neptune-spin">
          <div id="neptune"></div>
          <Name name={"Neptune"}/>
        </div>
      </div>
    </div>
  );
}

export default SolarSystem;
