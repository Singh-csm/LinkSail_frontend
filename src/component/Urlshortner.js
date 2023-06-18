import React, { useState } from 'react';
import axios from 'axios';
import  "../index.css"
import {serverUri} from './Config';


const Urlshortner = () => {

  const [mainUrl, setMainUrl] = useState("");


  // const handleInput = (e) => {
  //   let {name, value}= e.target;
  //   setUrl({...url, [name]: value});
  //   //console.log(value)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { mainUrl: mainUrl };
    let res = await axios.post(serverUri + "/sort-the-url", data);

    // const parsedData = await res.json();
    console.log(res.status);

  };


  return (
    <div className='urlshortner'>
      
  
      <fieldset className='fieldset'>
      <legend style={{fontFamily:"serif"}}>Linksail</legend>
      <h4 style={{fontFamily:"cursive"}}>LinkSail: Navigate the web with speed, simplicity, and style.</h4>
      </fieldset>
 
      <form > 
          {/* <h1 style={{fontFamily:"serif"}}>Urlshortner</h1> */}
          <input className='input_value' type="text" name="url" placeholder="Enter your URL" onChange={(e) => setMainUrl(e.target.value)} />
          <button className="button" onClick={handleSubmit} >submit</button>
      </form>
    </div>
  )
}

export default Urlshortner;
