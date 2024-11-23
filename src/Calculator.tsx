import React, { useReducer } from 'react';

type ActionType =
  | { type: 'ADD_DIGIT'; digit: string }
  | { type: 'CHOOSE_OPERATION'; operation: string }
  | { type: 'CLEAR' }
  | { type: 'DELETE_DIGIT' }
  | { type: 'EVALUATE' }
  | { type: 'SET_OPERAND'; payload: string }; 

interface CalculatorState {
  currentOperand: string;
  previousOperand: string | null;
  operation: string | null;
}

const reducer = (state: CalculatorState, action: ActionType): CalculatorState => {
  switch (action.type) {
    case 'ADD_DIGIT':
      if (action.digit === '0' && state.currentOperand === '0') return state;
      return { ...state, currentOperand: `${state.currentOperand || ''}${action.digit}` };

    case 'SET_OPERAND': 
      return { ...state, currentOperand: action.payload };

    case 'CHOOSE_OPERATION':
      if (!state.currentOperand && !state.previousOperand) return state;
      if (!state.previousOperand) {
        return {
          ...state,
          operation: action.operation,
          previousOperand: state.currentOperand,
          currentOperand: '',
        };
      }
      return {
        ...state,
        operation: action.operation,
        previousOperand: evaluate(state),
        currentOperand: '',
      };

    case 'CLEAR':
      return { currentOperand: '', previousOperand: null, operation: null };

    case 'DELETE_DIGIT':
      return { ...state, currentOperand: state.currentOperand.slice(0, -1) };

    case 'EVALUATE':
      if (!state.operation || !state.currentOperand || !state.previousOperand) return state;
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };

    default:
      return state;
  }
};

const evaluate = (state: CalculatorState): string => {
  const prev = parseFloat(state.previousOperand || '0');
  const curr = parseFloat(state.currentOperand || '0');
  if (isNaN(prev) || isNaN(curr)) return '';
  switch (state.operation) {
    case '+':
      return (prev + curr).toString();
    case '-':
      return (prev - curr).toString();
    case '*':
      return (prev * curr).toString();
    case '/':
      return curr !== 0 ? (prev / curr).toString() : 'Error';
    default:
      return '';
  }
};

const Calculator: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentOperand: '',
    previousOperand: null,
    operation: null,
  });

  return (
    <div>
      {/* Display */}
      <div>
        <div>{state.previousOperand} {state.operation}</div>
        <div>{state.currentOperand}</div>
      </div>

      {/* Input-fält */}
      <input
        type="text"
        value={state.currentOperand}
        onChange={(e) => dispatch({ type: 'SET_OPERAND', payload: e.target.value })}
        placeholder="Skriv här..."
      />

      {/* Knappar */}
      <div>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>AC</button>
        <button onClick={() => dispatch({ type: 'DELETE_DIGIT' })}>DEL</button>
        <button onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operation: '/' })}>÷</button>
        <button onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operation: '*' })}>×</button>
        <button onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operation: '-' })}>-</button>
        <button onClick={() => dispatch({ type: 'CHOOSE_OPERATION', operation: '+' })}>+</button>
        <button onClick={() => dispatch({ type: 'EVALUATE' })}>=</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => dispatch({ type: 'ADD_DIGIT', digit: num.toString() })}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
