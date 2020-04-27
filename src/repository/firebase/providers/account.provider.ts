import { currentUser } from "../init";

export default class FirebaseAccountProvider {
    static getEmailAddress = async () => currentUser().email;
}