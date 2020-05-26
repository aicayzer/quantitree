import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleApiKey } from "../googleApiKey";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.678468,
      lng: -1.090988,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={googleApiKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={50.678468} lng={-1.090988} text="X" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
