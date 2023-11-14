"use client";

import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
import styles from "./categoryItem.module.css";

const CategoryItem = () => {
  return (
    <div className={styles.container} onClick={() => {}}>
      <Link href={"#"} className={styles.link}>
        <span className={styles.text}>Some category name here</span>
        <CiCircleChevRight />
      </Link>
    </div>
  );
};

export default CategoryItem;
