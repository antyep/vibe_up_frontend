import { Navigate, Route, Routes } from "react-router-dom";
import { Register } from "./Register/Register";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Profile } from "./Profile/Profile";
import { Admin } from "./Admin/Admin";
import { Feed } from "../components/Feed/Feed";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};
