import React, { useState } from 'react';
import axios from 'axios';
import  "../index.css"
const Urlshortner = () => {
  const [url, setUrl] = useState({url:""})


  const handleInput = (e) => {
    let {name, value}= e.target;
    setUrl({...url, [name]: value});
    //console.log(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = { URL:url.url }
    let response = await axios.post("http://localhost:4000/url", result)
    console.log(response)

  }


  return (
    <div className='urlshortner'>
      
  
      <fieldset className='fieldset'>
      <legend style={{fontFamily:"serif"}}>Linksail</legend>
      <h4 style={{fontFamily:"cursive"}}>LinkSail: Navigate the web with speed, simplicity, and style.</h4>
      </fieldset>
 
      <form onSubmit={handleSubmit}> 
          <h1 style={{fontFamily:"serif"}}>Urlshortner</h1>
          <input className='input_value' type="text" name="url" placeholder="Enter your URL" onChange={handleInput} />
          <button type='submit' className="button" onSubmit={handleSubmit} >submit</button>
      </form>
    </div>
  )
}

export default Urlshortner;
