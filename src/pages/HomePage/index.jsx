
import Header from 'components/Header'
import Home from 'components/Home';
import { getTrending } from 'myApi/api';
import React, { useEffect, useState } from 'react'


const HomePage = () => {

    const [movies, setMovies] = useState([]);   
    useEffect(() => {
      getTrending().then(setMovies);

    }, []);

    <Header/>
	return (<Home movies={movies}/>)

}
export default HomePage


