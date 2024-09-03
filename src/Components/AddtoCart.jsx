import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const AddtoCart = () => {

    const allCart=useSelector((state)=>state.addtocart.cart)

    console.log(allCart);
    



  return (
    <>


    <Row>
      {
        allCart.map((allCart)=>{
          return(
            <Col md={3}  style={{ marginTop: "15px" }}>
            <Card 
            style={{ width: '18rem', boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
            onClick={() => handleCardClick(allCart.id)}
            >
            <Card.Img variant="top" src={allCart.thumbnail} alt={allCart.title} width={500} height={300} />
            <Card.Body>
              <Card.Title>{allCart.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush"></ListGroup>
            <Card.Body>
              <Card.Link href="#">Price: {allCart.price} $</Card.Link>
              <Card.Link href="#">Available stock: {allCart.stock}</Card.Link>
            </Card.Body>
          </Card>
</Col>
          )
})
}
      </Row>

      
    </>
  )
}

export default AddtoCart
