import Image from "next/image";
import Link from "next/link";
import FooterContacts from "./contacts/footerContacts";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <FooterContacts />
      <div className={styles.logoContainer}>
        <Link href={"/login"}>
          <Image
            src={"/logo_300.png"}
            alt="Company Logo"
            width={100}
            height={80}
            className={styles.logo}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
