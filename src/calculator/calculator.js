import React from 'react';
import './calculator.scss';
import Display from './display/display';
import Keypad from './keypad/keypad';

function Calculator() {

  return (
    <div className="calculator">
      <Display/>
      <Keypad />
    </div>
  );
}


export default Calculator;