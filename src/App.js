

import { useEffect, useState } from 'react';
import './App.css';
import Map from './Components/Map';
import Panel from './Components/Panel';
import arrow from './images/icon-arrow.svg';

function App() {
  const [IP, setIP] = useState('')
  const [address, setAddress] = useState(null);


  useEffect(() => {
    async function ipTracker () {
      let res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_tIa8PUbTTmWBfAkaLFsumCsCXmDS7&ipAddress=${IP}`);
      let data = await res.json();
      setAddress(data);
      
    }  
    try{

    } catch (error) {
      console.trace(error)
    }

    ipTracker()
  }, [IP])

  const ipAddress = () => {
     setIP(document.getElementById('text').value);
     document.getElementById('text').value = '';

  }

    const enterPressed = (e) => {
      if(e.key === "Enter") {
        ipAddress()
      }
    }


  return(
    <>
      <div className='body'>
        <header>
          <h1>
            IP Address Tracker
          </h1>
          <div className='input-box'>
            <input type='text' id='text' placeholder='Sreach for any IP Address or domain' onKeyPress={enterPressed} />
            <button onClick={ipAddress}><img src={arrow} alt='sreach button' /></button>
          </div>
        </header>
        {!(address === null) && 
        <>
          <div className='map'>
            <Panel address={address}/>
            <Map address={address} />
          </div>
        </>}
      </div>
    </>

)
}

export default App;
