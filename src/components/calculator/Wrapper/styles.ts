import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  height: 34rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.colors.calculator};
  padding: 1rem;
`;
