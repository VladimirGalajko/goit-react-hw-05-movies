import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '40253258481181f95ffd462298505f67';

//популярные фильмы за неделю
export const getTrending = async () => {
  const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);

  return data.results;
};
// для поиска фильма по тексту
export const getSearch = async (search) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`
  );

  return data.results;
};

// для поиска фильма по id
export const getId = async (movId) => {
  const { data } = await axios.get(
    `movie/${movId}?api_key=${API_KEY}&language=en-US`
  ); 
  return data;
};

//для поиска Аткеров по id
export const getCast = async (movId) => {
  const { data } = await axios.get(
    `movie/${movId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data.cast;
};

//для поиска Отзывов по id
export const getReviews = async (movId) => {
  const { data } = await axios.get(
    `movie/${movId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};
