import React, { createContext, useContext, useState, useRef } from "react";
const AppContext = React.createContext();
import App from "./App";
import { app } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Context = () => {
  let auth = getAuth();
  let goggleProvider = new GoogleAuthProvider();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    Cpassword: "",
    loginEmail: "",
    loginPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const refContainer = useRef();
  const divContainer = useRef();
  const hr = useRef();
  const register = () => {
    refContainer.current.style.transform = "translateX(0px)";
    divContainer.current.style.transform = "translateX(0px)";
    hr.current.style.transform = "translateX(0)";
    hr.current.style.width = "60px";
    console.log(refContainer.current);
  };
  const login = () => {
    refContainer.current.style.transform = "translateX(320px)";
    divContainer.current.style.transform = "translateX(320px)";
    hr.current.style.transform = "translateX(152px)";
    hr.current.style.width = "42px";
    console.log(hr.current);
  };
  const submit = () => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const handleLogin = () => {
    const email = data.loginEmail;
    const password = data.loginPassword;
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const goggle = () => {
    signInWithPopup(auth, goggleProvider)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <AppContext.Provider
      value={{
        data,
        handleSubmit,
        submit,
        refContainer,
        register,
        login,
        divContainer,
        hr,
        handleLogin,
        goggle,
      }}
    >
      <App />
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };
