import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditMerchForm(props) {
  const { selectedMerch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({
      name: event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1),
      description: event.target.description.value.charAt(0).toUpperCase() + event.target.description.value.slice(1),

      // name: event.target.name.value,
      // description: event.target.description.value,
      price: event.target.price.value,
      quantity: parseInt(event.target.quantity.value),
      id: selectedMerch.id
    });

  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update Merch" />
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  selectedMerch: PropTypes.object,
  onEditMerch: PropTypes.func
};

export default EditMerchForm;