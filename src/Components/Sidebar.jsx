import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategory = (category) => {
    onCategorySelect(category); // Pass the selected category up to the parent
  };

  const menuStyle = {
    width: '300px',
    position: 'fixed',
    top: '60px',
    left: 0,
    height: '100vh',
    backgroundColor: '#333',
    paddingTop: '20px',
    overflowY: 'auto',
  };

  const menuItemStyle = {
    color: 'white',
    padding: '12px',
    fontSize: '18px',
  };

  const activeMenuItemStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  return (
    <div style={menuStyle}>
      <Nav defaultActiveKey="/allproducts" className="flex-column">
        <Nav.Link
          as={Link}
          to="/allproducts"
          style={{ ...menuItemStyle, ...activeMenuItemStyle }}
        >
          All Products
        </Nav.Link>

        {categories.map((category, index) => (
          <Nav.Link
            key={index}
            as={Link}
            to="/selectedcategory"
            style={menuItemStyle}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#575757')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
            onClick={() => handleCategory(category.url)}
          >
            {category.name}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;



























// import React, { useEffect, useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// // import GetCategoryList from './GetCategoryList';

// const Sidebar = () => {
//   const[categories,setCategories]=useState([]);
//   useEffect(() => {
//     fetch('https://dummyjson.com/products/categories')
//       .then(res => res.json())
//       .then(data => setCategories(data));
//   }, []);

//   const handlecategory = (url)=>{
//     console.log(url)
   
//   }

//   const menuStyle = {
//     width: '300px', // Adjusted to a smaller width for more space
//     position: 'fixed',
//     top: '60px', // Make sure the navbar height is considered
//     left: 0,
//     height: '100vh', // Use full viewport height
//     backgroundColor: '#333',
//     paddingTop: '20px',
//     overflowY: 'auto', // Add scroll if the menu is too long
//   };

//   const linkStyle = {
//     color: 'white',
//     textDecoration: 'none',
//   };

//   const menuItemStyle = {
//     color: 'white',
//     padding: '12px',
//     fontSize: '18px',
//   };

//   const menuItemHoverStyle = {
//     backgroundColor: '#575757',
//   };

//   const activeMenuItemStyle = {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//   };

//   return (
//     <div style={menuStyle}>
//       <Nav defaultActiveKey="/allproducts" className="flex-column">
//         <Nav.Link
//           as={Link}
//           to="/allproducts"
//           style={{ ...menuItemStyle, ...activeMenuItemStyle }}
//         >
//           All Products
//         </Nav.Link>

// {
//   categories.map((res)=>{
//     return(
//     <Nav.Link

//    to="/selectedcategory"
//       style={menuItemStyle}
//     onMouseEnter={(e) => (e.target.style.backgroundColor = '#575757')}
//     onMouseLeave={(e) => (e.target.style.backgroundColor = '')} 
//      onClick={()=>handlecategory(res.url)}
//     >{res.name} </Nav.Link>
//     )
//   })
// }

      
        
//       </Nav>
//       {/* <GetCategoryList/> */}
//     </div>
//   );
// };

// export default Sidebar;
