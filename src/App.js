import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Products from './components/Products/Products'
import Product from './components/ProductDetails/ProductDetails';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/cart';
import Checkout from './components/Payment/Checkout';
import ScrollBtn from './components/Shared/ScrollBtn';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="app bg-light">
    
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/:id' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/checkout' element={<Checkout/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/*' element={<NotFound/>}/>
     </Routes>
     <ScrollBtn/>

     <Footer/>
    </div>
  );
}

export default App;
