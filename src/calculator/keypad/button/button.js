import React from 'react';
import classNames from 'classnames';
import './button.scss';
import {calculate as calculateAction} from '../../calculator-actions';
import {connect} from 'react-redux';

function Button({wide, orange, name, handleClick}) {
  const buttonContainerClasses = classNames('button-container', {
    'button-container--wide': wide
  });

  const buttonClasses = classNames('button-container__button', {
    'button-container__button--orange': orange
  });

  return (
    <div className={buttonContainerClasses}>
      <button className={buttonClasses} onClick={() => handleClick(name)}>{name}</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (buttonName) => dispatch(calculateAction(buttonName))
  }

}

export default connect(null, mapDispatchToProps)(Button);