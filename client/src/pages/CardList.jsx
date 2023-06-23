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
      "Новая достопримечательность появилась в Ельце. Здесь открыли памятник композитору Тихону Хренникову. В этом году исполняется 110 лет со дня его рождения. Двухтонная скульптура полностью из бронзы. Её создал народный художник СССР и России, президент Российской академии художеств Зураб Церетели. Это первая его работа, установленная в Липецкой области.",
    area: "Общество",
    image: cardImgOne,
  },
  {
    id: 2,
    description:
      "Липецк признан беговой столицей России 2023 года по итогам полумарафона «Забег.рф». В Липецке было 4000 участников забега, которые показали лучший результат в России, набрав 29,34 итоговых зачетных балла. Данный показатель высчитывался исходя из следующих показателей: средней дистанции, преодоленной всеми участниками субъекта, соотношению участников «Забега.рф» к его населению, а также по средней скорости бега. На втором месте оказался Магадан, он набрал 27,45 балла, на третьем — Санкт-Петербург, у него 21,55 балла",
    area: "Спорт",
    image: cardImgTwo,
  },
  {
    id: 3,
    description:
      "Электрокар под маркой EVOLUTE вновь подтвердил звание «Электромобиля № 1» в России по результатам мая 2023 года. На регистрационный учёт в минувшем месяце встало 167 таких электрокаров, что превысило 21% всех регистраций в сегменте электрического транспорта.",
    area: "Экономика",
    image: cardImgThree,
  },
  {
    id: 4,
    description:
      "Губернатор Липецкой области Игорь Артамонов, как и обещал ранее, посетил пункт временного размещения, в котором сейчас находятся жители Шебекинского района Белгородской области. В основном это семьи с детьми. Им предоставлены номера гостиничного типа.",
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
