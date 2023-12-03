
import { Li, Ul, P, H3 } from './Reviews.styled';

const Reviews = ({reviews}) => {

return reviews?.length === 0 ? (
    <h3>Reviews missing</h3>
  ) : (
    <Ul>
      {reviews.map(({ id, author, content }) => (
        <Li key={id}>
          <H3>
            <span>Author:</span> {author}
          </H3>
          <P>{content}</P>
        </Li>
      ))}
    </Ul>
  );
};

export default Reviews;
