import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Sidebar from './Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Allproducts from './Components/Allproducts';
import ProductsItems from './Components/ProductsItems';
import GetCategoryList from './Components/GetCategoryList';
import { useState } from 'react';
import AddtoCart from './Components/AddtoCart';

function App() {
  const [categoryUrl, setCategoryUrl] = useState('');

  const handleCategorySelect = (url) => {
    setCategoryUrl(url);
  };

  return (
    <>
      {/* Navbar at the top */}
      <NavbarComp />

      {/* Main layout with Sidebar and Content */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar on the left */}
        <Sidebar style={{ width: '300px', backgroundColor: '#333' }} onCategorySelect={handleCategorySelect} />

        {/* Content area on the right */}
        <div style={{ flex: 1, padding: '20px', marginLeft: '300px' }}>
          <Routes>
            <Route path="allproducts" element={<Allproducts />} />
            <Route path="/product/:id" element={<ProductsItems />} />
            <Route path="selectedcategory" element={<GetCategoryList url={categoryUrl} />} />
            <Route path="/cart/:id" element={<AddtoCart />} />


          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;



























// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComp from './Components/NavbarComp';
// import Sidebar from './Components/Sidebar';
// import { Route, Routes } from 'react-router-dom';
// import Allproducts from './Components/Allproducts';
// import ProductsItems from './Components/ProductsItems';

// import { useEffect, useState } from 'react';
// import GetCategoryList from './Components/GetCategoryList';

// function App() {

//   return (
//     <>
//       {/* Navbar at the top */}
//       <NavbarComp />

//       {/* Main layout with Sidebar and Content */}
//       <div style={{ display: 'flex' }}>
//         {/* Sidebar on the left */}
//         <Sidebar style={{ width: '300px', backgroundColor: '#333' }} />

//         {/* Content area on the right */}
//         <div style={{ flex: 1, padding: '20px', marginLeft: '300px'  }}>
       
          
//           <Routes>
//             <Route path="allproducts"   element={<Allproducts  /> } />
//             <Route path="/product/:id" element={<ProductsItems />} />
//             <Route path="selectedcategory" element={<GetCategoryList/>}/>
//           </Routes>
          
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
