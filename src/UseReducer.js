import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <>
      <h1 className="mt-3 mb-3">Counter Demo and show texr Using useReducer</h1>
      <h5>Counter : {state.count} </h5>
      <br />
      <br />
      <div className="row">
        <button
          className="col-md-2"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          Increment
        </button>
        <div className="row mt-3">
          {state.showText && (
            <p>
              This is show text, it is getting updated on after counter value
              changed
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default UseReducer;
