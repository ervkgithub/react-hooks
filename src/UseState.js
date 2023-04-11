import { useState } from "react";

const UseState = () => {
  // Counter demo

  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("Vijay Kumar");
  const [showText, setShowText] = useState(false);

  const addCounter = () => {
    setCounter(counter + 1);
    setShowText(!showText);
    if (counter >= 10) {
      setCounter(counter);
      alert("You reach the max. limit");
    }
  };
  const subCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setShowText(!showText);
    }
    if (counter <= 0) {
      alert("You are already on the min. limit");
    }
  };

  // Change Input text demo

  const changeText = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <>
      <h1 className="mt-3 mb-3">Counter Demo with Using useState</h1>
      <h5>Counter : {counter} </h5>
      <br />
      <br />
      <div className="row">
        <button className="col-md-2" onClick={addCounter}>
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className="col-md-2" onClick={subCounter}>
          Decrement
        </button>
        <h2 className="mt-3 mb-3">Change Input Text Demo with Using useState</h2>
        <div className="row">
          <input
            className="col-md-8"
            type="text"
            placeholder="Enter something..."
            onChange={changeText}
          />
          <div className="col-md-8">{inputValue}</div>
        </div>
        <h3 className="mt-3 mb-3">Show Text on change of Counter value Demo with Using useState</h3>
        <div className="row">
          { showText && <p>This is show text, it is getting updated on after counter value changed</p> }
        </div>
      </div>
    </>
  );
};

export default UseState;
