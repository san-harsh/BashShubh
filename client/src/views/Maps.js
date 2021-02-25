import React from "react";

// react-bootstrap components
// import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

function Maps() {
  const mapRef = React.useRef(null);
  return (
    <>
      <div className="map-container">
        <div id="map" ref={mapRef}></div>
      </div>
    </>
  );
}

export default Maps;
