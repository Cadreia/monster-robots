import React from 'react'
import './search-box.styles.css'

const SearchBox = ({placeholder, handleChange}) => {
    return (
            <input type="search" placeholder={placeholder} onChange={handleChange} className="search" />
    )
}

export default SearchBox
