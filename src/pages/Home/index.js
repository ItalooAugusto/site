import React from 'react';
import './styles.css';
import Menu from '../Menu';
import Main from '../Main';
import Footer from '../Footer';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';


export default function Home() {
  return (
    <>
      <Menu />
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <hr>
      </hr>
      <Main />
      <hr></hr>
      <Footer />
    </>

  );
}
