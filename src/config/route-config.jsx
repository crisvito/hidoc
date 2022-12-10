import { Routes, Route } from "react-router-dom";
import {
  Home,
  Penyakit,
  PenyakitDetail,
  Artikel,
  ArtikelDetail,
  // Kesehatan,
  TanyaDetail,
  TanyaDokter,
  Login,
} from "../routes";
import { Error } from ".";

export function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artikel" element={<Artikel />} />
      <Route path="/artikel/:artikel" element={<ArtikelDetail />} />
      {/* <Route path="/kesehatan" element={<Kesehatan />} /> */}
      <Route path="/penyakit" element={<Penyakit />} />
      <Route path="/penyakit/:penyakit" element={<PenyakitDetail />} />
      <Route path="/tanya-dokter" element={<TanyaDokter />} />
      <Route path="/tanya-dokter/:tanya" element={<TanyaDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
