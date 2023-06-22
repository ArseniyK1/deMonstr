import React from "react";
import styles from "./Cards.module.css";
import { Button, Card, CardImg } from "react-bootstrap";
import cardImg from "../assets/card1.jpg";

const Cards = ({ title, description, area, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-label"]}>
        <div>{area}</div>
        <div>сегодня в 18:30</div>
      </div>
      <div className={styles["card-body"]}>
        <div className={styles["card-body__nodesc"]}>
          <img src={image} className={styles["card-image"]} />
          <p className={styles.title}>{title}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
