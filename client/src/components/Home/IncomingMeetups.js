import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
import MeetupContext from "../../context/meetupContext/meetupContext";
import Meet from "./MeetCard/Meet";

const IncomingMeetups = () => {
  const { meetups, getMeetups } = useContext(MeetupContext);
  console.log("meetups:", meetups);

  useEffect(() => {
    getMeetups();
  }, []);

  return (
    <Container fluid>
      <h3>Estos son tus próximos eventos!</h3>
      <Row className="mt-5">
        {meetups.length === 0 ? (
          <h4>Todavía no tenés eventos!</h4>
        ) : (
          <>
            {meetups.map((meets, index) => (
              <Col xs={12} md={5} lg={3} className="mb-3" index={index}>
                <Meet meets={meets} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default IncomingMeetups;
