import PropTypes from "prop-types";
import { TextLimit } from "../Limit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./Card.styles";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
          </CardHeader>

          <CardFooter>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{props.likes?.length}</span>
            </section>

            <section>
              <i className="bi bi-chat"></i>
              <span>{props.comments?.length}</span>
            </section>
          </CardFooter>
        </div>

        <img src={props.banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}

Card.propTypes = {
  top: PropTypes.bool,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  likes: PropTypes.array,
  comments: PropTypes.array,
  banner: PropTypes.string.isRequired,
};
