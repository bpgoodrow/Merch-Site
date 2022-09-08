import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const { selectedMerch, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <hr/>
      <h3>{selectedMerch.name} <sup>$</sup>{selectedMerch.price}</h3>
      <p>Description: {selectedMerch.description}</p>
      <p>Quantity: {selectedMerch.quantity}</p>
      <button onClick={ props.onClickingEdit }>Update Merch</button>
      <button onClick={()=> onClickingDelete(selectedMerch.id) }>Delete Merch</button>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  selectedMerch: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default MerchDetail;