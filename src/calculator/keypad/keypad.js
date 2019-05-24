import Button from './button/button';
import React from 'react';
import PropTypes from 'prop-types';
import './keypad.scss';

export default function Keypad(props) {

  return (
    <div className='keypad'>
      <div>
        <Button name='C' clickHandler={props.clickHandler}/>
        <Button name='+/-' clickHandler={props.clickHandler}/>
        <Button name='%' clickHandler={props.clickHandler}/>
        <Button name='÷' clickHandler={props.clickHandler} orange/>
      </div>
      <div>
        <Button name='7' clickHandler={props.clickHandler}/>
        <Button name='8' clickHandler={props.clickHandler}/>
        <Button name='9' clickHandler={props.clickHandler}/>
        <Button name='x' clickHandler={props.clickHandler} orange/>
      </div>
      <div>
        <Button name='4' clickHandler={props.clickHandler}/>
        <Button name='5' clickHandler={props.clickHandler}/>
        <Button name='6' clickHandler={props.clickHandler}/>
        <Button name='-' clickHandler={props.clickHandler} orange/>
      </div>
      <div>
        <Button name='1' clickHandler={props.clickHandler}/>
        <Button name='2' clickHandler={props.clickHandler}/>
        <Button name='3' clickHandler={props.clickHandler}/>
        <Button name='+' clickHandler={props.clickHandler} orange/>
      </div>
      <div>
        <Button name='0' clickHandler={props.clickHandler} wide/>
        <Button name='.' clickHandler={props.clickHandler}/>
        <Button name='=' clickHandler={props.clickHandler} orange/>
      </div>
    </div>
  );
}
Keypad.propTypes = {
  clickHandler: PropTypes.func,
};