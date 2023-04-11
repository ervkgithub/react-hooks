import axios from "axios"
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  // useEffect(() => {
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/comments")
  //   .then((response) =>{
  //     console.log("Api was called");
  //     setData(response.data[0].email);
  //   })
  // });

  // useEffect(() => {
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/comments")
  //   .then((response) =>{
  //     console.log("Api was called");
  //     setData(response.data[0].email);
  //   })
  // }, []);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) =>{
      console.log("Api was called");
      setData(response.data[0].email);
    })
  }, [count]);

  return (
    <>
        <div>
          <h2>data Email is : {data}</h2>
          <h4>Count is : {count}</h4>
          <button onClick={addCount}>
            Add Count
          </button>
        </div>
    </>
  )
}

export default UseEffect