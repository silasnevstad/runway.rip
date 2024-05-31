import { auth } from '@/libs/firebase/config';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// export async function onAuthStateChanged(callback) {
//   return onAuthStateChanged(auth, callback);
// }

export async function signUpWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function loginWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return signOut(auth);
}