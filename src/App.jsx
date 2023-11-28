import NavBar from './components/navBar/NavBar.jsx';
import { Route, Routes } from 'react-router-dom';
import  Home  from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Cart from './components/cart/Cart.jsx';
import ProductDetails from './components/productDetails/ProductDetails.jsx';

function App() {
  return (
    <div className="content-page">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='product/:productId' element= {<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
