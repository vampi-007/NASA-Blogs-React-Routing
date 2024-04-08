import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Blackbox = () => {
  const product = {
    id: 96,
    brand: 'Uniworth',
    name: 'WALL STREET',
    fit: 'Svart',
    type: 'Formal Shirt',
    sku: 'FS1006-1SF',
    stock: 23,
    price: 3495,
    color: ['Grey', 'Skyblue', 'White', 'Off White'],
    sizes: [14, 15],
    fits: ['Tailored Smart Fit', 'Classic Fit'],
    image: 'path/to/product-image.jpg',
    details: 'Dress up sophisticatedly with this formal shirt from the house of Uniworth. It is an essential addition to a man wardrobe offering versatility in his formal wear. Team up this shirt with formal trouser and walk in anywhere confidently with a refreshing and tasteful look.',
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center g-4">
        <Col xs={12} md={6} lg={4}>
          <img src={product.image} alt={`${product.brand} ${product.name}`} className="img-fluid" />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h1>{product.brand} {product.name}</h1>
          <h2>{product.fit}</h2>
          <h3>{product.type}</h3>
          <h4>SKU: {product.sku}</h4>
          <h4>In Stock: {product.stock}</h4>
          <h4>Price: Rs. {product.price}</h4>
          <Form.Group className="mb-3" controlId="colorSelect">
            <Form.Label>Color</Form.Label>
            <Form.Select>
              {product.color.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="fitSelect">
            <Form.Label>Fit</Form.Label>
            <Form.Select>
              {product.fits.map((fit) => (
                <option key={fit} value={fit}>
                  {fit}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="sizeSelect">
            <Form.Label>Size</Form.Label>
            <Form.Select>
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary">ADD TO CART</Button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h3>Product Details</h3>
          <p>{product.details}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blackbox;