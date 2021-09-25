import React, { useEffect, useState, useContext } from "react";
import "./Auth.scss";
import { Form, Container, Row, Col, Image } from "react-bootstrap";
import Beer from "../../assets/beer.jpg";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";

const Login = (props) => {
  const { loginUser, isAuthenticated, error, clearErrors } =
    useContext(AuthContext);

  //check auth
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/user");
    }
  }, [isAuthenticated, props.history]);

  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser({
      email,
      password,
    });
  };

  const handleChange = (e) => {
    setLogUser({ ...logUser, [e.target.name]: e.target.value });
    if (error !== null) {
      clearErrors();
    }
  };

  //capture data:
  const { email, password } = logUser;

  return (
    <Container className="p-3" fluid>
      <h2>En Santander vas a poder organizar tu meetup en minutos!</h2>
      <h3>Entrá a nuestro sitio para organizar tu evento</h3>
      <Row>
        <Col className="loginBox">
          <Form>
            <Form.Group>
              <Form.Label>
                Email
                <Form.Control
                  size="lg"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="juan@gmail.com"
                />
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Password
                <Form.Control
                  size="lg"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="no reveles tu password!"
                />
              </Form.Label>
            </Form.Group>

            <button className="newRegister" onClick={handleSubmit}>
              Loguearse
            </button>

            <p className="mt-5">
        Todavía no te registraste?{" "}
        <Link to="register" className="link">
          Hacelo acá
        </Link>
      </p>
          </Form>

          
        </Col>
        <Col>
          <Image src={Beer} className="loginImg" />
        </Col>
      </Row>


    </Container>
  );
};

export default Login;
