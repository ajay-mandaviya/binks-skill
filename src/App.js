import "./App.css";
import {
  getAllUsers,
  Login,
  PrivateRoute,
  UserProfile,
  UserProfilesList,
} from "./features";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<UserProfilesList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
