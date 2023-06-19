import React from 'react'

const Footer = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      padding: "0px 0px 20px 0px", 
      backgroundColor: "GrayText"
    }}>
      <h3>Frequently asked questions: </h3>
 

      <details>
        <summary>About this project?</summary>
        Go to the GitHub and see ReadME file:
        <a href='https://github.com/mnu4513/movie_library' target="_blank" > Click here </a> to go to the GitHub source code or use this link: https://github.com/mnu4513/movie_library
      </details>

      <details>
        <summary>Where is source code?</summary>
        Go to the GitHub to get the source code:
        <a href='https://github.com/mnu4513/movie_library' target="_blank" > Click here </a> to go to the GitHub source code or use this link: https://github.com/mnu4513/movie_library
      </details>

    </div>
  );
};

export default Footer;