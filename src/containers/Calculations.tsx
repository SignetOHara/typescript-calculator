import { useReducer } from 'react';
import { Calculator } from './Calculator';
import { buttons } from '../data/buttons';
import { Button, Operator } from '../lib/types';
import { reducer, initialState } from '../reducers/reducer';

export const Calculations = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (e.currentTarget.id) {
      case 'clear':
        clearClickHandler();
        break;
      case 'equals':
        equalsClickHandler();
        break;
      case 'divide':
      case 'multiply':
      case 'add':
      case 'subtract':
        operatorClickHandler(e);
        break;
      default:
        operandClickHandler(e);
        break;
    }
  };

  const operandClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch({
      type: 'add-digit',
      payload: e.currentTarget.innerHTML,
    });
  };

  const clearClickHandler = () => {
    dispatch({
      type: 'clear',
    });
  };

  const operatorClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch({
      type: 'choose-operation',
      payload: e.currentTarget.innerHTML as Operator,
    });
  };

  const equalsClickHandler = () => {
    dispatch({
      type: 'evaluate',
    });
  };

  let operationDisplay;
  if (state.operation) {
    operationDisplay = state.operation;
  } else {
    operationDisplay = '';
  }

  return (
    <Calculator
      clickHandler={clickHandler}
      buttons={buttons as Button[]}
      display={state?.currentOperand}
      calculation={`${state?.previousOperand} ${operationDisplay}`}
    />
  );
};
