import React from 'react';
import { MdSearch } from 'react-icons/md'

const Search = () =>{
    return(
        <div className='search'>
            <MdSearch className="search-icons" size="1.3em" />
            <input/> 
        </div>
    )
};

export default Search;