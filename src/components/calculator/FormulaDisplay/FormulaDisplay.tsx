import { StyledFormulaDisplay } from './styles';

interface Props {
  value: string;
}

export const FormulaDisplay = ({ value }: Props) => {
  return <StyledFormulaDisplay>{value}</StyledFormulaDisplay>;
};
