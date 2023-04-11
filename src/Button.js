import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    useImperativeHandle(ref, ()=> ({
        alterToggle(){
            setToggle(!toggle);
        }
    }))
  return (
    <>
      <button className="col-md-3">Button from child</button>
      { toggle && <p>Toggle</p>}
    </>
  );
});

export default Button;
