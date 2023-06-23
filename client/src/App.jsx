import SideBar from "./components/SideBar";
import CardList from "./pages/CardList";
import down from "../src/assets/down.svg"

import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState('По умолчанию');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.app}>
      <SideBar />
      <div>
        <div className={styles.contacts}>
          <h1>Все контакты</h1>
            <div className={styles.dropdown}>
                <div className={styles.placeholder} onClick={() => setIsOpen(!isOpen)}>
                   <div>{selectedOption}</div>
                   <span><img src={down} alt="logo" /></span> 
                </div>
                {isOpen && (
                    <ul className={styles.options}>
                        <li onClick={() => handleOptionClick('По умолчанию')}>По умолчанию</li>
                        <li onClick={() => handleOptionClick('Сначала новые')}>Сначала новые</li>
                        <li onClick={() => handleOptionClick('Сначала старые')}>Сначала старые</li>
                     </ul>
                )}
            </div>
        </div>
        <CardList />
      </div>
    </div>
  );
}

export default App;
