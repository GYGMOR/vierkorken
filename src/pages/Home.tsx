import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container className="text-center py-5">
      <h1>Willkommen bei Vierkorken</h1>
      <p>Entdecken Sie unsere Auswahl an erlesenen Weinen.</p>
      <Button href="#products" variant="primary">Alle Weine ansehen</Button>
    </Container>
  );
}

export default Home;
