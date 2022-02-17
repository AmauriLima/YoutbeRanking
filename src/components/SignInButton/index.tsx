import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiX } from 'react-icons/fi';

import { Button } from './styles';

export function SignInButton() {
  const [isUserLoggedIn] = useState<boolean>(false);

  return (
    <Button type="button">
      <FcGoogle />
      {isUserLoggedIn ? 'Amauri Lima' : 'Entrar com google'}
      <FiX className="closeIcon" color="737380" />
    </Button>
  );
}
