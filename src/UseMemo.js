import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) =>{
      console.log("Api was called");
      setData(response.data);
    })
  }, []);

  const findLongestName = (comments) => {
    if(!comments) return null;
    let longestName = "";
    for(let i = 0; i < comments.length; i++){
      let curName = comments[i].name;
      if(curName.length > longestName.length){
        longestName = curName;
      }
    }
    console.log("This was computed");
    return longestName;
  }

  const getlongestName = useMemo(() => findLongestName(data), [data])

  return (
    <div>
      {/* {findLongestName(data)} */}
      {getlongestName}
      <button onClick={ () => setToggle(!toggle)}>Toggle</button>
      { toggle && <p>toggle</p>}
    </div>
  )
}

export default UseMemo