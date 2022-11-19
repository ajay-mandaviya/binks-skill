import "./App.css";
import { Login, PrivateRoute, UserProfile, UserProfilesList } from "./features";
import { Routes, Route } from "react-router-dom";

function App() {
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
