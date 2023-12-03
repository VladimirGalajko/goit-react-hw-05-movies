import { useSearchParams } from 'react-router-dom';
import { Button, Div, Form, Input, Label } from './MoviesPage.styled';
import { useEffect, useState } from 'react';
import { getSearch } from 'myApi/api';
import Home from 'components/Home';

const MoviesPage = () => {
  const [query, setQuery] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const value = searchParam.get('search') || '';

  

  useEffect(() => {
    console.log('query', query);
    if (value) {
      setSearchParam({value});

      const fetchSearch = async () => {
        try {
          const arr = await getSearch(value);
          setQuery(arr);
        } catch (e) {
          console.log('warn: ' + e);
        }
      };
      fetchSearch();
    }
  }, [query, setSearchParam,value]);

  const handleSubmit = e => {
    e.preventDefault();
    const targetValue = e.target[0].value;
    // setQuery(targetValue);
    setSearchParam({search:targetValue});
  };
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
            required
          />
        </Label>
        <Button type="submit">search 👆</Button>
      </Form>
    </Div>
    <Home movies={query}/>
    </>
 

  );
};

export default MoviesPage;
