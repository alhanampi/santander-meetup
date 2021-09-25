import React from "react";
import { convertIsoToDays } from "../../../utils/utilDate";
import { Card } from "react-bootstrap";
import "./Meet.scss";

const Meet = ({ index, meets }) => {
  const { email, guests, climate, beerTotal, date } = meets;
  return (
    <>
      <Card index={index} className="meetCard">
        <Card.Header className="cardHeader">
          <Card.Title>Anfitrión: {email}</Card.Title>
        </Card.Header>
        <Card.Body className="p-2">
          <Card.Text className="cardDate">
            <strong>Fecha: </strong>
            {convertIsoToDays(date)}
          </Card.Text>
          <Card.Text>
            <strong>Cantidad de invitados: </strong>
            {guests} personas
          </Card.Text>
          <Card.Text>
            <strong>Clima previsto: </strong>
            {climate} º
          </Card.Text>
          <Card.Text>
            <strong>Cantidad de 6-pack: </strong>
            {beerTotal}
          </Card.Text>
        </Card.Body>
        <Card.Footer>Te esperamos!</Card.Footer>
      </Card>
    </>
  );
};

export default Meet;
