import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <Container id="contact" className="py-5">
      <h2>Kontaktieren Sie uns</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Ihr Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email-Adresse</Form.Label>
          <Form.Control type="email" placeholder="Ihre E-Mail" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Nachricht</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ihre Nachricht" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Senden
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
