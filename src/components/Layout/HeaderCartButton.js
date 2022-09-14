import { useContext, useEffect, useState } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  //Destructing array to get only items, which will be used as a condition for useEffect()
  const { items } = cartCtx;

  //reduce() transforms an array into a single value
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  //Only add the bum class if btnIsHighlighted is true
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  //Playing the animation when amount of the cart changes | Good feedback for the user
  useEffect(() => {
    if (cartCtx.items.length === 0) {
        return; //Returns nothing if cart is empty
    }
    setBtnIsHighlighted(true);

    //Removing the bump class after 300 milliseconds so it can be added again to play the animation
    const timer = setTimeout(() => {
        setBtnIsHighlighted(false);
    }, 300);

    //Clean up function to clear the timer
    return () => {
        clearTimeout(timer);
    };

  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;