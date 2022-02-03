export type Operator = null | '+' | '-' | 'X' | '/';
export type Equals = '=';
export type Clear = 'C';

export interface Button {
  id: string;
  value: Operator | Clear | Equals;
}

export interface State {
  currentOperand: string;
  previousOperand: string;
  operation: Operator;
  overwrite: boolean;
  negative: boolean;
}

export type Action =
  | { type: 'add-digit'; payload: string }
  | { type: 'choose-operation'; payload: Operator }
  | { type: 'clear' }
  | { type: 'evaluate' };
