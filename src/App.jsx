import Header from "./components/Header";
import config from "../config";
import DataDisplay from "./components/DataDisplay";
import Map from "./components/Map";

import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";

const App = () => {
  const [address, setAddress] = useState(null);

  const API_KEY = config.REACT_APP_API_KEY;

  useEffect(() => {
    const getInitialData = async () => {
      try {
        // Fetch the user's current location using the Geolocation API
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          // Call the IPify API with the user's current latitude and longitude
          const res = await fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          setAddress(data);
        });
      } catch (error) {
        console.trace(error);
      }
    };
    getInitialData();
  }, [API_KEY]);

  return (
    <>
      <section className="relative font-rubik">
        <Header />
        <section className="absolute top-10 right-0 left-0">
          <Form setAddress={setAddress} />
          <DataDisplay address={address} />
        </section>
        <Map address={address} />
      </section>
    </>
  );
};

export default App;
