import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;