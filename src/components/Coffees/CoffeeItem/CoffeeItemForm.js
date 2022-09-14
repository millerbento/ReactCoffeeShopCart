import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './CoffeeItemForm.module.css';

const CoffeeItemForm = (props) => {
  const[amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //Converts string to number

    if ( //If input amount is not valid
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return; //It won't submit it and will also show a error message
    }

    //Forwarding enteredAmount to MealItem component via props so we can add the full object there
    props.onAddToCart(enteredAmountNumber);
  };;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* We need to change the custom component to useRef(), otherwise, it won't work */}
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default CoffeeItemForm;
