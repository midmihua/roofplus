"use client";

import { AuthContext } from "@/app/context/auth/authContext";
import { useContext } from "react";
import styles from "./panel.module.css";

const Panel = () => {
  const { currentUser } = useContext(AuthContext);

  return <div className={styles.container}>{currentUser?.email}</div>;
};

export default Panel;
