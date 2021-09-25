import React from "react";
import "./Auth.scss";
import { Card, Container, Row, Col } from "react-bootstrap";

const AdminScreen = () => {
  return (
    <Container fluid>
      <h2>Próximos eventos</h2>
      <Row>
        <Col xs={12} md={5} lg={3}>
          <Card>
            <Card.Header as="h4">Nombre: Juan Pérez</Card.Header>
            <Card.Text>Cantidad de invitados: 55</Card.Text>
            <Card.Text>Clima previsto: 26º</Card.Text>
            <Card.Text>Cantidad de 6-pack: 18</Card.Text>
            <Card.Text>Email: Juan@gmail.com</Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;
