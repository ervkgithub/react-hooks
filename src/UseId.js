import { useId } from "react";

const UseId = () => {
  const id = useId();
  const userId = useId();
  console.log("id", id);
  console.log("id", userId);
  return (
    <>
      <h2>useId Hooks Demo</h2>
      <h4>Unique id is generated from the useId Hooks</h4>
      <p>{id}</p>
      <p>{userId}</p>
    </>
  );
};

export default UseId;
