import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewMerchForm(props) {

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1),
      description: event.target.description.value.charAt(0).toUpperCase() + event.target.description.value.slice(1),
      price: event.target.price.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewMerchFormSubmission}
        buttonText="Add Merch!" />
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;
