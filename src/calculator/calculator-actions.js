const BASE = 'CALCULATOR_';
export const actions = {
  calculate: BASE + 'CALCULATE'
};
export function calculate(buttonName) {
  return {
    type: actions.calculate,
    buttonName: buttonName
  };
}