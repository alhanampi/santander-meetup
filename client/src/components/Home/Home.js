import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Beer from "../../assets/beer2.png";
import { Link } from "react-router-dom";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <Container className="mt-5 home" fluid>
        <Row className="homeRow">
          <Col>
            <h2> Bienvenido a nuestra app de meetups</h2>
            <h3 className="mb-5">Registrate o logueate, y vas a poder organizar tus eventos</h3>
            <Button className="login">
              <Link to="login" className="link">
                Ya tengo cuenta
              </Link>
            </Button>

            <Button className="register">
              <Link to="register" className="link">
                Soy un nuevo usuario
              </Link>
            </Button>
          </Col>
          <Col>
            <Image src={Beer} className="loginImg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
