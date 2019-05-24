import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';

export default function Button({ wide, orange, name, clickHandler }) {
  const buttonContainerClasses = classNames('button-container', {
    'button-container--wide': wide
  });

  const buttonClasses = classNames('button-container__button', {
      'button-container__button--orange': orange
  });

  return (
    <div className={buttonContainerClasses}>
      <button className={buttonClasses} onClick={() => clickHandler(name)}>{name}</button>
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};