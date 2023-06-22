import CardComponent from "./components/Card";
import Cards from "./components/Cards";
import SideBar from "./components/SideBar";
import CardList from "./pages/CardList";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <SideBar />
      <div>
        <h1>Все контакты</h1>
        <CardList />
      </div>
    </div>
  );
}

export default App;
