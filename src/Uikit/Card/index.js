import PropTypes from 'prop-types';
import './card.css';

const Card = (props) => {
  const mode = props.status === 'SUCCESS' ? 'card-success' : 'card-delay';
  const className = ['card', mode].join(' ');

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  status: PropTypes.string,
};

Card.defaultProps = {
  status: 'PENDING',
};

export default Card;
