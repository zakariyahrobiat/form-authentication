import React from "react";
import { useAppContext } from "./context";
const Login = () => {
  const { data, handleSubmit, goggle, divContainer, handleLogin } =
    useAppContext();
  return (
    <div
      className=" absolute -left-80 duration-1000 px-8 py-6 w-full"
      ref={divContainer}
    >
      <form action="" className="text-center">
        <div className=" mb-4 relative ">
          <input
            className="bg-transparent border-b py-2 w-full border-black text-sm focus:border-red-700 focus:outline-none peer"
            type="email"
            name="loginEmail"
            id="loginEmail"
            value={data.loginEmail}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="email"
            className="absolute top-1 left-0 text-base  duration-500 peer-focus:-translate-y-5 peer-valid:-translate-y-5 "
          >
            email
          </label>
        </div>
        <div className="mb-8 relative">
          <input
            className="bg-transparent border-b py-2 w-full border-black text-sm focus:border-red-700 focus:outline-none peer"
            type="password"
            name="loginPassword"
            id="loginPassword"
            value={data.loginPassword}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="password"
            className="absolute top-1 left-0 text-base duration-500 peer-focus:-translate-y-5 peer-valid:-translate-y-5 "
          >
            password
          </label>
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className=" bg-blue-300  text-black duration-500 px-4 py-1 rounded-tr-xl rounded-bl-xl  hover:bg-white hover:text-black "
        >
          Login
        </button>
      </form>
      <p
        onClick={goggle}
        className="cursor-pointer  text-base font-medium pt-6"
      >
        Log in with goggle account
      </p>
    </div>
  );
};

export default Login;
