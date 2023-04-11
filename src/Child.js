import { useEffect } from "react";

const Child = ({returnComment}) => {
    useEffect(()=>{
        console.log("Fun was called")
    }, [returnComment])
  return (
    // <div>{ returnComment() }</div>
    <div>{ returnComment(" by vijay umar") }</div>
  )
}

export default Child