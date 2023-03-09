import React from 'react';
import "./style.scss";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }
  return (
    <div className='heroBanner'>
        <div className='wrapper'>
            <div className='heroBannerContent'>
                <span>Welcome.</span>
                <span>Millions of movies, TV shows and people to discover. Explore now.</span>
                <div className='searchInput'>
                    <input
                        type="text"
                        placeholder='Search for a movie or tv show....'
                        onKeyUp={searchQueryHandler}
                        onChange={(event)=> setQuery(event.target.value)}
                    />
                    <button>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner