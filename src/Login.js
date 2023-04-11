import { useContext } from "react";
import { AppContext } from "./UseContext";

const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        className="mt-2"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
