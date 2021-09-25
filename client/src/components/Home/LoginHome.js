import React, {useState, useContext, useEffect} from "react";
import { Tab, Tabs } from "react-bootstrap";
import IncomingMeetups from "./IncomingMeetups";
import NewMeetup from "./NewMeetup";
import "./Home.scss"
import AuthContext from "../../context/authContext/authContext";

const LoginHome = () => {
  const { loadUser } = useContext(AuthContext);

    useEffect(() => {
      loadUser()
      console.log('loadUser:', loadUser)
    }, [])
    
    //bootstrap boilerplate for the tabs
    const [key, setKey] = useState('home');

  return (
    <div className="p-3">
      <h2 className="mt-3"> Bienvenido!</h2>
      <h3 className="mt-3">Qué querés hacer hoy?</h3>

      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 mt-5"
      >
        <Tab eventKey="home" title="Nueva Meetup" className="meetTab">
          <NewMeetup />
        </Tab>
        <Tab eventKey="profile" title="Ver mis meetups" className="meetTab">
          <IncomingMeetups />
        </Tab>
      </Tabs>
    </div>
  );
};

export default LoginHome;
