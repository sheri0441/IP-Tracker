
import { useEffect, useState } from 'react';
import './App.css';
import Panel from './Components/Panel';
// import Preloader from './Components/preloader';
import Preloader from './Components/Preloader';
import arrow from './images/icon-arrow.svg';

function App() {
  const [ip, setip] = useState('192.121.264.12')
  const [location, setlocation] = useState('islamabad')
  const [time, settime] = useState('+5:00')
  const [isp, setisp] = useState('PTCL')
  const [load, setload] = useState('')
 
  //   let datafile; 
  //   async function ipTracker () {
  //     let file = await fetch('https:geo.ipify.org/api/v2/country,city?apiKey=at_tIa8PUbTTmWBfAkaLFsumCsCXmDS7&ipAddress=');
  //     let data = await file.json();
  //     datafile = data;
      
  //     setip(datafile.ip);
  //     setlocation(datafile.location.region);
  //     settime(datafile.location.timezone);
  //     setisp(datafile.isp);
  //   }




  window.addEventListener('load', () => {
    setload('none')
  })



  return(
    <>
      <Preloader loadState={load} />
      <div className='body'>
        <header>
          <h1>
            IP Address Tracker
          </h1>
          <div className='input-box'>
            <input type='text' placeholder='Sreach for any IP Address or domain' />
            <button><img src={arrow} alt='sreach button' /></button>
          </div>
        </header>
        <div className='map'>
          <Panel ip={ip} location={location} isp={isp} time={time} />

        </div>
    </div>
    </>

)
}

export default App;
