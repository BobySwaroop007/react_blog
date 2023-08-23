// import React, { useEffect, useState } from 'react'

// const Note = () => {
//   const [latitude, setlatitude] = useState("");
//   const [longitude, setlongitude] = useState("");
//   useEffect(()=>{
//     navigator.geolocation.getCurrentPosition((position) => {
//       setlatitude(position.coords.latitude);
//       setlongitude(position.coords.longitude);
//     })
//   })
//   return (
//     <>
//     <p>{latitude}</p>
//     <p>{longitude}</p>
//     </>
//   )
// }

// export default Note
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Note = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lng);

      const geocoder = new window.google.maps.Geocoder();
      const latLng = new window.google.maps.LatLng(lat, lng);
      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === 'OK') {
          if (results[0]) {
            setAddress(results[0].formatted_address);
          }
        } else {
          console.error('Geocoder failed due to: ' + status);
        }
      });
    });
  }, []);

  return (
    <div>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Address: {address}</p>
      <div style={{ width: '100%', height: '300px' }}>
        <LoadScript googleMapsApiKey="AIzaSyAsS5A6zN5BFeOd6x-aTeIB88pxczDv2vI">
          <GoogleMap
            zoom={13}
            center={{ lat: latitude, lng: longitude }}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Note;
