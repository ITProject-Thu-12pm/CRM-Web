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
  //   Card,
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
  const { trello_summary, birthdays, events} = DashboardData;

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

          {/* <Container>
            <Row>
                <Col sm={8}>    <BirthdayCard /></Col>
                <Col sm={4}>    <TimeCard /></Col>
            </Row>
        </Container> */}

          <Grid container spacing={3}>
            <Grid item xs={9}>
              <BirthdayCard birthdays={birthdays} />
              {/* <ContactList /> */}
            </Grid>

            <Grid item xs={3}>
              <TimeCard />
            </Grid>
          </Grid>

          {/* <div className="contacts-cards">
            <CardGroup>
              <ContactSummary
                total_contacts={contact_summary.total_contacts}
                total_groups={contact_summary.total_groups}
              />

              <CalendarSummary
                upcoming_events={calendar_summary.upcoming_events}
                today_events={calendar_summary.today_events}
              />
            </CardGroup>
          </div> */}

          {/* <Card.Img
        variant="top"
        src="https://i.etsystatic.com/33670728/r/il/f35ecc/3584410702/il_1588xN.3584410702_44w8.jpg"
        className="birthday-img mx-auto d-block"
      /> */}

          <div className="contacts-cards">
            {/* <CardBirthday />  */}
            {/* <CalendarEvents /> */}
            <EventCard events={events}/>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventList({ id, title, date, time }) {
  return (
    <>
    {/* <Divider variant="middle"/> */}
    <Divider variant="middle" component="li" />
    <Grid container spacing={3} alignItems="center" className="event-list" >
      {/* <Grid item xs={2}>
          <CardMedia
            component="img"
            height="60"
            image="https://via.placeholder.com/80" // You can replace this with the actual image URL
            alt="Event"
          />
        </Grid> */}
      <Grid item xs={6}>
        <Typography variant="h6" className="event-list-title">
          {/* <Link to="/calendar/"> */}
            {title}
            {/* </Link> */}
        </Typography>

        {/* <Typography variant="body2">{description}</Typography> */}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" className="event-list-date">{date}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body1" className="event-list-time">{time}</Typography>
      </Grid>
      {/* <Grid item xs={12}>
          <Divider />
        </Grid> */}
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
        {/* <Divider variant="middle" /> */}
      </Card.Body>

      {/* <List>
        <EventList
          title="Meeting with Jane"
          date="10/10/2023"
          time="10:30 AM - 11:30 AM"
        />
      </List> */}

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
            event // 2. Map through birthdays
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
    // <List
    //   sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper"}}
    //   className="card-radius"
    // >
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
    // </List>
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

      {/* <ContactList /> */}
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
            contact // 2. Map through birthdays
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

function CalendarEvents() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Calendar Events</Typography>
        <Grid
          container
          spacing={3}
          alignItems="center"
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Select fullWidth value="Last 30 days" variant="outlined">
              <MenuItem value="Last 30 days">Last 30 days</MenuItem>
              <MenuItem value="Last 60 days">Last 60 days</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <EventCard
          title="Meeting with Jane"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          date="10/10/2023"
          time="10:30 AM - 11:30 AM"
        />
        <EventCard
          title="Meeting with Jane"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          date="10/10/2023"
          time="10:30 AM - 11:30 AM"
        />
        <EventCard
          title="Meeting with Jane"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          date="10/10/2023"
          time="10:30 AM - 11:30 AM"
        />
      </CardContent>
    </Card>
  );
}
// function ContactCard() {
//   const [dateTime, setDateTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDateTime(new Date());
//     }, 1000); // Update every second

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, []);

//   return (
//     <Card>
//       <Typography variant="h6">
//         Today's Date: {dateTime.toLocaleDateString()}
//       </Typography>
//       <Typography variant="body1">
//         Current Time: {dateTime.toLocaleTimeString()}
//       </Typography>
//     </Card>
//   );
// }

// function ContactCard() {
//   return (
//     <Card className="card-radius">
//       <Card.Body>
//         <Card.Title>Total Contacts</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// }

