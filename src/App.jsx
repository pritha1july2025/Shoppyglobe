import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import React from "react";

//Update application routing
const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  );
};

export default App;

