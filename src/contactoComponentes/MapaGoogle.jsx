import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const API_KEY = 'AIzaSyC6waAjB9_sOx_z2lAr6tMaTXgJvPGUjZE';

export const MapaGoogle = () => {
    // const containerStyle = {
    //     width: '100%',
    //     height: '400px',
    // };

    // const center = {
    //     lat: -34.603722, // Latitude
    //     lng: -58.381592, // Longitude
    // };

    return (


        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.163391598381!2d-59.84295093455681!3d-36.790632701599314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9594274d51a11b2f%3A0x3243585f178ddf75!2sScalcini%20Construcciones!5e0!3m2!1ses-419!2sar!4v1741482407581!5m2!1ses-419!2sar"
                width="700"
                height="550"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </>
        // <LoadScript googleMapsApiKey={API_KEY}>
        //     <GoogleMap
        //         mapContainerStyle={containerStyle}
        //         center={center}
        //         zoom={10}
        //     >
        //         <Marker position={center} />
        //     </GoogleMap>
        // </LoadScript>
    );
};
