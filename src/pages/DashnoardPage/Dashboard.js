import React, { useState, useEffect } from "react";
import SideBar from "../../components/Bar.js";
import TrelloSummary from "../../components/Dashboard/TrelloSummary.js";
import Greetings from "../../components/Contacts/Greeting";
import DashboardData from "./DashboardData.json";
import ContactTable from "../../components/Contacts/ContactTable.js";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CardGroup from "react-bootstrap/CardGroup";
import {
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoadDashboardPage() {
  /* trello board */
  const { trello_summary, birthdays, events } = DashboardData;

  return (
    <div className="parent">
      <div className="div1">
        <SideBar />
      </div>
      <div className="div2 right--side-bg">
        <div className="container-contact">
          <div className="">
            <Greetings username="Evano" />
          </div>
          <div className="contacts-cards">
            {/* todo: back-end link here */}
            <TrelloSummary
              todo={trello_summary.total_todo}
              in_progress={trello_summary.total_in_progress}
              completed={trello_summary.total_completed}
            />
          </div>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={9}>
              <BirthdayCard birthdays={birthdays} />
            </Grid>

            <Grid item xs={12} sm={12} md={3}>
              <TimeCard />
            </Grid>
          </Grid>

          <div className="contacts-cards">
            <EventCard events={events} />
          </div>
        </div>
      </div>
    </div>
  );
}

function EventList({ id, title, date, time }) {
  return (
    <>
      <Divider variant="middle" component="li" />
      <Grid container spacing={3} alignItems="center" className="event-list">
        <Grid item xs={6}>
          <Typography variant="h6" className="event-list-title">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" className="event-list-date">
            {date}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" className="event-list-time">
            {time}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function EventCard({ events }) {
  return (
    <Card className="card-radius">
      <Card.Body>
        <Card.Title className="event-card-title">Recent Events</Card.Title>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6" className="event-col-title">
              Events
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" className="event-col-date">
              Date
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6" className="event-col-time">
              Time
            </Typography>
          </Grid>
        </Grid>
      </Card.Body>

      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          maxHeight: 235,
          overflowY: "auto",
        }}
        className="card-radius"
      >
        {events.map(
          (
            event
          ) => (
            <EventList key={event.id} {...event} />
          )
        )}
      </List>
    </Card>
  );
}

function ContactList({ id, name, age, dob, avatar }) {
  return (
    <>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Link to={`/contacts/${id}`}>
            <Avatar src={avatar} />
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {age} years old
              </Typography>
              {" — on " + dob}
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
}

function BirthdayCard({ birthdays }) {
  return (
    <Card className="card-radius">
      <Card.Img
        variant="top"
        src="https://i.etsystatic.com/33670728/r/il/f35ecc/3584410702/il_1588xN.3584410702_44w8.jpg"
        className="birthday-img mx-auto d-block"
      />
      <Card.Body>
        <Card.Title className="birthday-text">Let's celebrate!</Card.Title>
      </Card.Body>

      
      <List
        sx={{
          width: "100%",
          maxWidth: "100%",
          bgcolor: "background.paper",
          maxHeight: 235,
          overflowY: "auto",
        }}
        className="card-radius"
      >
        {birthdays.map(
          (
            contact
          ) => (
            <ContactList key={contact.id} {...contact} />
          )
        )}
      </List>
    </Card>
  );
}

function TimeCard() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="time-card">
      <Typography variant="h6" style={{ marginBottom: "8px", color: "#333" }}>
        Today's Date: {dateTime.toLocaleDateString()}
      </Typography>
      <Typography variant="body1" style={{ color: "#666" }}>
        Current Time: {dateTime.toLocaleTimeString()}
      </Typography>
    </Card>
  );
}

export default LoadDashboardPage;
