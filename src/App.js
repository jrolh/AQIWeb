import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import MapContainer from "./components/map/MapContainer";
import Infobox from "./components/layout/Infobox";
import "./App.css";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="mapcontainer">
          <MapContainer />
        </div>
        <Infobox />
      </div>
    );
  }
}

export default App;
