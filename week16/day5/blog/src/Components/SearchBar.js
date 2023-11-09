import React, { useState } from 'react';

function SearchBar (props) {
    const [cityName, setCityName] = useState("");
   const handleChange = (e) =>{  
        setCityName(e.target.value);
    }
    const handleClick = (e) =>{
        e.preventDefault()
        props.setFinalSearch(cityName)
    }
    return(
        <form>
            <input onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
        </form>
)};

export default SearchBar;