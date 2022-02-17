import { SignInButton } from '@components/SignInButton';

import Logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <nav>
          <a href="/" className="active">Vídeos</a>
          <a href="/">Adicionar vídeo</a>
        </nav>

        <SignInButton />
      </Content>
    </Container>
  );
}
