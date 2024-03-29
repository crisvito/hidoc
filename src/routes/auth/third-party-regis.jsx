import { Link, useNavigate } from "react-router-dom";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { kecamatan } from "../../data";
import { Button } from "../../components";
import { useState, useContext } from "react";
import { AuthContext } from "../../context";

export function RegisterProvider() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  async function handleAdd(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await setDoc(doc(db, "users", currentUser.uid), {
        ...data,
        uid: currentUser.uid,
        email: currentUser.email,
        as: "warga",
        photoURL: currentUser.photoURL,
        timeStamp: serverTimestamp(),
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className="mt-10 sm:mt-0 mb-10 flex flex-col items-center w-full">
      <div>
        <div className="px-4 sm:px-0 flex sm:flex-row flex-col sm:items-center py-7 sm:gap-10 gap-3 items-start">
          <img src="/assets/logo/main.png" alt="hidoc" className="w-32" />
          <div>
            <p className="mt-1 text-sm text-gray-600">
              Dalam regristrasi semua input wajib di isi
            </p>
          </div>
        </div>
        <form onSubmit={handleAdd}>
          {error && <span className="text-red-900 tracking-wide">{error}</span>}
          <div className="auth flex flex-col shadow sm:rounded-md pb-3">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="namaDepan">Nama Depan</label>
                  <input type="text" name="namaDepan" id="namaDepan" required />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="namaBelakang">Nama Belakang</label>
                  <input
                    type="text"
                    name="namaBelakang"
                    id="namaBelakang"
                    required
                  />
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
                  <label htmlFor="alamatRumah">Alamat Rumah</label>
                  <input
                    type="text"
                    name="alamatRumah"
                    id="alamatRumah"
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
