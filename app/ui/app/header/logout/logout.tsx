"use client";

import { STATIC_CONTENT } from "@/app/constants/staticContent";
import { AuthContext } from "@/app/context/auth/authContext";
import { auth } from "@/app/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import styles from "./logout.module.css";

const LogoutIcon = () => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const router = useRouter();

  if (!currentUser) return null;

  const handleLogout = async () => {
    try {
      await signOut(auth);

      dispatch({ type: "LOGOUT", payload: null });
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container} onClick={handleLogout}>
      <CiLogout />
      <span className={styles.text}>{STATIC_CONTENT.forms.logout.button}</span>
    </div>
  );
};

export default LogoutIcon;
