import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
export default function Search({onSearch}) {
    const [city, setCety] = useState(""); 
      const handleSearch = () => {
        if (city.trim() === "") return; 
        onSearch(city);
      };

      // Détecter Enter dans l'input
      const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      };
    return (
        <div className="container">
            <div className="search">

                <h3>How's the sky looking today ?</h3> 
                <div className="search-card">
                    <input type="text"
                        onChange={(e) => setCety(e.target.value)} 
                        onKeyDown={(e)=>handleKeyDown(e)}
                        placeholder='Search for a place ...' />
                    <IoIosSearch className='icon-search'
                    />
                    <button
                    onClick={handleSearch}
                    >Search</button>
                </div>
            </div>

    </div> 

  )
}
