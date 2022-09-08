import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.merchList.map((merch) =>
        <Merch
          whenMerchClicked={props.onMerchSelection}
          name={merch.name}
          description={merch.description}
          price={merch.price}
          quantity={merch.quantity}
          key={merch.id}
          id={merch.id} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func
};

export default MerchList;