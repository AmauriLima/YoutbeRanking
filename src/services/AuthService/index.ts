import { firebase, auth } from '../utils/firebaseClient';
import { CreateUser, UserLogin } from './DTO';

class AuthService {
  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const response = await auth.signInWithPopup(provider);
    return response;
  }

  async createUserWithEmailAndPassword({ email, password }: CreateUser) {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    return user;
  }

  async signInWithEmailAndPassword({ email, password }: UserLogin) {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    return user;
  }

  async signOut() {
    await auth.signOut();
  }
}

export default new AuthService();
