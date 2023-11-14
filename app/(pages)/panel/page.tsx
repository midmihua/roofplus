"use client";

import { AuthContext } from "@/app/context/auth/authContext";
import Panel from "@/app/ui/app/pages/panel/panel";
import styles from "@/app/ui/app/pages/panel/panel.module.css";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const PanelPage = () => {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  if (!currentUser) router.push("/login");

  return (
    <div className={styles.container}>
      <Panel />
    </div>
  );
};

export default PanelPage;
