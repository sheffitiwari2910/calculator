import React from 'react';
import Display from './display/display';
import Keypad from './keypad/keypad';
import './calculator.scss';
import {calculate} from './helpers';


export default class Calculator extends React.Component {

  state = {
    total: null,
    next: null,
    operation: null,
  };


  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };


  render() {
    const {next, total} = this.state;
    return (

      <div className="calculator">
        <Display value={next || total || '0'}/>
        <Keypad clickHandler={this.handleClick}/>
      </div>
    );
  }
}