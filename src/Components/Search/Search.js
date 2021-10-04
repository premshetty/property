import React from 'react';
import SearchClasses from './Search.module.css';


const Search = ( props ) => {
  return (
    <input type="text" 
      value={props.filterText}
      className={SearchClasses.Search}
      onChange={(event) => {props.filterTextChangeHandler(event.target.value)}}
    />
  );
}

export default Search;