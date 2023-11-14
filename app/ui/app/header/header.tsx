import Image from "next/image";
import Link from "next/link";
import Contacts from "./contacts/contacts";
import styles from "./header.module.css";
import LogoutIcon from "./logout/logout";
import Navbar from "./navbar/navbar";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href={"/"}>
          <Image
            src={"/logo_300.png"}
            alt="Company Logo"
            width={220}
            height={176}
            className={styles.logo}
          />
        </Link>
      </div>

      <div className={styles.rightContent}>
        <Contacts />
        <LogoutIcon />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
