import React from 'react';
import PropTypes from 'prop-types';
import './display.scss';
import {connect} from 'react-redux';


function Display({value}) {
  return (
    <div className="display">
      <div>{value}</div>
    </div>
  );

}

Display.propTypes = {
  value: PropTypes.string,
};

function mapStateToProps({next,total})
{
  return {
    value: (next || total  || '0')
  }
}

export default connect(mapStateToProps)(Display);