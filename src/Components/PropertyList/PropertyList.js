import React from 'react';
import Property from './Property/Property';

const PropertyList = ( props ) => {
  const propertyData = props.propertyData;
  const filterText = props.filterText;

  const propertyList = propertyData.map(
    (property) => {
      const filterTextToLower = filterText.toLowerCase();
      const propertyName = property.name.toLowerCase();
      const propertyLocation = property.location.toLowerCase();
      if(propertyName.indexOf(filterTextToLower) >= 0 || propertyLocation.indexOf(filterTextToLower) >= 0){
        return (
          <Property 
            key={property.id} 
            property={property} 
            propertyDeleteHandler={props.propertyDeleteHandler}
          />
        );
      } else{
        return null;
      }
    }
  );

  return <div>{propertyList}</div>;
}

export default PropertyList;