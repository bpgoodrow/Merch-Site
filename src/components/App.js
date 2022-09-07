import React from "react";
import Header from "./Header";
import MerchControl from "./MerchControl";

function App(props) {
  const appStyles = {
    margin: '25px'
  }
  return (
    <div style={appStyles}>
      <React.Fragment>
        <Header />
        <MerchControl />
      </React.Fragment>
    </div>
  );
}

export default App;
