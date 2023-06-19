import React, { useState, useRef } from 'react';
import axios from 'axios';
import "../index.css"
import { serverUri, bgImgUri } from './Config';


const Urlshortner = () => {

  const [mainUrl, setMainUrl] = useState("");

  const [output, setOutput] = useState(null);
  const [text, setText] = useState("Text to be copied");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { mainUrl: mainUrl };
    let res = await axios.post(serverUri + "/sort-the-url", data);

    // const parsedData = await res.json();
    setOutput(res.data.data);
    console.log(res.data.data);
    setText(res.data.data.shortUrl);
  };

  const copyButton = document.getElementById('copyButton');
  const textToCopy = document.getElementById('textToCopy');

  copyButton?.addEventListener('click', () => {
    textToCopy.select(); // Select the text inside the input element
    document.execCommand('copy'); // Copy the selected text to the clipboard

    // Optionally, you can provide visual feedback to the user
    copyButton.innerText = 'Copied!';
    setTimeout(() => {
      copyButton.innerText = 'Copy Text';
    }, 2000);
  });


  return (
    <div className='urlshortner' style={{
      backgroundImage: `url(${bgImgUri})`,
      backgroundSize: 'cover',
      height: "700px",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      padding: "10% 0"
    }}>




      <div >
        <form >
          <h2 style={{ fontFamily: "serif" }}>Urlshortner</h2>
          <input className='input_value' type="text" name="url" placeholder="Enter your URL here..." onChange={(e) => setMainUrl(e.target.value)} />
          <button className="button" onClick={handleSubmit} >Generate Quick Link</button>
        </form>

        {
          <>
            {
              output ? <h3 className='output'>
      
            <button id="copyButton">Copy Text</button>
            <input type="text" id="textToCopy" value={text} readonly />
              </h3> 
            : null
            }

          </>
        }
      </div>

      <div>
        <iframe src="https://www.youtube.com/embed/yYWlZz-jW9Q?autoplay=1" allow='autoplay' frameBorder="10px0" height="300px" width="500px" title="1" ></iframe>
      </div>

    </div>
  );
};

export default Urlshortner;