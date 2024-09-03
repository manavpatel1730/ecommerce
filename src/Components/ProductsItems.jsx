import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../slices/AddtocartSlice';

const ProductsItems = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const cart = useSelector((state)=>state.addtocart.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(res=>setData(res));
  }, [id]);

  if (!data) {
    return <div className="text-center mt-5">Loading...</div>;
  }


  return (
    
    <Card style={{padding:"30px",margin:"70px", }}>
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-4" >
          <img src={data.thumbnail}  alt={data.title} className="img-fluid" />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h1>{data.title}</h1>
          <p>{data.brand}</p>
          <p>{data.description}</p>
          <h4>available stocks : {data.stock} </h4>
          <h2>${data.price.toFixed(2)} <span style={{fontSize:"15px"}}><strike>{(data.discountPercentage-10).toFixed(2)} % </strike>{data.discountPercentage} %</span></h2>
          <h6>Category : {data.category}</h6>
          <h3>{data.warrantyInformation}</h3>
          {/* Add to Cart Section */}
          <div className="d-flex align-items-center gap-4 mt-3">
            <button className="btn btn-primary" onClick={()=>dispatch(addtocart(data))}>
             <Link to={`/cart/${data.id}`}> Add to Cart</Link>
              </button>
            {/* <Link to="/allproducts">
            <button className="btn btn-primary"  style={{fontSize:"25px", width:"80px",height:"35px",}} >
              &larr;</button>
              </Link> */}
          </div>
        </div>
      </div>
    </div>
    </Card>
  );
};

export default ProductsItems;




// <Row>
// <Col style={{ marginTop: "15px" }}>
//   <Card style={{ width: '18rem' }}>
//     {data.images && <Card.Img variant="top" src={data.images[0]} alt={data.title} />}
//     <Card.Body>
//       <Card.Title>{data.title}</Card.Title>
//       <Card.Title>Brand: {data.brand}</Card.Title>
//       <Card.Text>{data.description}</Card.Text>
//     </Card.Body>
//     <ListGroup className="list-group-flush">
//       <ListGroup.Item>Warranty: {data.warrantyInformation}</ListGroup.Item>
//       <ListGroup.Item>{data.returnPolicy}</ListGroup.Item>
//     </ListGroup>
//     <Card.Body>
//       <Card.Link href="#">Price: {data.price} $</Card.Link>
//       <Card.Link href="#">Available stock: {data.stock}</Card.Link>
//     </Card.Body>
//   </Card>
// </Col>
// </Row>