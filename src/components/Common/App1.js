import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import UserData from "./UserData";
import AddUser from "./AddUser";

function App1() {
  return (
    <>
      <div className="left">
        <Header />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdata" element={<UserData />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App1;
