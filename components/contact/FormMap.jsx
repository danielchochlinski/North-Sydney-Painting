import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -33.832756,
  lng: 151.214943,
};
const position = { lat: -33.832756, lng: 151.214943 };

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

const onLoad = (infoWindow) => {};
function FormMap(props) {
  const key = props.googleKey;

  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <InfoWindow onLoad={onLoad} position={position}>
          <div style={divStyle}>
            <h4>North Sydney Painting & Decorating</h4>
            <p>73 Lower Bent St Neutral Bay NSW 2089 Australia</p>
            <p>Call now: 0487 556 397</p>
          </div>
        </InfoWindow>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(FormMap);
