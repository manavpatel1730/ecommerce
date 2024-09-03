import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Allproducts = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setData(res.products));
  }, []);

  useEffect(() => {
    if (search !== "") {
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res => res.json())
        .then(res => setSearchedData(res.products));
    }
  }, [search]);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const displayedData = search !== "" ? searchedData : data;

  return (
    <>
      <Form.Control 
        size="lg" 
        className='bg-dark text-white' 
        type="text" 
        placeholder="Search products..."  
        onChange={(e) => setSearch(e.target.value)} 
      />
      <Row>
        {displayedData.map((res, index) => (
          <Col md={3} key={index} style={{ marginTop: "15px" }}>
            <Card 
              style={{ width: '18rem', boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
              onClick={() => handleCardClick(res.id)}
            >
              <Card.Img variant="top" src={res.images[0]} alt={res.title} width={500} height={300} />
              <Card.Body>
                <Card.Title>{res.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush"></ListGroup>
              <Card.Body>
                <Card.Link href="#">Price: {res.price} $</Card.Link>
                <Card.Link href="#">Available stock: {res.stock}</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Allproducts;
