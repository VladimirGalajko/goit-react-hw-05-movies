import Actors from 'components/Actors';
import { getCast } from 'myApi/api';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ActorsPage = () => {	
	const param = useParams();

	const [cast, setCast] = useState([]);
  
	useEffect(() => {		
	  const fetchCast = async () => {
		try {
		  const cast = await getCast(param.movId)
		  setCast(cast);
		} catch (e) {
		  console.log('warn: ' + e);
		}
	  };
	  fetchCast();
	}, [param]);
  




	return <Actors cast={cast} />
}

export default ActorsPage