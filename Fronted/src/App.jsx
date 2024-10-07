import React from "react";
import Left from "./Home/LeftPart/Left";
import Right from "./Home/RightPart/Right";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { useAuth } from "./Context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to={"/"} /> : <SignUp />}
      />
    </Routes>
  );
}

export default App;
