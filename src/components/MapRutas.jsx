import React from 'react' //Importacion de React
import { useEffect } from 'react'//importacion de useEffect
import { useMap } from 'react-leaflet' //Importacion de useMap
import L from "leaflet"; //Libreria de Leaflet para trabajar con mapas interactivos

//Extension de leaflet para las rutas y estilos de este (leaflet-routing-machine)
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"; 
import "leaflet-routing-machine";

//Extension de leaflet para trabajar con el geodificador
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';


export const MapRutas = () => {
  //Declaracion del useMap para trabajar con el mapa que se tiene actualmente
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    //funcion que nos ayuda  a crear una instancia de un nuevo control de enrutamiento con las opciones proporcionadas a continuacion
    const routingControl = L.Routing.control({
      //Se puede colocar una latitud y longitud por defecto si es que se necesita tener un marcado de ruta por defecto, si es que no, no se coloca nada
      waypoints: [L.latLng(), L.latLng()],
      routeWhileDragging: true,
      //Con este se coloca los input para que se puedan colocar las direcciones y asi mismo las instrucciones para llegar a dicho punto de destino
      geocoder: L.Control.Geocoder.nominatim(),
      //se cambia el lenguaje a español
      language: 'es',
    }).addTo(map);

    //retornamos el mapa
    return () => map.removeControl(routingControl);
  }, [map]);


  return null
}
