import React, { useEffect, useState, useContext } from "react";
import "./Auth.scss";
import { Form, Container, Row, Col, Image, Alert } from "react-bootstrap";
import Beer from "../../assets/beer.jpg";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";

const Register = (props) => {
  const { registerUser, isAuthenticated, error, clearErrors, setError } =
    useContext(AuthContext);

  //check auth
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/user");
    }
  }, [isAuthenticated, props.history]);

  const [regUser, setRegUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // capture data
  const { name, email, password, password2 } = regUser;

  const handleChange = (e) => {
    setRegUser({ ...regUser, [e.target.name]: e.target.value });
    if (error !== null) {
      clearErrors();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //check passwords:
    if (password !== password2) {
      setError("Los password no son iguales");
      console.log("pass no coinciden");
    } else {
      registerUser({
        name,
        email,
        password,
      });
    }
  };

  return (
    <Container className="p-3" fluid>
      <h2>En Santander vas a poder organizar tu meetup en minutos!</h2>
      <h3>Nuevo en nuestra app? Registrate</h3>
      <Row>
        <Col className="loginBox">
          <Form action="post">
            <Form.Group className="mb-3">
              <Form.Label>
                Nombre
                <Form.Control
                  size="lg"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Juan Gomez"
                  minLength="5"
                  maxLength="20"
                  required
                />
              </Form.Label>
            </Form.Group>

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
                  pattern="[^@\s]+@[^@\s]+"
                  required
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
                  placeholder="elegí algo bien seguro!"
                  minLength="5"
                  required
                />
              </Form.Label>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Repetí tu password
                <Form.Control
                  size="lg"
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                  placeholder="tu password tiene que coincidir"
                  minLength="5"
                  required
                />
              </Form.Label>
            </Form.Group>

            <Alert variant="dark">
            <p>
              Acordate de poner un mail válido y un password de al menos 5 caracteres.
            </p>
          </Alert>

            <button className="newRegister" onClick={handleSubmit}>
              Registrate
            </button>

            <p className="mt-5">
              Ya tenés cuenta?{" "}
              <Link to="login" className="link">
                Logueate acá
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

export default Register;
