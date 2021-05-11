import Badge from "react-bootstrap/Badge";
/////////////////////////////////////////
import React from "react";
import "./home.css";

////
////
////
////

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

////
////
////
////
////
////
////
function Jumbo() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}
////
////
////
////

function TextD() {
  return (
    <div>
      <h1>
        Example heading h1 <Badge variant="secondary">New</Badge>
      </h1>
      <h2>
        Example heading h2<Badge variant="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge variant="secondary">New</Badge>
      </h3>
      <h4>
        Example heading h3<Badge variant="secondary">New</Badge>
      </h4>
      <h5>
        Example heading h4<Badge variant="secondary">New</Badge>
      </h5>
      <h6>
        Example heading h5<Badge variant="secondary">New</Badge>
      </h6>
    </div>
  );
}

////
////
////
////

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="https://www.dpinformation.me">Resume</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Contact me ...</Nav.Link>
          <NavDropdown title="Download" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">from my github</NavDropdown.Item>
            <NavDropdown.Item href="#">from here .zip</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

////
////
////
////
////

function Heading() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple bootstrap application built following a Pluralsight
        guide.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}

////
////
////
////

const Home = () => {
  return (
    <div className="container">
      <Jumbo />

      <TextD />

      <NavBar />
      <Heading />
    </div>
  );
};

export default Home;
