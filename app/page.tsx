import styles from "@/app/ui/app/home.module.css";
import BreadcrumbsMenu from "./ui/app/breadcrumbsMenu/breadcrumbsMenu";
import MainContent from "./ui/app/mainContent/mainContent";
import Categories from "./ui/app/pages/categories/categories";
import Search from "./ui/app/search/search";

const HomePage = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.topSection}>
        <Search />
        <BreadcrumbsMenu />
      </section>
      <section className={styles.mainSection}>
        <Categories />
        <MainContent />
      </section>
    </main>
  );
};

export default HomePage;
