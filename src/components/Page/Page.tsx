import { StyledPage } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
  return <StyledPage>{children}</StyledPage>;
};
