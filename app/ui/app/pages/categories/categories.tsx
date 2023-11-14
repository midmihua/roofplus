import styles from "./categories.module.css";
import CategoryItem from "./categoryItem/categoryItem";

const Categories = () => {
  return (
    <aside className={styles.container}>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </aside>
  );
};

export default Categories;
