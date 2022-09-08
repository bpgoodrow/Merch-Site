import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
      <h3>{props.name} <sup>$</sup>{props.price}</h3>
      <p>Description: {props.description}</p>
      <p>Quantity: {props.quantity}</p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string, 
  whenMerchClicked: PropTypes.func
};

export default Merch;