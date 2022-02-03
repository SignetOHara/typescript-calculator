import { StyledDisplay } from './styles';

interface Props {
  value: string;
  id: string;
}

export const Display = ({ value, id }: Props) => {
  return <StyledDisplay id={id}>{value}</StyledDisplay>;
};
