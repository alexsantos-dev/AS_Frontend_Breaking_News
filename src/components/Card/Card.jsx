import PropTypes from "prop-types";
import { CardContainer } from "./Card.styles";
import { CardBodyText, CardBodyImg, CardBodyIcons } from "./Card.styles";
import { CardBodyContainer } from "./Card.styles";

export function Card({ news }) {
  return (
    <CardContainer>
      <CardBodyContainer>
        <CardBodyText>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
          <hr />
          <CardBodyIcons>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{news.likes}</span>
            </div>
            <div>
              <i className="bi bi-chat"></i>
              <span>{news.comments}</span>
            </div>
          </CardBodyIcons>
        </CardBodyText>
        <CardBodyImg>
          <img src={news.image} alt="Banner da notícia" />
        </CardBodyImg>
      </CardBodyContainer>
    </CardContainer>
  );
}

Card.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
};
