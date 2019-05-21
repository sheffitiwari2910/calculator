import Big from 'big.js';

function isNumber(item) {
  return /[0-9]+/.test(item);
}

function isOperator(button) {
  return '+-x÷'.includes(button);
}


function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || '0');
  switch (operation) {
    default: return "Error".toString();
    case '+':
      return one.plus(two).toString();
    case '-':
      return one.minus(two).toString();
    case 'x':
      return one.times(two).toString();
    case '÷':
      return one.div(two).toString();

  }

}


export function calculate(state, buttonName) {
  if (buttonName === 'C') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && state.next === '0') {
      return {};
    }

    if (state.operation) {
      if (state.next) {
        return {next: state.next + buttonName};
      }
      return {next: buttonName};
    }

    if (state.next) {
      return {
        next: state.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '%') {
    if (state.operation && state.next) {
      const result = operate(state.total, state.next, state.operation);
      return {
        total: Big(result)
          .div(Big('100'))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (state.next) {
      return {
        next: Big(state.next)
          .div(Big('100'))
          .toString(),
      };
    }
    return {};
  }

  if (buttonName === '.') {
    if (state.next) {

      if (state.next.includes('.')) {
        return {};
      }
      return {next: state.next + '.'};
    }
    return {next: '0.'};
  }

  if (buttonName === '=') {
    if (state.next && state.operation) {
      return {
        total: operate(state.total, state.next, state.operation),
        next: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (buttonName === '+/-') {
    if (state.next) {
      return {next: (-1 * parseFloat(state.next)).toString()};
    }
    if (state.total) {
      return {total: (-1 * parseFloat(state.total)).toString()};
    }
    return {};
  }

  if (state.operation && !isOperator(buttonName)) {
    return {
      total: operate(state.total, state.next, state.operation),
      next: null,
      operation: buttonName,
    };
  }


  if (!state.next) {
    return {operation: buttonName};
  }


  return {
    total: state.next,
    next: null,
    operation: buttonName,
  };
}