import PropTypes from "prop-types";
import { CardContainer } from "./Card.styles";
import { CardBodyText, CardBodyImg, CardBodyIcons } from "./Card.styles";
import { CardBodyContainer } from "./Card.styles";
import { TextLimit } from "../Limit/TextLimit";
import { TitleLimit } from "../Limit/TitleLimit";

export function Card(props) {
  return (
    <CardContainer>
      <CardBodyContainer>
        <CardBodyText>
          <h2>
            {<TitleLimit className="title" title={props.title} limit={30} />}
          </h2>

          <TextLimit className="text" id="text" text={props.text} limit={100} />

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
