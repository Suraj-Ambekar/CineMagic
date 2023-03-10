import React from 'react';
import "./style.scss";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';

const HeroBanner = () => {

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {url} = useSelector((state) => state.home);

    const {data, loading} = useFetch("/movie/upcoming");

    useEffect(()=> {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }
  return (
    <div className='heroBanner'>
        <div className='backdrop-img'>
            {/* , */}
        </div>
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
                    {/* <img src={background} alt="kjd"/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner