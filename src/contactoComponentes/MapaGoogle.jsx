import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = 'AIzaSyC6waAjB9_sOx_z2lAr6tMaTXgJvPGUjZE';

export const MapaGoogle = () => {
    const containerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: -34.603722, // Latitude
        lng: -58.381592, // Longitude
    };

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};
