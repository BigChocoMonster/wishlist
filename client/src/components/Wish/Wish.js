import { Budget, Description, Links, Title, WishBox } from "./styles";
import PropTypes from "prop-types";

export default function Wish(props) {
  const { title, desc, budget, weblinks, isAcquired } = props.details;

  return (
    <WishBox>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <Budget>
        <p>Price Range</p>
        {budget?.currency}
        {budget?.from} - {budget?.currency}
        {budget?.to}
      </Budget>
      <Links>
        <p>Inspirations</p>
        {(weblinks ?? []).map((link, index) => (
          <div>
            <a href={link} target="_blank" key={index}>
              {link}
            </a>
          </div>
        ))}
      </Links>
      <div className="acquired">{isAcquired}</div>
    </WishBox>
  );
}

Wish.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    budget: PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
    weblinks: PropTypes.arrayOf(PropTypes.string.isRequired),
    isAcquired: PropTypes.bool,
  }).isRequired,
};
