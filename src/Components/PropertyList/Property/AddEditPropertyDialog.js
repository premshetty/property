import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./bootstrap.min.css";
import AddEditPropertyClasses from './AddEditPropertyDialog.module.css';

class AddEditPropertyDialog extends Component {
  state = {
    property: {
      id: "",
      name: '',
      location: '',
      img: ''
    },
  }
  hideAddEditPropertyModal = () => {
    this.setState(
      {
        property: {
          id: "",
          name: '',
          location: '',
          img: ''
        }
      }
    );
    this.props.hideAddEditPropertyModal();
  }

  handleAddEditPropertySave = (isEdit) => {
    if(isEdit){
      this.props.propertyEditHandler(this.state.property)
    } else{
      this.props.propertyAddHandler(this.state.property);
    }
    
    this.hideAddEditPropertyModal();
  }

  handleLocationInputChange = (event) => {
    const property = this.state.property;
    property.location = event.target.value;
    this.setState({ property: property });
  }
  handleNameChange = (event) => {
    const property = this.state.property;
    property.name = event.target.value;
    this.setState({ property: property });
  }
  handleImageUrlChange = (event) => {
    const property = this.state.property;
    property.img = event.target.value;
    this.setState({ property: property });
  }
  
  componentDidMount(){
    if(this.props.isEdit){
      this.setState({property : this.props.property});
    }
  }
  render() {
    let isEdit = false;
    if(this.props.isEdit){
      isEdit = true;
    }

    return (
      <div>
        <Modal show={this.props.showAddEditProperty}>
          <Modal.Header closeButton onClick={() => this.hideAddEditPropertyModal()}>
            <Modal.Title>Enter property details</Modal.Title>
          </Modal.Header>
          <Modal.Body className={AddEditPropertyClasses.AddEditProperty}>
            <p>
              <label>Location : </label>
              <input
                type='text'
                className={AddEditPropertyClasses.AddEditPropertyInputs}
                value={this.state.property.location}
                placeholder='Location'
                onChange={this.handleLocationInputChange}
              />
            </p>
            <p>
              <label>Name : </label>
              <input
                type='text'
                className={AddEditPropertyClasses.AddEditPropertyInputs}
                value={this.state.property.name}
                placeholder='Name'
                onChange={this.handleNameChange}
              />
            </p>
            <p>
              <label>Image : </label>
              <input
                type='url'
                className={AddEditPropertyClasses.AddEditPropertyInputs}
                value={this.state.property.img}
                placeholder='Image'
                onChange={this.handleImageUrlChange}
              />
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.hideAddEditPropertyModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.handleAddEditPropertySave(isEdit)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

}

export default AddEditPropertyDialog;