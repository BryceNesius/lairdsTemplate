import { FirebaseAuthProvider } from "./firebase/providers/auth.provider";
import FirebaseAccountProvider from "./firebase/providers/account.provider";

/**
 * REPOSITORY PATTERN
 * A repository pattern is a layer between the actual database calls and the initial call.
 * The value of this pattern is that if you plan on switching database providers in the future, you can easily do so with
 * less pain than if not. Try to keep any logic regarding a standardized return value in here.
 */
export module Repository {
    export class AuthProvider {

        static signUpWithEmailAndPassword = (email: string, password: string, verify: string) => {
            if (!(verify === password)) throw Error(`Passwords don't match!`);
            return FirebaseAuthProvider.signUpWithEmailAndPassword(email, password);
        }

        //This is a simple email sign in call that just forwards the call for now.
        static signInWithEmailAndPassword = (email: string, password: string) =>
            FirebaseAuthProvider.signInWithEmailAndPassword(email, password);

        static resetPasswordWithEmail = (email: string) => FirebaseAuthProvider.resetPasswordWithEmail(email);


        static refreshSignIn = (): Promise<any> => FirebaseAuthProvider.refreshSignIn();

    }

    export class AccountProvider {
        static getEmailAddress = () => FirebaseAccountProvider.getEmailAddress();
    }
}