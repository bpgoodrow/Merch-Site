import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewMerchForm(props){

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
      <form onSubmit={handleNewMerchFormSubmission}>
        <input 
          type='text'        
          name='name'
          placeholder='Merch Name' />
        <input
          type='text'
          name='description'
          placeholder='description' />
        <input
          type='text'
          name='price'
          placeholder='price' />
        <input
          type='text'
          name='quantity'
          placeholder='quantity' />
        <button type='submit'>Add Merch</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;



// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter('foo')); // Foo