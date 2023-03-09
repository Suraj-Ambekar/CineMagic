import { useState, useEffect } from 'react';

import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';

function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state)=> state.home );
  console.log(url);

  useEffect(()=>{
    apiTesting()
  },[])

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
      .then((res)=>{
        console.log(res);
        dispatch(getApiConfiguration(res));
      });
  }


  return (
    <div className="App">
      <h1>App</h1>
      <h3>{url.results[0].original_title}</h3>
    </div>
  )
}

export default App
