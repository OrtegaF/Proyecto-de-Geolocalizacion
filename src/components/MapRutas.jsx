import React from 'react'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';


export const MapRutas = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(), L.latLng()],
      routeWhileDragging: true,
      geocoder: L.Control.Geocoder.nominatim(),
      language: 'es',
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);


  return null
}
