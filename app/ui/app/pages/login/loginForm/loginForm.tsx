"use client";

import { STATIC_CONTENT } from "@/app/constants/staticContent";
import { AuthContext } from "@/app/context/auth/authContext";
import { auth, firebaseErrorMapper } from "@/app/lib/firebase";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { CiLogin } from "react-icons/ci";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const { dispatch } = useContext(AuthContext);
  const [errMessage, setErrMessage] = useState<String | null>(null);
  const router = useRouter();

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    setErrMessage(null);

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        e.target[0].value,
        e.target[1].value
      );

      dispatch({ type: "LOGIN", payload: result.user });
      e.target.reset();

      router.push("/panel");
    } catch (error) {
      setErrMessage(firebaseErrorMapper(error as Error | FirebaseError));
    }
  };

  return (
    <section className={styles.container}>
      <span className={styles.title}>{STATIC_CONTENT.forms.login.title}</span>
      <form
        className={styles.form}
        autoComplete="on"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder={STATIC_CONTENT.forms.login.username}
          name="email"
          size={30}
          required
        />
        <input
          type="password"
          placeholder={STATIC_CONTENT.forms.login.password}
          name="password"
          size={30}
          required
        />
        <button type="submit">
          <CiLogin />
          {STATIC_CONTENT.forms.login.button}
        </button>
      </form>
      {errMessage && <span className={styles.warning}>{errMessage}</span>}
    </section>
  );
};

export default LoginForm;
