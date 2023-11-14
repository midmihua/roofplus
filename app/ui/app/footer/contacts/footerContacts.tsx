import { STATIC_CONTENT } from "@/app/constants/staticContent";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import styles from "./footerContacts.module.css";

const FooterContacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>
          {STATIC_CONTENT.titles.askQuestion}
        </span>
        <div className={styles.item}>
          <CiPhone className={styles.icon} />
          <span className={styles.text}>{STATIC_CONTENT.phone1}</span>
        </div>
        <div className={styles.item}>
          <CiPhone className={styles.icon} />
          <span className={styles.text}>{STATIC_CONTENT.phone2}</span>
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.title}>{STATIC_CONTENT.mainAddress.title}</span>
        <div className={styles.item}>
          <CiLocationOn className={styles.icon} />
          <span className={styles.text}>
            {STATIC_CONTENT.mainAddress.address}
          </span>
        </div>
      </div>

      <div className={styles.content}>
        <span className={styles.title}>
          {STATIC_CONTENT.secondAddress.title}
        </span>
        <div className={styles.item}>
          <CiLocationOn className={styles.icon} />
          <span className={styles.text}>
            {STATIC_CONTENT.secondAddress.address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
