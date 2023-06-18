import React, { useState } from 'react';
import axios from 'axios';
import "../index.css"
import { serverUri } from './Config';


const Urlshortner = () => {

  const [mainUrl, setMainUrl] = useState("");

  const [output, setOutput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { mainUrl: mainUrl };
    let res = await axios.post(serverUri + "/sort-the-url", data);

    // const parsedData = await res.json();
    setOutput(res.data.data);
    console.log(res.data.data);

  };


  return (
    <div className='urlshortner' >


      

      <form >
        <h1 style={{ fontFamily: "serif" }}>Urlshortner</h1>
        <input className='input_value' type="text" name="url" placeholder="Enter your URL" onChange={(e) => setMainUrl(e.target.value)} />
        <button className="button" onClick={handleSubmit} >Submit</button>
      </form>



      {
        output ? <h3>

          {output.shortUrl}
        </h3> : null
      }

<iframe src="https://www.youtube.com/embed/yYWlZz-jW9Q?autoplay=1" allow='autoplay' frameBorder="10px0" height="300px" width="500px" title="1" ></iframe>

    </div>
  )
}

export default Urlshortner;