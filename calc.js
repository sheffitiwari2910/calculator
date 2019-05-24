import React from 'react';
import {connect} from 'react-redux';
import {calculate as calculateAction} from './helpers';
import './calculator.scss';
import Display from './display/display';
import Keypad from './keypad/keypad';

export default function Calculator1(total,next,operation) {

  return (
    <div className="calculator">
      <Display value={next || total || '0'}/>
      <Keypad onClick={() => calculateAction()}/>
  );
}

function mapStateToProps(state) {

  return
  {
    total : state.total,
    next: state.next,
    operation: state.operation
  }

}

function mapDispatchToProps(dispatch) {
  return {
    calculateAction: (state, buttonName) => dispatch(calculateAction(state, buttonName))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator1);
