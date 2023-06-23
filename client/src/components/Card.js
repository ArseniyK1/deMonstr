// import React, { useState } from "react";
// import { Button, Card, CardImg } from "react-bootstrap";

// import prirodaImg from "../assets/priroda.jpg";

// const CardComponent = () => {
//   const [cardTitle, setCardTitle] = useState();
//   const [cardId, setCardId] = useState();

//   const URL = "https://jsonplaceholder.typicode.com/todos";

//   const getTitle = (url) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((body) => setCardTitle(body[0].title));
//   };
//   getTitle(URL);

//   const getId = (url) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((body) => setCardId(body[0].id));
//   };
//   getId(URL);

//   return (
//     <Card style={{ width: "18rem", border: "1px solid red" }}>
//       <CardImg variant="top" src={prirodaImg} style={{ width: "18rem" }} />
//       <Card.Body>
//         <Card.Title>{cardTitle}</Card.Title>
//         <Card.Text>id: {cardId}</Card.Text>
//         <button variant="primary">Go somewhere</button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CardComponent;
