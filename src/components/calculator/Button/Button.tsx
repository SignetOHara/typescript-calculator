import { StyledButton, StyledEqualsButton, StyledClearButton } from './styles';
import { Operator, Equals, Clear } from '../../../lib/types';

interface Props {
  id: string;
  value: Operator | Equals | Clear;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ id, value, clickHandler }: Props) => {
  return (
    <StyledButton id={id} onClick={(e) => clickHandler(e)}>
      {value}
    </StyledButton>
  );
};

export const EqualsButton = ({ id, value, clickHandler }: Props) => {
  return (
    <StyledEqualsButton id={id} onClick={clickHandler}>
      {value}
    </StyledEqualsButton>
  );
};

export const ClearButton = ({ id, value, clickHandler }: Props) => {
  return (
    <StyledClearButton id={id} onClick={clickHandler}>
      {value}
    </StyledClearButton>
  );
};
