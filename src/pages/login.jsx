import React from "react";
import Button from "../components/button";
import InputForm from "../components/input";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("username", event.target.username.value);
  //   localStorage.setItem("email", event.target.email.value);
  //   localStorage.setItem("password", event.target.password.value);
  //   <Link to={"/localstorage-mobile/dashboard"} />;
  // };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("username", event.target.username.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/localstorage-mobile/dashboard";
    // <Link to={"/localstorage-mobile/dashboard"} />;
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[300px]">
        <h1 className="text-3xl font-bold text-green-700">Login</h1>
        <p className="mb-4 text-xl">please enter your detail here...</p>
        <form onSubmit={handleLogin}>
          <InputForm text="Username" type="text" name="username" />
          <InputForm text="Email" type="email" name="email" />
          <InputForm text="Password" type="password" name="pasword" />
          {/* <Button style="w-full px-4 py-2.5" klik={handleLogin}>
            Login
          </Button> */}
          <Button gaya="w-full px-4 py-2.5" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
