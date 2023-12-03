import { useSearchParams } from 'react-router-dom';
import { Button, Div, Form, Input, Label } from './MoviesPage.styled';
import { useEffect, useState } from 'react';
import { getSearch } from 'myApi/api';
import Home from 'components/Home';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = ({ target: { value } }) => {
    if (!value) setSearchParams({});
    setQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return setSearchParams({});
    setSearchParams({ search: query });
  };



  useEffect(() => {
    const value = searchParams.get('search');
    if (value) {
      setQuery(value);
      const fetchSearch = async () => {
        try {
          const arr = await getSearch(value);
          setMovies(arr);
        } catch (e) {
          console.log('warn: ' + e);
        }
      };
      fetchSearch();
    }
  }, [searchParams]);

  return (
    <>
      <Div>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              name="query"
              type="text"
              id="query"
              placeholder="search"
              value={query}
              onChange={handleChange}
              required
            />
          </Label>
          <Button type="submit">search 👆</Button>
        </Form>
      </Div>
      {movies.length > 0 && <Home movies={movies}  isMoviesPage={true}/>}
    </>
  );
};

export default MoviesPage;
