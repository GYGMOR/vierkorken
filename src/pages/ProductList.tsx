import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import wines from '../data/wines.json';

const ProductList: React.FC = () => {
  return (
    <Container id="products" className="py-5">
      <h2>Unser Sortiment</h2>
      <Row>
        {wines.map(wine => (
          <Col key={wine.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={`/images/${wine.image}`} alt={wine.name} />
              <Card.Body>
                <Card.Title>{wine.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{wine.year} - {wine.type}</Card.Subtitle>
                <Card.Text>{wine.description}</Card.Text>
                <Card.Text className="font-weight-bold">CHF {wine.price.toFixed(2)}</Card.Text>
                <Button variant="primary">In den Warenkorb</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
