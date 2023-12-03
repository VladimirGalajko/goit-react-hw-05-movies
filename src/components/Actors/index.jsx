import { ActorList, ActorListItem, ActorsName, Img } from './Actors.styled';

const Actors = ({ cast }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const URL = 'https://image.tmdb.org/t/p/original'
  return (
    <ActorList>
      {cast.map(({ profile_path, name, id,character }) => (
        <ActorListItem key={id}>
          <Img
            src={
              profile_path
                ? `${URL}${profile_path}`
                :  defaultImg 
            }
            alt={name}
            width={200}
          />
          <ActorsName>{name}</ActorsName>
          <ActorsName>Character: {character}</ActorsName>
        </ActorListItem>
      ))}
    </ActorList>
  );
};

export default Actors;
