import "./Wish.css";
import PropTypes from "prop-types";

export default function Wish(props) {
  const { title, desc, budget, weblinks, isAcquired } = props.details;

  return (
    <div className="wish">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="budget">
        <span>From: {budget?.from}</span>
        <span>To: {budget?.to}</span>
      </div>
      <div className="weblinks">
        {(weblinks ?? []).map((link, index) => (
          <u key={index}>{link}</u>
        ))}
      </div>
      <div className="acquired">{isAcquired}</div>
    </div>
  );
}

Wish.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    budget: PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
    }),
    weblinks: PropTypes.arrayOf(PropTypes.string.isRequired),
    isAcquired: PropTypes.bool,
  }).isRequired,
};
