import React from "react";
import Register from "./register";
import Login from "./login";
import { useAppContext } from "./context";

import "./style.css";
const App = () => {
  const { register, login, hr } = useAppContext();
  return (
    <div className="bg-blue-700 w-72 max-w-full p-8 relative h-96 max-h-full overflow-hidden text-white  ">
      <div className="flex justify-between">
        <h1 onClick={register} className="cursor-default ">
          Register
        </h1>
        <h1 onClick={login} className="cursor-pointer ">
          Login
        </h1>
      </div>
      <hr className="w-14 duration-1000 border-b border-red-700 " ref={hr} />
      <Register />
      <Login />
    </div>
  );
};

export default App;
