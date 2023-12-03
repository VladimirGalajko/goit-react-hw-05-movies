

import Reviews from 'components/Reviews';
import { getReviews } from 'myApi/api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const param = useParams();
  console.log('param', param)
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
		
        const reviews = await getReviews(param.movId);
        setReviews(reviews);
      } catch (e) {
        console.log('warn: '+ e);
      }
    };
    fetchReviews();
  }, [param]);

  return (<Reviews reviews={reviews}/>);
};

export default ReviewsPage;
