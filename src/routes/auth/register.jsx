import { Link, useNavigate } from "react-router-dom";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { kecamatan } from "../../data";
import { Button } from "../../components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Register() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleAdd(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.password === data.confirmPassword) {
      console.log("mantap");
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        await setDoc(doc(db, "users", res.user.uid), {
          ...data,
          timeStamp: serverTimestamp(),
        });
        navigate("/login");
      } catch (err) {
        setError(err.message);
      }
    } else setError("konfirmasi password tidak sesuai");
  }
  return (
    <div className="mt-10 sm:mt-0 mb-10 flex flex-col items-center w-full">
      <div>
        <div className="px-4 sm:px-0 flex sm:flex-row flex-col sm:items-center py-7 sm:gap-10 gap-3 items-start">
          <img src="/assets/logo/main.png" alt="hidoc" className="w-32" />
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Registrasi akun
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Dalam regristrasi semua input wajib di isi. Sudah Daftar?
            </p>
            <Link to="/login" className="font-bold mt-1 text-blue-900 text-sm">
              Masuk Sekarang
            </Link>
          </div>
        </div>
        <form onSubmit={handleAdd}>
          {error && <span className="text-red-900 tracking-wide">{error}</span>}
          <div className="auth flex flex-col shadow sm:rounded-md pb-3">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="nama-depan">Nama Depan</label>
                  <input
                    type="text"
                    name="nama-depan"
                    id="nama-depan"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="nama-belakang">Nama Belakang</label>
                  <input
                    type="text"
                    name="nama-belakang"
                    id="nama-belakang"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="email">Alamat Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="phone">Nomor Telepon</label>
                  <input type="number" name="phone" id="phone" required />
                </div>
                <div className="col-span-3 sm:col-span-3">
                  <label>Kota</label>
                  <input type="text" name="kota" value="Balikpapan" disabled />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="kecamatan">Kecamatan</label>
                  <select id="kecamatan" name="kecamatan" required>
                    {kecamatan.map((k, i) => {
                      return <option key={i}>{k}</option>;
                    })}
                  </select>
                </div>
                <div className="col-span-6">
                  <label htmlFor="alamat-rumah">Alamat Rumah</label>
                  <input type="text" name="alamat-rumah" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="confirmPassword">Konfirmasi Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required
                  />
                </div>
              </div>
            </div>
            <Button
              type="submit"
              children="Sign up"
              className="px-7 w-32 uppercase text-sm self-end mx-4 my-3 sm:mx-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
