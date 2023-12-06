

import MoviesList from 'components/MoviesList';
import { getTrending } from 'myApi/api';
import React, { useEffect, useState } from 'react'


const HomePage = () => {

    const [movies, setMovies] = useState([]);   
    useEffect(() => {
      getTrending().then(setMovies);

    }, []);

   
	return (<MoviesList movies={movies}/>)

}
export default HomePage


