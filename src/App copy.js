import React, { Component } from 'react';
import './App.css';
import PropertyList from './Components/PropertyList/PropertyList';

class App extends Component {
  state = {
    propertiesData : [
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
    ]
  }
  render() {
    return (
      <div className="App">
        <PropertyList propertyList={this.state.propertiesData}/>
      </div>
    );
  }
}

export default App;
