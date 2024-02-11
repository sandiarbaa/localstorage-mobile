import React from "react";
import Button from "../components/button";

const username = localStorage.getItem("username");

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/localstorage-mobile/";
  };

  const sayHello = () => {
    console.log("hello");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl font-bold text-slate-700">Welcome, {username}</h1>
      <p className="font-semibold text-lg my-5">Happy Coding! Bro!</p>
      {/* <button
        type="submit"
        className="px-4 py-1 bg-green-400 rounded-md"
        gaya=" px-4 py-1"
        onClick={handleLogout}
      >
        logout bro
      </button> */}
      <Button gaya="px-4 py-1" klik={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
