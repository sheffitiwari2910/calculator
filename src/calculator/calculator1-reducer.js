import { action } from './calculator1-actions';

const initialState = {
  total: null,
  next: null,
  operation: null,
};

export default function reducer (state=initialState, action) {

  switch (action.type) {
    case action.calculate:
      return handleCalculate(state,action);

    default:
      return state;

  }
}

function handleCalculate(state,action) {
  return{
    total: state.total+ action.total ,
    next:state.next+ action.next,
    operation: state.operation+ action.operation
  }
}