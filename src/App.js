import { useState } from 'react';
import Header from './components/Layout/Header';
import Coffees from './components/Coffees/Coffees';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* && will render the cart if it is truthy, otherwise it wont be rendered */}      
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Coffees />
      </main>
    </CartProvider>   
  );
}

export default App;
