//First, we’ll import MapLibre GL and the required React functions.

import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

//Now we will create a function as our map component.

export default function Map() {

    //set up your map’s default state.
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(6.953487);
    const [lat] = useState(50.934963);
    const [zoom] = useState(12);
    const [API_KEY] = useState('ghWAJGJDFy898MQpbDI2');
 

  //we will initialize the map in the Map() function.
  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once
  
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
  
  }, [API_KEY, lng, lat, zoom]);

  //dd the return statement to your Map() function. 
  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}