import { Wrapper } from '../components/calculator/Wrapper/Wrapper';
import { Display } from '../components/calculator/Display/Display';
import { FormulaDisplay } from '../components/calculator/FormulaDisplay/FormulaDisplay';
import { ButtonBox } from '../components/calculator/ButtonBox/ButtonBox';
import {
  Button,
  EqualsButton,
  ClearButton,
} from '../components/calculator/Button/Button';
import { Button as button } from '../lib/types';

interface Props {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttons: button[];
  display: string;
  calculation: string;
}

export const Calculator = ({
  clickHandler,
  buttons,
  display,
  calculation,
}: Props) => {
  return (
    <Wrapper>
      <FormulaDisplay value={calculation} />
      <Display id="display" value={display} />
      <ButtonBox>
        <ClearButton id="clear" value="C" clickHandler={clickHandler} />
        {buttons.map((button) => (
          <Button
            key={button.id}
            id={button.id}
            value={button.value}
            clickHandler={clickHandler}
          />
        ))}
        <EqualsButton id="equals" value="=" clickHandler={clickHandler} />
      </ButtonBox>
    </Wrapper>
  );
};
