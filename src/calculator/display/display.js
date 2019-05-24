import React from 'react';
import PropTypes from 'prop-types';
import './display.scss';


export default function Display(props) {
  return (
    <div className="display">
      <div>{props.value}</div>
    </div>
  );

}

Display.propTypes = {
  value: PropTypes.string,
};