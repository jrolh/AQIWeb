import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  height: 500,
  width: "100%"
};

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
    lat: 33,
    lng: 108
  };

  onMapClicked = (mapProps, map, event) => {
    const { markers } = this.state;
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    this.setState({ lat: lat });
    this.setState({ lng: lng });
    console.log(lat, lng);
  };

  render() {
    return (
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        containerStyle={{ width: '100%', height: '500px', position: 'relative' }}
        style={style}
        initialCenter={{
          lat: 33.987871,
          lng: 109.2453
        }}
        zoom={6}
      >
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: this.state.lat, lng: this.state.lng }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
