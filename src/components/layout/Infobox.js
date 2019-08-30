import React from "react";
import Aqi from "../map/Aqi";
import SearchInput from "../layout/SearchInput"

const Infobox = () => {



  return (
    <div class="jumbotron jumbotron-fluid">
      
      <div class="container">
        <h1 class="display-4">Air Quality Map</h1>
        <p class="lead">
          This is a react app that uses the google map api and the AQICN api to
          generate air quality reports when the user clicks a location on the
          map.
        </p>
        
          
         
          <SearchInput/>
         
        <center>
          <h2 class="display-6">Major Cities</h2>
        </center>
   
   
      </div>
    </div>
  );
};

export default Infobox;
