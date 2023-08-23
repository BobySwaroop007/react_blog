// import React, { useState } from "react";
// import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


// const Area = () => {
//     const [selectedLocation] = useState({
//         lat: 26.8822774,
//         lng: 81.0018128,
//       });
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyAsS5A6zN5BFeOd6x-aTeIB88pxczDv2vI',
//   });
//   const mapRef = React.useRef();
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
//   }, []);
//   if (loadError) return "Error";
//   if (!isLoaded) return "Maps";

//   return (
//     <div style={{ marginTop: "50px" }}>
//       <GoogleMap
//         mapContainerStyle={{
//           height: "400px",
//           width:"600px"
//         }}
//         center={selectedLocation}
//         zoom={13}
//         onLoad={onMapLoad}
        
//       >
//         <MarkerF
//           position={selectedLocation}
//           icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
//         />
//       </GoogleMap>
//     </div>
//   );
// };

// export default Area;
import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Area = () => {
  const [city, setCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 26.8822774,
    lng: 81.0018128,
  });

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAsS5A6zN5BFeOd6x-aTeIB88pxczDv2vI`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setSelectedLocation({ lat, lng });
      }
    } catch (error) {
      console.error("Error fetching city coordinates:", error);
    }
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAsS5A6zN5BFeOd6x-aTeIB88pxczDv2vI",
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "50px" }}>
      <div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
          width: "600px",
        }}
        center={selectedLocation}
        zoom={13}
        onLoad={onMapLoad}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
    </div>
  );
};

export default Area;
