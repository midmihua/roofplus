import { STATIC_CONTENT } from "@/app/constants/staticContent";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href={"/categories"} className={styles.link}>
        {STATIC_CONTENT.menu.categories}
      </Link>
      <Link href={"#"} className={styles.link}>
        {STATIC_CONTENT.menu.interesting}
      </Link>
      <Link href={"/about"} className={styles.link}>
        {STATIC_CONTENT.menu.about}
      </Link>
    </nav>
  );
};

export default Navbar;
