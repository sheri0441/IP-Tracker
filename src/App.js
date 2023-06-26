import { useEffect, useState } from "react";
import "./App.css";
import Map from "./Components/Map";
import Panel from "./Components/Panel";
import arrow from "./images/icon-arrow.svg";

function App() {
  const [addressData, setAddressData] = useState(null);
  const [ipInput, setIpInput] = useState("");
  const [ipAddress, setIpAddress] = useState("8.8.8.8");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "Your API key");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      const getIP_Address = async () => {
        const response = await fetch(
          `https://api.apilayer.com/ip_to_location/${ipAddress}`,
          requestOptions
        );
        const result = await response.json();
        setAddressData(result);
        setLoading(false);
      };

      getIP_Address();
    } catch (e) {
      console.log(e);
    }
  }, [ipAddress]);

  const updateIP_Address_by_enter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      updateIP_Address();
    }
  };

  const updateIP_Address = () => {
    setIpAddress(ipInput);
    setIpInput("");
  };

  const ip_Handler = (e) => {
    setIpInput(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <h1 className="loading">Loading</h1>
      ) : (
        <div className="body">
          <header>
            <h1>IP Address Tracker</h1>
            <div className="input-box">
              <input
                type="text"
                id="text"
                placeholder="Search for any IP Address"
                value={ipInput}
                onChange={ip_Handler}
                onKeyDown={updateIP_Address_by_enter}
              />
              <button onClick={updateIP_Address}>
                <img src={arrow} alt="Search button" />
              </button>
            </div>
          </header>
          {addressData !== null && Object.keys(addressData).length > 1 ? (
            <div className="map">
              <Panel address={addressData} />
              <Map address={addressData} />
            </div>
          ) : (
            <div className="errorMessage_Box">
              <h2 className="errorMessage">
                {addressData?.message}
                <br />
                Please try again.
              </h2>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
