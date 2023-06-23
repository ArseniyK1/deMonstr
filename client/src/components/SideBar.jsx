import styles from "./SideBar.module.css";
import logoHead from "../assets/Logo.svg";

const SideBar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles["sidebar-head"]}>
        <div className={styles["sidebar-head__logo"]}>
          <img src={logoHead} alt="logo" />
          <p>Вариант 4</p>
        </div>
        <input type="text" name="search" placeholder="Поиск" />
        <p className={styles.news}>Все новости</p>
        <div className={styles["sidebar-head__news"]}>
          <p>Спорт</p>
          <p>новости</p>
          <p>Экономика</p>
        </div>
      </div>
      <div className={styles["sidebar-foot"]}>
        <p>© Вариант 4. Киселев Арсений, группа АС-20-1</p>
      </div>
    </section>
  );
};

export default SideBar;
