import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ children, onClick }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
