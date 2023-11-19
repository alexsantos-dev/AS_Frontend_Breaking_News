import PropTypes from "prop-types";
import { CardContainer } from "./Card.styles";
import { CardBodyText, CardBodyImg, CardBodyIcons } from "./Card.styles";
import { CardBodyContainer } from "./Card.styles";
import { TextLimit } from "../TextLimit/TextLimit";

export function Card(props) {
  return (
    <CardContainer>
      <CardBodyContainer>
        <CardBodyText>
          <h2>{props.title}</h2>
          <TextLimit text={props.text} limit={150} />
          <hr />
          <CardBodyIcons>
            <div>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes}</span>
            </div>
            <div>
              <i className="bi bi-chat"></i>
              <span>{props.comments}</span>
            </div>
          </CardBodyIcons>
        </CardBodyText>
        <CardBodyImg>
          <img src={props.banner} alt="Banner da notícia" />
        </CardBodyImg>
      </CardBodyContainer>
    </CardContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};
