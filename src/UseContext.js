import { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UseContext = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <h2>useContext Hooks demo</h2>
      <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <br />
        <br />
        <User />
      </AppContext.Provider>
    </>
  );
};

export default UseContext;
