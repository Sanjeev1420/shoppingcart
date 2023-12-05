
import Header from './Components/header';
import  Products from './Components/products';
import Footer from './Components/footer';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);
  return (
    <div id="app">
      <Header cart={cart}/>
      <Products cart={cart} setCart={setCart}/>
      <Footer/>
    </div>
  ) 
}

export default App;
