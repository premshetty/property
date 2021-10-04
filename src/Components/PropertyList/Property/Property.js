import React from 'react';
import PropertyClasses from './Property.module.css';
import PropertyDescription from './PropertyDescription';

const Property = ( props ) => {
  const property = props.property;
  return (
    <div className={PropertyClasses.Property}>
      <img src={property.img} alt={property.name}/>
      <PropertyDescription 
        property={property} 
        propertyDeleteHandler={props.propertyDeleteHandler}
        propertyEditHandler={props.propertyEditHandler}
      />
    </div>
  );
}

export default Property;