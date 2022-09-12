import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch!= null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
  }
}

  handleAddingNewMerchToList = (newMerch) => {
    const { dispatch } = this.props;
    const { id, name, price, description, quantity } = newMerch;
    const action = {
      type: 'ADD_MERCH',
      id: id,
      name: name,
      price: price,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.props.mainMerchList[id];
    this.setState({selectedMerch: selectedMerch});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }
  
  handleEditingMerchInList = (merchToEdit) => {
    const { dispatch } = this.props;
    const { id, name, price, description, quantity } = merchToEdit;
    const action = {
      type: 'ADD_MERCH',
      id: id,
      name: name,
      price: price,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null
    });
  }

  handleDeletingMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_MERCH',
      id: id
    }
    dispatch(action);
    this.setState({selectedMerch: null});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditMerchForm 
      selectedMerch = {this.state.selectedMerch} 
      onEditMerch = {this.handleEditingMerchInList}/>
      buttonText = "Return to Merch List";
    } else if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail 
      selectedMerch = {this.state.selectedMerch} 
      onClickingDelete = {this.handleDeletingMerch}
      onClickingEdit = {this.handleEditClick}  />
      buttonText = "Return to Merch List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
      buttonText = "Return to Merch List";
    } 
    
    else {
      currentlyVisibleState = <MerchList 
        merchList={this.props.mainMerchList} 
        onMerchSelection={this.handleChangingSelectedMerch}/>;
      buttonText = "Add New Merch";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );


  }
}

MerchControl.propTypes = {
  mainMerchList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainMerchList: state
  }
}

MerchControl = connect(mapStateToProps)(MerchControl);

export default MerchControl;
