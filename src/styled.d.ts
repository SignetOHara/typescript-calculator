import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;

    colors: {
      background: string;
      calculator: string;
      operators: string;
      operatorsHover: string;
      operand: string;
      operandHover: string;
      accent: string;
      accentHover: string;
      cancel: string;
      cancelHover: string;
      white: string;
      black: string;
    };
  }
}
