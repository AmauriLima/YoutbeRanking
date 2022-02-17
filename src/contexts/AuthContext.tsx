import {
  createContext, ReactNode, useCallback, useEffect, useState,
} from 'react';

import AuthService from '@services/AuthService';
import { User } from '@services/AuthService/DTO';
import { auth } from '@services/utils/firebaseClient';

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userData) => {
      if (userData) {
        const { displayName, photoURL, uid } = userData;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from GoogleAccount.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      const response = await AuthService.signInWithGoogle();
      if (response.user) {
        const { displayName, photoURL, uid } = response.user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from GoogleAccount.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    } catch (err) {
      // console.log(err);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      AuthService.signOut();
      setUser(undefined);
    } catch (err) {
      // console.log(err);
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
