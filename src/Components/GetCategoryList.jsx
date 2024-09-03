import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GetCategoryList = ({ url }) => {
  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (url){
      console.log(url)
      fetch(url)
        .then(res => res.json())
        .then(data => setCategoryData(data.products));
    }
  }, [url]);

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };
  if (!categoryData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <Container>
      <Row>
        {categoryData.map((product, index) => (
          <Col md={3} key={index} style={{ marginTop: "15px" }}>
            <Card 
              style={{ width: '18rem', boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
              onClick={() => handleCardClick(product.id)}
            >
              <Card.Img variant="top" src={product.images[0]} alt={product.title} width={500} height={300} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: {product.price} $</ListGroup.Item>
                <ListGroup.Item>Available stock: {product.stock}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GetCategoryList;




























// import React, { useDebugValue, useEffect, useState } from 'react';
// import { Card, Col, Container, Dropdown, DropdownButton, ListGroup, Row } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';

// const GetCategoryList = (props) => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [categoryData, setCategoryData] = useState([]);
//   const [showcategories, setshowcategories]=useState([]);
// console.log("hello")
//   const navigate = useNavigate()
// // useEffect(()=>{
// //   {[
// //     "smartphones",
    
// //   ].map((res)=>(
// // <>
// // {
// //    fetch(`https://dummyjson.com/products/category/${res}`)
// //    .then(res => res.json())
// //    .then(data => setshowcategories(data.products))
// // }

// // </>
// //   ))
      
   
// //   }
// //   },[])

//   // Fetch categories on component mount
//   // useEffect(() => {
//   //   fetch('https://dummyjson.com/products/categories')
//   //     .then(res => res.json())
//   //     .then(data => setCategories(data));
//   // }, []);

//   // Fetch data based on selected category
//   useEffect(() => {
//     if (props.url) {
//       fetch(props.url)
//         .then(res => res.json())
//         .then(res=>setCategoryData(res.products));
//     }
//   }, );

//   // const handleCategorySelect = (category) => {
//   //   setSelectedCategory(category); // Set the selected category

//   // };
//   const handleCardClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <Container>
//       {/* <div className="mb-2">
//         <DropdownButton title="Categories">
//           {categories.map((category, index) => (
//             <Dropdown.Item key={index} >
//               <p  onClick={() => handleCategorySelect(category.url)}>
//                 {category.name}
//               </p>
//             </Dropdown.Item>
//           ))}
//         </DropdownButton>
//       </div> */}


//       {/* {
//         !selectedCategory &&(
//           <Row>
     
//           {showcategories.map((res,index) => {
//             return(
//               <>
//                 <Col md={3} key={index} style={{ marginTop: "15px" }}>
//             <Card 
//               style={{ width: '18rem', boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
//               onClick={() => handleCardClick(res.id)}
//             >
//               <Card.Img variant="top" src={res.images[0]} alt={res.title} width={500} height={300} />
//               <Card.Body>
//                 <Card.Title>{res.title}</Card.Title>
//               </Card.Body>
//               <ListGroup className="list-group-flush"></ListGroup>
//               <Card.Body>
//                 <Card.Link href="#">Price: {res.price} $</Card.Link>
//                 <Card.Link href="#">Available stock: {res.stock}</Card.Link>
//               </Card.Body>
//             </Card>
//           </Col>
//               </>
//             )
//           }
          
//           )}
  
//       </Row>

//         )
//       } */}

//       {/* Render the fetched data based on the selected category */}
//       {selectedCategory && (
//         <Row>
     
//             {categoryData.map((res,index) => {
//               return(
//                 <>
//                   <Col md={3} key={index} style={{ marginTop: "15px" }}>
//               <Card 
//                 style={{ width: '18rem', boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} 
//                 onClick={() => handleCardClick(res.id)}
//               >
//                 <Card.Img variant="top" src={res.images[0]} alt={res.title} width={500} height={300} />
//                 <Card.Body>
//                   <Card.Title>{res.title}</Card.Title>
//                 </Card.Body>
//                 <ListGroup className="list-group-flush"></ListGroup>
//                 <Card.Body>
//                   <Card.Link href="#">Price: {res.price} $</Card.Link>
//                   <Card.Link href="#">Available stock: {res.stock}</Card.Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//                 </>
//               )
//             }
            
//             )}
    
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default GetCategoryList;
































































// // import React, { useEffect, useState } from 'react';
// // import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
// // import { Link } from 'react-router-dom';

// // const GetCategoryList = () => {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     fetch('https://dummyjson.com/products/categories')
// //       .then(res => res.json())
// //       .then(res => setData(res));
// //   }, []);

// //   return (
// //     <Container>
// //       <div className="mb-2">
// //         <DropdownButton title="Categories">
// //           {data.map((category, index) => (
// //             <Dropdown.Item key={index} eventKey={category}>
// //             <Link >  {category.name}</Link>
// //             </Dropdown.Item>
// //           ))}
// //         </DropdownButton>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default GetCategoryList;
