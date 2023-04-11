import { useRef } from "react";
import Button from "./Button";

const UseImperHandle = () => {
  const btnRef = useRef(null);
  return (
    <>
      <h2>useImperativeHandle Hook Demo</h2>
      <div className="row mb-3 mt-2">
        <button className="col-md-3" onClick={ () => btnRef.current.alterToggle()}>Button from Parent</button>
      </div>
      <div className="row">
        <Button ref={btnRef} />
      </div>
    </>
  );
};

export default UseImperHandle;
