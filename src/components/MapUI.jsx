import React, { useState } from "react";
import Map from "react-map-gl";

const MapUI = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <Map
      initialViewState={{
        longitude: viewport.longitude,
        latitude: viewport.latitude,
        zoom: viewport.zoom,
      }}
      style={{ width: "100%", height: "100%", color: "black" }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/ali-test-mapbox/cldt04011005701mg22xlici4"
    ></Map>
  );
};

export default MapUI;
