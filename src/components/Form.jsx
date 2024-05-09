import { useState } from "react";

import arrow from "../assets/icon-arrow.svg";
import PropTypes from "prop-types";
import config from "../../config";

const Form = ({ setAddress }) => {
  const [ipAddress, setIpAddress] = useState("");

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const API_KEY = config.REACT_APP_API_KEY;

  // Get Entered Address
  const getEnteredAddress = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
    );

    const dataRes = await res.json();
    setAddress(dataRes);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    getEnteredAddress();
    setIpAddress("");
  };

  return (
    <>
      <h1 className="text-2xl text-center text-white font-medium">
        IP Address Tracker
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center max-w-xl mx-auto mt-7 md:max-w-xl"
      >
        <input
          type="text"
          name="ipaddress"
          id="ipaddress"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          className="outline-none rounded-l-xl px-10 py-4 md:w-full"
        />
        <button className="bg-black px-6 py-4 rounded-r-xl">
          <img src={arrow} alt="icon arrow" />
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  setAddress: PropTypes.func.isRequired,
};

export default Form;
