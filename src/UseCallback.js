import Child from "./Child"
import { useState } from "react"
import { useCallback } from "react";

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("This is UseCallback hooks react");

  // const returnComment = () => {
  //   return data;
  // }

  const returnComment = useCallback((name) => {
    return data + name;
  }, [data])

  return (
    <>
      <Child returnComment={returnComment} />
      <button className="col-md-3" onClick={() => setToggle(!toggle)}>Set Toggle</button>
      { toggle && <p>toggle text</p>}
    </>
  )
}

export default UseCallback