import React from 'react';
import { Container } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container id="about" className="py-5">
      <h2>Über uns</h2>
      <p>
        Vierkorken wurde aus Leidenschaft für Wein gegründet. Wir glauben, dass jeder Wein eine Geschichte erzählt und wir möchten diese Geschichten mit Ihnen teilen. 
        Unsere Mission ist es, Ihnen eine sorgfältig ausgewählte Kollektion von Weinen aus den besten Anbaugebieten der Welt anzubieten.
      </p>
    </Container>
  );
}

export default About;
