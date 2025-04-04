import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MAPS_API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY;

const MapComponent = ({ 
  center, 
  zoom, 
  markers = [] 
}: {
  center: { lat: number; lng: number };
  zoom: number;
  markers?: Array<{ position: { lat: number; lng: number }; title: string }>;
}) => {
  const mapStyles = {
    height: "500px",
    width: "100%"
  };

  return (
    
    <LoadScript
      googleMapsApiKey={MAPS_API_KEY as string}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={center}
        zoom={zoom}
      >
        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={marker.position}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;