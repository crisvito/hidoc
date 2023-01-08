import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Artikel,
  ArtikelDetail,
  TanyaDetail,
  TanyaDokter,
  Login,
} from "../routes";
import { Error } from ".";
import { useContext } from "react";
import { AuthContext } from "../context";

export function RouteConfig() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const PublicRoute = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/:artikel" element={<ArtikelDetail />} />
      <Route path="/tanya-dokter" element={<TanyaDokter />} />
      <Route path="/tanya-dokter/:tanya" element={<TanyaDetail />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
