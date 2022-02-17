import { FcGoogle } from 'react-icons/fc';
import { FiX } from 'react-icons/fi';

import { useAuth } from '@hooks/useAuth';

import { Button } from './styles';

export function SignInButton() {
  const { user, signInWithGoogle, signOut } = useAuth();

  return (
    <Button type="button" onClick={!user ? signInWithGoogle : signOut}>
      <FcGoogle />
      {user ? user.name : 'Entrar com google'}
      {user && <FiX className="closeIcon" color="737380" />}
    </Button>
  );
}
