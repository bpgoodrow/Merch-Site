import React from "react";

function Header(props){
    const headerStyles = {
      backgroundColor: '#ecf0f1',
      fontFamily: 'sans-serif',
      paddingTop: '50px',
      paddingBottom: '50px',
      paddingLeft: '10px'
      }
  return(
      <div style={headerStyles}>
        <h1>TOTALLY REAL MERCH SITE</h1>
      </div>
  );
}

export default Header; 