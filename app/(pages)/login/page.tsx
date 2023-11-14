"use client";

import { AuthContext } from "@/app/context/auth/authContext";
import styles from "@/app/ui/app/pages/login/login.module.css";
import LoginForm from "@/app/ui/app/pages/login/loginForm/loginForm";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const LoginPage = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (currentUser) router.push("/panel");

  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
