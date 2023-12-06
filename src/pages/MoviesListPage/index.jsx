

import Home from 'components/Movies';
import { getTrending } from 'myApi/api';
import React, { useEffect, useState } from 'react'


const HomePage = () => {

    const [movies, setMovies] = useState([]);   
    useEffect(() => {
      getTrending().then(setMovies);

    }, []);

   
	return (<Home movies={movies}/>)

}
export default HomePage


