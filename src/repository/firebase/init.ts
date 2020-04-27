import { auth, initializeApp } from 'firebase'

import 'firebase/auth';
import 'firebase/firestore';

import { BehaviorSubject } from 'rxjs';

import { firebaseConfig } from './config';
//  Initialization
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
auth().setPersistence(auth.Auth.Persistence.SESSION);
auth().useDeviceLanguage();
//  The current logged in user... null if not logged in
export const currentUser = () => auth().currentUser;

/**
 *  FIREBASE REFERENCES : this is where the references to firebase firestore collections goes. Initially creating a default 'Account' ref,
 */
const doc = (collection, id) => firestore.collection(collection).doc(id);
export const accountRef = (id) => doc('Account', id);

/**
 * Recaptcha - Necessary for phone login
 */
export const currentRecaptcha = new BehaviorSubject(null);
export const generateRecaptchaVerifier = () => currentRecaptcha.next(new auth.RecaptchaVerifier('recaptcha-verifier', {
    size: 'invisible',
    callback: function (response) {
    }
}));
