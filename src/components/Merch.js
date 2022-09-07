import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <h3>{props.name} <sup>$</sup>{props.price}</h3>
      <p>Description: {props.description}</p>
      <p>Quantity: {props.quantity}</p>
      <hr/>
    </React.Fragment>
  );
}

Merch.propTypes = {
  names: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default Merch;