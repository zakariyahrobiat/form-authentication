import React from "react";
import { useAppContext } from "./context";

const Register = () => {
  const { data, handleSubmit, submit, refContainer } = useAppContext();
  return (
    <div
      className="absolute left-0 duration-1000 p-6 w-full py-2"
      ref={refContainer}
    >
      <form action="" className="text-center ">
        <div className="mb-4 relative">
          <input
            className="bg-transparent py-1 border-b border-black w-full text-sm focus:border-red-700 focus:outline-none peer "
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="username"
            className="absolute top-1 left-0 text-sm duration-500 peer-focus:-translate-y-4 peer-valid:-translate-y-4 "
          >
            username
          </label>
        </div>
        <div className="mb-4 relative">
          <input
            className=" bg-transparent py-1 border-b border-black w-full text-sm focus:border-red-700 focus:outline-none peer "
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="email"
            className="absolute top-1 left-0 text-sm duration-500 peer-focus:-translate-y-4 peer-valid:-translate-y-4 "
          >
            email
          </label>
        </div>
        <div className="mb-4 relative">
          <input
            className="bg-transparent py-1  border-b border-black w-full text-sm focus:border-red-700 focus:outline-none peer"
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="password"
            className="absolute top-1 left-0 text-sm duration-500 peer-focus:-translate-y-4 peer-valid:-translate-y-4  "
          >
            password
          </label>
        </div>
        <div className="mb-4 relative">
          <input
            className="bg-transparent py-1  border-b border-black  w-full text-sm focus:border-red-700 focus:outline-none peer"
            type="password"
            name="Cpassword"
            id="Cpassword"
            value={data.Cpassword}
            onChange={handleSubmit}
            required
          />
          <label
            htmlFor="Cpassword"
            className="absolute top-1 left-0 text-sm duration-500 peer-focus:-translate-y-4 peer-valid:-translate-y-4"
          >
            confirm password
          </label>
        </div>
        <button
          type="submit"
          onClick={submit}
          className=" bg-cyan-500 py-1 px-4  rounded-tl-xl rounded-br-xl hover:bg-black hover:text-cyan-500 "
        >
          register
        </button>
      </form>
    </div>
  );
};

export default Register;
