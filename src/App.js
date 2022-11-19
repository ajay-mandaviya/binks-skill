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
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <PrivateRoute>
              <UserProfilesList />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/:username"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
