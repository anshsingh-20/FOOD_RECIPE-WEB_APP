import { useState, useReducer } from "react";
export default function ReducrVsState() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    if (action.type === "Add") {
      return { ...state, balance: state.balance + action.payload };
    } else if (action.type === "Subtract") {
      return { ...state, balance: state.balance - action.payload };
    } else if (action.type === "freeze") {
      return { ...state, balance: 0 };
    }
  } 
  return (
    <div>
      {/* <h2>useState Count: {count}</h2> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
      {/* <h2>useReducer Count: {state.count}</h2> */}
      <h2>Account Balance: ${state.balance}</h2>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        name=""
        id=""
      />
      <button
        onClick={() =>
          dispatch(
            { type: "Add", payload: Number(amount) },
            alert("Amount Added Successfully"),
          )
        }>
        Deposit
      </button>
      <button
        onClick={() =>
          dispatch(
            { type: "Subtract", payload: Number(amount) },
            alert("Amount Withdrawn Successfully"),
          )
        }>
        Withdraw
      </button>
      <button
        onClick={() =>
          dispatch(
            { type: "freeze", payload: Number(amount) },
            alert("Account Frozen Successfully"),
          )
        }>
        freeze account
      </button>
    </div>
  );
}
