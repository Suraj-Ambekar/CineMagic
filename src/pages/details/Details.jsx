import React from 'react';
import "./style.scss";
import DetailsBanner from './detailsBanner/DetailsBanner';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Cast from '../../components/cast/Cast';

const Details = () => {
  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);
  
  const {data: credits, loading: creaditsLoading} = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creaditsLoading} />
    </div>
    
  )
}

export default Details