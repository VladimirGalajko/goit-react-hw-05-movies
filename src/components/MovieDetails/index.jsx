import React from 'react';
import { AdditionalInfoContainer, ButtonGoBack, Div, Img, Label } from './MovieDetail.style';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const MovieDetails = ({
  movId: { poster_path, title, overview, genres, vote_average },
}) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const genresStr = genres?.map(genre => genre.name).join(' ');
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state.from;

  const onGoBack = () => navigate(location?.state?.from ?? '/');
  return (
    <>
      <ButtonGoBack type="button" onClick={onGoBack}>        
        <Label>Go back</Label>
      </ButtonGoBack>
     
      <Div>
        <Img
          src={`${poster_path ? BASE_URL + poster_path : defaultImg}`}
          alt="get"
        />
        <ul>
          <li>
            <h1>{title}</h1>
          </li>
          <li>
            <h3>{genresStr}</h3>
          </li>
          <li>
            <p>
              <span>Rating: </span> {vote_average?.toFixed(1)}
            </p>
          </li>
          <li>
            <p>
              <span>Overview:</span> {overview}
            </p>
          </li>
        </ul>
      
      </Div>
      <AdditionalInfoContainer>
      <h2>Additional information</h2>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: subLocation }} active="active">
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: subLocation }} active="active">
            Reviews
          </NavLink>
        </li>
      </ul>
      </AdditionalInfoContainer>
      <Outlet />
    </>
  );
};

export default MovieDetails;
