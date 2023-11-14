import { STATIC_CONTENT } from "@/app/constants/staticContent";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import styles from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <CiPhone className={styles.icon} />
        <span className={styles.text}>{STATIC_CONTENT.phone1}</span>
      </div>
      <div className={styles.phone}>
        <CiPhone className={styles.icon} />
        <span className={styles.text}>{STATIC_CONTENT.phone2}</span>
      </div>
      <div className={styles.address}>
        <CiLocationOn className={styles.icon} />
        <span className={styles.textSm}>
          {STATIC_CONTENT.mainAddress.address}
        </span>
      </div>
    </div>
  );
};

export default Contacts;
