"use client";

import { STATIC_CONTENT } from "@/app/constants/staticContent";
import { CiSearch } from "react-icons/ci";
import styles from "./search.module.css";

const Search = () => {
  return (
    <aside className={styles.container}>
      <CiSearch className={styles.icon} />
      <input
        className={styles.search}
        type="text"
        placeholder={STATIC_CONTENT.titles.searchPlaceholder}
        onChange={() => {}}
        size={30}
      />
    </aside>
  );
};

export default Search;
