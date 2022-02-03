import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.operand};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 1.5rem;
  cursor: pointer;

  &:nth-child(15) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.operandHover};
  }
`;

export const StyledEqualsButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.accent};
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 6;

  :hover {
    background-color: ${(props) => props.theme.colors.accentHover};
  }
`;

export const StyledClearButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.cancel};
  grid-column-start: 1;
  grid-column-end: 3;

  :hover {
    background-color: ${(props) => props.theme.colors.cancelHover};
  }
`;