function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Greeting */}
      <Grid item xs={12}>
        <Typography variant="h4">Hello Evano 👋</Typography>
      </Grid>

      {/* Task Cards */}
      <Grid item xs={4}>
        <Card>
          <Card.Body>
            <Card.Title>Todo</Card.Title>
            {/* Content */}
          </Card.Body>
        </Card>
      </Grid>
      {/* Repeat for In-Progress and Completed */}

      {/* Upcoming Birthdays */}
      <Grid item xs={6}>
        <Card>
          <Card.Body>
            <Card.Title>Upcoming Birthdays</Card.Title>
            {/* List of Birthdays */}
          </Card.Body>
        </Card>
      </Grid>

      {/* Total Contacts */}
      <Grid item xs={6}>
        <Card>
          <Card.Body>
            <Card.Title>Total Contacts</Card.Title>
            {/* Pie Chart or relevant component */}
          </Card.Body>
        </Card>
      </Grid>

      {/* Calendar Events */}
      <Grid item xs={12}>
        <Typography variant="h5">Calendar Events</Typography>
        <TextField label="Search" variant="outlined" />
        {/* List of events */}
      </Grid>
    </Grid>
  );
}

// function ContactSummary({ total_contacts, total_groups }) {
//   return (
//     <>
//       <Card style={{ width: "18rem" }}>
//         <Link to="/contacts">
//           <Card.Img
//             class="contact-img"
//             variant="top"
//             src="https://static.vecteezy.com/system/resources/previews/005/545/335/original/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
//           />
//         </Link>
//         <Card.Body>
//           <Card.Title>Contact summary</Card.Title>
//           <Card.Text>Total Contacts: {total_contacts}</Card.Text>
//           <Card.Text>Total Groups: {total_groups}</Card.Text>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

// function CalendarSummary({ upcoming_events, today_events }) {
//   return (
//     <>
//       <Card style={{ width: "18rem" }}>
//         <Link to="/contacts">
//           <Card.Img
//             class="calendar-img"
//             variant="top"
//             src="https://static.vecteezy.com/system/resources/previews/022/123/333/original/calendar-icon-schedule-sign-date-icon-symbol-illustration-vector.jpg"
//           />
//         </Link>
//         <Card.Body>
//           {/* <Card.Title>Total Contacts: {total_contacts}</Card.Title>
//           <Card.Title>Total Groups:   {total_groups}</Card.Title> */}
//           <Card.Title>Calendar Summary</Card.Title>
//           <Card.Text>Upcoming Events: {upcoming_events}</Card.Text>
//           <Card.Text>Today's Event: {today_events}</Card.Text>
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

function CardBirthday() {
  return (
    <Card>
      <Card.Img
        variant="top"
        // src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/happy-birthday.jpg?raw=true"
        src="https://i.etsystatic.com/33670728/r/il/f35ecc/3584410702/il_1588xN.3584410702_44w8.jpg"
        class="birthday-img mx-auto d-block"
      />
      <Card.Body>
        <Card.Title>
          <h2>
            Cheers to This week's Stars!&#x1F31F;
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-stars "
              viewBox="0 0 16 16"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
            </svg> */}
          </h2>
        </Card.Title>
        <AlignItemsList />
        {/* <Card.Text></Card.Text> */}
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
         <ListGroup.Item>John</ListGroup.Item>
        <ListGroup.Item>
          <image
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
          ></image>
          Neil
        </ListGroup.Item>
        <ListGroup.Item>Bill</ListGroup.Item>
        <ListGroup.Item>Chloe</ListGroup.Item>
      </ListGroup> */}
      {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
    </Card>
  );
}

function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Link to="/contacts/1">
            <Avatar src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/avatar.png?raw=true" />
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary="Neil Yan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                21 years old
              </Typography>
              {/* {" — on Oct 20 2023"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/avatar.png?raw=true" />
        </ListItemAvatar>
        <ListItemText
          primary="Bill Yang"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                20 years old
              </Typography>
              {/* {" — on Oct 22 2023"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="https://github.com/ITProject-Thu-12pm/Assets/blob/main/avatar.png?raw=true" />
        </ListItemAvatar>
        <ListItemText
          primary="Chloe Tao"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                22 years old
              </Typography>
              {/* {' — on Oct 23 2023'} */}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
// function BirthdayCard({ date, contacts }) {
//     return (
//         <div className="birthday-card">
//             <h2>{date}</h2>
//             <div className="contacts">
//                 {contacts.map(contact => (
//                     <div className="contact" key={contact.name}>
//                         <img src={contact.image} alt={contact.name} />
//                         <p>{contact.name}</p>
//                         <a href={`tel:${contact.phone}`}>Call</a> | <a href={`mailto:${contact.email}`}>Email</a>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

export default LoadDashboardPage;
