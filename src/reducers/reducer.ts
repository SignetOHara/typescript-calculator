import { Action, State } from '../lib/types';

export const initialState = {
  currentOperand: '0',
  previousOperand: '0',
  operation: null,
  overwrite: false,
  negative: false,
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'add-digit':
      if (state.negative) {
        const num = +action.payload;
        const negNum = -Math.abs(num);
        return {
          ...state,
          currentOperand: negNum.toString(),
          negative: false,
        };
      }
      if (state.overwrite)
        return {
          ...state,
          overwrite: false,
          currentOperand: action.payload,
        };
      if (action.payload === '0' && state.currentOperand === '0') return state;
      if (action.payload === '.' && state.currentOperand.includes('.'))
        return state;
      if (action.payload === '.' && state.currentOperand === '0') {
        return {
          ...state,
          currentOperand: `0${action.payload}`,
        };
      }
      if (state.currentOperand === '0') {
        return {
          ...state,
          currentOperand: action.payload,
        };
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${action.payload}`,
      };
    case 'clear':
      return initialState;
    case 'choose-operation':
      if (state.negative && action.payload !== '-') {
        return {
          ...state,
          operation: action.payload,
          negative: false,
        };
      }
      if (state.currentOperand === '0' && state.previousOperand === '0')
        return { ...state };
      if (state.currentOperand === '0' && action.payload === '-') {
        return {
          ...state,
          negative: true,
        };
      }
      if (state.currentOperand === '0') {
        return {
          ...state,
          operation: action.payload,
        };
      }
      if (state.previousOperand === '0') {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: action.payload,
          currentOperand: '0',
        };
      }
      return {
        ...state,
        operation: action.payload,
        previousOperand: evaluate(state),
        currentOperand: '0',
        overwrite: true,
      };
    case 'evaluate':
      if (
        state.operation === null ||
        state.currentOperand === '0' ||
        state.previousOperand === '0'
      )
        return state;
      return {
        ...state,
        overwrite: true,
        previousOperand: '0',
        currentOperand: evaluate(state),
        operation: null,
      };
  }
};

const evaluate = (state: State) => {
  const prev = parseFloat(state.previousOperand);
  const current = parseFloat(state.currentOperand);

  if (isNaN(prev) || isNaN(current)) return '';

  let computation: string | number = '';
  switch (state.operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case 'X':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      break;
  }

  return computation.toString();
};
