import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Artikel,
  ArtikelDetail,
  TanyaDetail,
  TanyaDokter,
  Login,
  Dashboard,
  Register,
  RegisterProvider,
  Profile,
  EditProfile,
  TestCovid19,
  DetailLayanan,
} from "../routes";
import { Error } from ".";
import { useContext } from "react";
import { AuthContext } from "../context";
import { useUser } from "../hooks/useUser";

export function RouteConfig() {
  const { currentUser } = useContext(AuthContext);
  const { data } = useUser();

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const Logged = ({ children }) => {
    return currentUser ? <Navigate to="/" /> : children;
  };

  const LoggedProvider = ({ children }) => {
    return currentUser.providerData ? children : <Navigate to="/" />;
  };

  const Admin = ({ children }) => {
    return currentUser.email == "admin@hidoc.dev" ? (
      children
    ) : (
      <Navigate to="/" />
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path="/profile/edit"
        element={
          <RequireAuth>
            <EditProfile />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Admin>
            <Dashboard />
          </Admin>
        }
      />
      <Route path="/:layanan" element={<DetailLayanan />} />
      <Route path="/test-covid-19" element={<TestCovid19 />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/:artikel" element={<ArtikelDetail />} />
      <Route path="/tanya-dokter" element={<TanyaDokter />} />
      <Route path="/tanya-dokter/:tanya" element={<TanyaDetail />} />
      <Route
        path="/login"
        element={
          <Logged>
            <Login />
          </Logged>
        }
      />
      <Route
        path="/register"
        element={
          <Logged>
            <Register />
          </Logged>
        }
      />
      <Route
        path="/register/provider"
        element={
          <LoggedProvider>
            <RegisterProvider />
          </LoggedProvider>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
