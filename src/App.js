import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import './App.css';
import PropertyList from './Components/PropertyList/PropertyList';
import Search from './Components/Search/Search';
import AddEditPropertyDialog from './Components/PropertyList/Property/AddEditPropertyDialog';
import { Button } from 'react-bootstrap';

class App extends Component {
  state = {
    propertyData : [
      {
        id: 10, name: 'Amygdala homes', location: 'Chennai',
        img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb1.2.1&w=1000&q=80'
      },
      {
        id: 11, name: 'Fairbanks Ltd', location: 'Pondicherry',
        img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb1.2.1&w=1000&q=80'
      },
      {
        id: 12, name: 'Dale homes', location: 'Trichy',
        img: 'https://i.pinimg.com/736x/2f/82/39/2f823993ba069d0aa966144e6f20d459.jpg'
      },
      {
        id: 13, name: 'Triptico Properties', location: 'Madurai',
        img: 'https://media.gettyimages.com/photos/idyllic-home-with-covered-porchpicture-id479767332?s=612x612'
      },
      {
        id: 14, name: 'MC homes', location: 'Kanyakumari',
        img: 'https://images.livemint.com/img/2019/04/16/600x338/Kerala_1555430371601.jpg'
      },
    ],
    filterText : '',
    showAddEditDialog: false
  }

  filterTextChangeHandler = (filterText) => {
    this.setState({filterText : filterText})
  }

  propertyDeleteHandler = ( propertyId ) => {
    const propertyData = this.state.propertyData;
    const updatedPropertyData = propertyData.filter(
      (property) => {
        return property.id !== propertyId
      }
    );
    this.setState({propertyData : updatedPropertyData});
  }

  propertyAddHandler = ( property ) => {
    const propertyData = this.state.propertyData;
    const propertyIdArray = propertyData.map(
      (property) => {
        return property.id;
      }
    );
    const propertyId = Math.max(...propertyIdArray) + 1;
    property.id = propertyId;

    const updatedPropertyData = propertyData.slice();
    updatedPropertyData.push(property);
    this.setState({propertyData : updatedPropertyData});
  }

  propertyEditHandler = ( newProperty ) => {
    const updatedPropertyId = newProperty.id;
    const propertyData = this.state.propertyData;
    const updatedPropertyData = propertyData.forEach(
      ( property ) => {
        if(property.id === updatedPropertyId){
          return newProperty;
        } else{
          return property;
        }
      }
    );
    this.setState({propertyData : updatedPropertyData});
  }

  showAddEditPropertyModal = () => {
    this.setState({showAddEditDialog : true});
  }
  hideAddEditPropertyModal = () => {
    this.setState({showAddEditDialog : false});
  }

  render() {
    return (
      <div className="App">
        <h1>PROPERTIES</h1>
        <div className="Header">
          <Search filterText={this.state.filterText}
            filterTextChangeHandler={this.filterTextChangeHandler}
          />
          <Button id="AddProperty" variant="primary" 
            onClick={() => this.showAddEditPropertyModal()}
          >
            Add Property
          </Button>
        </div>
        {
          this.state.showAddEditDialog ? 
            <AddEditPropertyDialog 
              showAddEditProperty = {this.state.showAddEditDialog}
              showAddEditPropertyModal = {this.showAddEditPropertyModal}
              hideAddEditPropertyModal = {this.hideAddEditPropertyModal}
              propertyAddHandler = {this.propertyAddHandler}
              propertyEditHandler = {this.propertyEditHandler}
            /> 
            : null
        }
        <PropertyList 
          propertyData={this.state.propertyData}
          filterText={this.state.filterText}
          propertyDeleteHandler={this.propertyDeleteHandler}
          propertyEditHandler={this.propertyEditHandler}
        />
      </div>
    );
  }
}

export default App;
