"use client";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

const MapUI = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  const offsetTop = -10;
  const offsetLeft = -20;
  const offsetBottom = -45;

  const markerOffsetObject = {
    top: [0, offsetTop],
    "top-left": [offsetLeft, offsetTop],
    "top-right": [-offsetLeft, offsetTop],
    bottom: [0, offsetBottom],
    "bottom-left": [offsetLeft, offsetBottom],
    "bottom-right": [-offsetLeft, offsetBottom],
    left: [offsetLeft, offsetBottom],
    right: [-offsetLeft, offsetBottom],
  };

  const coordinates = data.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: viewport.zoom,
      }}
      style={{ width: "100%", height: "100%", color: "black" }}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/ali-test-mapbox/cldt04011005701mg22xlici4"
    >
      {data.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetRight={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long == result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {res.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </Map>
  );
};

export default MapUI;
