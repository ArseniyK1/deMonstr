import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import styles from "./CardList.module.css";

import cardImgOne from "../assets/card1.jpg";
import cardImgTwo from "../assets/card2.jpg";
import cardImgThree from "../assets/card3.jpg";
import cardImg4 from "../assets/card4.jpg";

const CARDS_INFO = [
  {
    id: 1,
    description:
      "Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году..",
    area: "Общество",
    image: cardImgOne,
  },
  {
    id: 2,
    description:
      "Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший...",
    area: "Спорт",
    image: cardImgTwo,
  },
  {
    id: 3,
    description:
      "Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России...",
    area: "Экономика",
    image: cardImgThree,
  },
  {
    id: 4,
    description:
      "Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас...",
    area: "Общество",
    image: cardImg4,
  },
];

const CardList = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const extractedTitles = data.map((item) => item.title);
        setTitles(extractedTitles);
      });
  }, []);

  return (
    <div className={styles.cards}>
      {CARDS_INFO.map((card, index) => (
        <Cards
          key={card.id}
          title={titles[index]}
          description={card.description}
          area={card.area}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardList;
