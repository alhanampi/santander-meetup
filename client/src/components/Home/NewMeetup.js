import React, { useState, useContext, useEffect } from "react";
import { Form, Container, Alert } from "react-bootstrap";
import "./Home.scss";
import MeetupContext from "../../context/meetupContext/meetupContext";
import { beerAmountCount } from "../../utils/utilBirras";
import {
  getToday,
  getFortnight,
  mediumConvertIsoToDays,
  daysFromToday,
} from "../../utils/utilDate";

const NewMeetup = () => {
  const { addMeetup, getTemp, temp } = useContext(MeetupContext);

  const [degrees, setDegrees] = useState(0);
  const [beerAmount, setBeerAmount] = useState(0);
  const [guestsAmount, setGuestsAmount] = useState(0);
  const [daysFromNow, setDaysFromNow] = useState(0);
  const [newMeet, setNewMeet] = useState({
    date: "",
    guests: "",
    email: "",
    climate: "",
    beerTotal: "",
  });
  const [done, setDone] = useState(false);

  const { date, guests, email, beer, climate } = newMeet;

  //send how many days from not, to capture the climate api object for that particular date
  useEffect(() => {
    const today = new Date(Date.now());
    const meetupDay = new Date(date);
    const diff = daysFromToday(today, meetupDay) + 1;
    setDaysFromNow(diff);
    getTemp(daysFromNow);
    setDegrees(temp);
  }, [date]);

  useEffect(() => {
    setGuestsAmount(guests);
  }, [guests]);

  //calculate required amount of beer
  useEffect(() => {
    let totalBeer = beerAmountCount(degrees, guests);
    setBeerAmount(totalBeer);
  }, [degrees, guests, beer, climate]);

  const handleChange = (e) => {
    setNewMeet({ ...newMeet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //save data in a temporal object
    const newMeetTemp = {
      date: date,
      guests: guestsAmount,
      email: email,
      climate: degrees,
      beerTotal: beerAmount,
    };
    //set it in useState and send it to backend
    setNewMeet(newMeetTemp);
    addMeetup(newMeetTemp);
    setNewMeet({
      date: "",
      guests: "",
      email: "",
      climate: "",
      beerTotal: "",
    });

    //display a done alert for a short period of time
    setDone(true);
    setTimeout(() => {
      setDone(false);
    }, 3000);
  };
 
  return (
    <Container fluid className="p-3">
      <h3 className="mb-5">Creá un nuevo evento!</h3>

      <Form action="post">
        <Form.Group className="mb-3">
          <Form.Label>
            Elegí cuándo querés hacer el evento, y vamos a calcular cuánta
            cerveza necesitás!
            <Form.Control
              size="lg"
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
              min={getToday()}
              max={getFortnight()}
              required
            />
          </Form.Label>
        </Form.Group>
        {date && (
          <p>
            Buena fecha! El <strong> {mediumConvertIsoToDays(date)}</strong> va
            a hacer {temp} grados!
          </p>
        )}

        <Form.Group className="mb-3">
          <Form.Label>
            Cuánta gente vas a invitar?
            <Form.Control
              size="lg"
              type="number"
              name="guests"
              value={guests}
              onChange={handleChange}
              placeholder="todos tus amigos!"
              min={1}
              required
            />
          </Form.Label>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Dejanos un mail para avisarte novedades!
            <Form.Control
              size="lg"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="juan@gmail.com"
              required
            />
          </Form.Label>
        </Form.Group>

        {beerAmount != 0 && (
          <Alert variant="dark">
            <Alert.Heading>Ya casi estás!</Alert.Heading>
            <p>
              Vamos a prepararte <strong>{beerAmount}</strong> 6-pack de cerveza
              para tus {guestsAmount} amigos! No te preocupes, nosotros nos
              ocupamos de todo por vos.
            </p>
          </Alert>
        )}

        <button className="newMeet mt-3" onClick={handleSubmit}>
          Creá tu evento!
        </button>

        {done && (
          <Alert variant="danger" className="mt-3">
            <Alert.Heading>Listo!</Alert.Heading>
            <p>
              Tu evento ya esta registrado. No te preocupes, nosotros nos vamos
              a encargar de todo!
            </p>
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default NewMeetup;
