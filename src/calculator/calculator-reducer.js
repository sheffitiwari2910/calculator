import { actions } from './calculator-actions';
import {calculate as calculateHelper} from './helpers';

const initialState = {
  total: null,
  next: null,
  operation: null,
};

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case actions.calculate:
      return handleCalculate(state,action);

    default:
      return state;

  }
}

function handleCalculate(state,{buttonName}) {
  const nextState = calculateHelper(state, buttonName);
  return {...state, ...nextState};
}