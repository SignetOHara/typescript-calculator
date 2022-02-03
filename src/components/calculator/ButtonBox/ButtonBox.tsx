import { StyledButtonBox } from './styles';

interface Props {
  children: React.ReactNode;
}

export const ButtonBox = ({ children }: Props) => {
  return <StyledButtonBox>{children}</StyledButtonBox>;
};
