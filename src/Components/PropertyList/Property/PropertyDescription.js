import { React, Component } from 'react';
import PropertyDescriptionClasses from './PropertyDescription.module.css';
import AddEditPropertyDialog from './AddEditPropertyDialog';

class PropertyDescription extends Component {
  state = {
    showAddEditDialog: false

  };
  propertyEditHandler = (property) => {
    console.log(`${property.id} is being edited`);
    this.showAddEditPropertyModal();
  }
  showAddEditPropertyModal = () => {
    this.setState({ showAddEditDialog: true });
  }
  hideAddEditPropertyModal = () => {
    this.setState({ showAddEditDialog: false });
  }

  render() {
    const property = this.props.property;
    const propertyID = property.id;
    return (
      <div className={PropertyDescriptionClasses.PropertyDesc}>
        <p className={PropertyDescriptionClasses.PropertyName}>{property.location} - {property.name}</p>
        <button id={`delete_${propertyID}`}
          onClick={() => { this.props.propertyDeleteHandler(propertyID) }}
        >
          Delete
        </button>
        <button id={`Edit_${propertyID}`}
          onClick={() => this.propertyEditHandler(property)}
        >
          Edit
        </button>

        {
          this.state.showAddEditDialog ?
            <AddEditPropertyDialog
              isEdit={true} property={property}
              showAddEditProperty={this.state.showAddEditDialog}
              showAddEditPropertyModal={this.showAddEditPropertyModal}
              hideAddEditPropertyModal={this.hideAddEditPropertyModal}
              propertyEditHandler={this.propertyEditHandler}
            />
            : null
        }

      </div>
    );
  }
}

export default PropertyDescription;