import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export const loginFormAction = async (formData: FormData) => {
  "use server";

  const { email, password } = Object.fromEntries(formData);

  signInWithEmailAndPassword(auth, email.toString(), password.toString())
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.error(error);
    });
};
