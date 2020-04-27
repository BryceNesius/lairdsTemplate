/**
 * FIrebase call code goes here.
 */

import { auth } from "firebase";
import { currentUser } from "../init";
import { ROUTE_LOAD_STATE } from "../../../components/load.component";
import { resolve } from "dns";

export class FirebaseAuthProvider {

    // Be sure to enable email authentication under firebase project settings!
    static signUpWithEmailAndPassword = async (email: string, password: string) => {
        const credential = await auth().createUserWithEmailAndPassword(email, password);
        if (!credential) throw Error('error signing up');

        //TODO: Reducer???
        await currentUser().sendEmailVerification();
        return credential;
    }

    static signInWithEmailAndPassword = async (email: string, password: string) => {
        let credential = await auth().signInWithEmailAndPassword(email, password);
        if (!credential) throw Error('could not get credentials');

        //TODO: Create a reducer???
        return credential;
    }

    static resetPasswordWithEmail = async (email: string) => {
        await auth().sendPasswordResetEmail(email);
    }

    static refreshSignIn = (): Promise<any> =>
        new Promise<any>((resolve, reject) =>
            auth().onAuthStateChanged(function (user) {
                if (user != null) {
                    resolve(true);
                }
            }));

}