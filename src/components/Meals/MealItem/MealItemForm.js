import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredNumberAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredNumberAmount < 1 ||
      enteredNumberAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredNumberAmount);
  };

  const inputObj = {
    id: "amount_" + props.id,
    min: "1",
    max: "5",
    step: "1",
    type: "number",
    defaultValue: "1",
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" input={inputObj} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
