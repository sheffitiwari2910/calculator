const BASE = 'CALCULATOR1_';

export const action = {
  calculate: BASE + 'CALCULATE'

};

export function calculate(total,next,opeartion) {
  return{
    type: action.calculate,
    total: total,
    next: next,
    operation: operation

  };
}
