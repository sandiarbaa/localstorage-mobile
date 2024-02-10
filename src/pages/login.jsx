import React from "react";
import Button from "../components/button";
import InputForm from "../components/input";

const handleLogin = (event) => {
  event.preventDefault();
  localStorage.setItem("username", event.target.username.value);
  localStorage.setItem("email", event.target.email.value);
  localStorage.setItem("password", event.target.password.value);
  window.location.href = "/dashboard";
};

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[300px]">
        <h1 className="text-3xl font-bold text-green-700">Login</h1>
        <p className="mb-4 text-xl">please enter your detail here...</p>
        <form onSubmit={handleLogin}>
          <InputForm text="Username" type="text" name="username" />
          <InputForm text="Email" type="email" name="email" />
          <InputForm text="Password" type="password" name="pasword" />
          <Button style="w-full px-4 py-2.5">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
