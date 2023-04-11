import { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("Vijay Kumar");
  const changeName = (e) => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
    // inputRef.current.value = "";
    setName(inputRef.current.value);
  };

  return (
    <>
      <h1>{name}</h1>
      <div className="col-md-5">
        <input className="mt-2" type="text" placeholder="Type here..." ref={inputRef} /> <br />
        <br />
        <button onClick={changeName}>Change Name</button>
      </div>
    </>
  );
};

export default UseRef;
