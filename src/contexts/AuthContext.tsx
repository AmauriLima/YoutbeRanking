import {
  createContext, ReactNode, useCallback, useEffect, useState,
} from 'react';

import { firebase, auth } from '@services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
}

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

  const signOut = useCallback(async () => {
    try {
      await firebase.auth().signOut();
      setUser(undefined);
    } catch (err) {
      // console.log(err);
    }
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const response = await auth.signInWithPopup(provider);
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

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
