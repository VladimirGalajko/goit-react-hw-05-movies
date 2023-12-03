import MovieDetails from 'components/MovieDetails';
import { getId } from 'myApi/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const param = useParams();

  const [movId, setMovId] = useState([]);
  useEffect(() => {
    getId(param.movId).then(setMovId);
  }, [param]);

  return <MovieDetails movId={movId} />;
};

export default MovieDetailsPage;
