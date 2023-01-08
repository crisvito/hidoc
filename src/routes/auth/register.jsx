import { Link } from "react-router-dom";
import { Button } from "../../components";

export function Register() {
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
            <Link
              to="/login"
              className="font-semibold mt-1 text-blue-900 text-sm"
            >
              Masuk Sekarang
            </Link>
          </div>
        </div>
        <form>
          <div className="auth overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="nama-depan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nama Depan
                  </label>
                  <input type="text" name="nama-depan" id="nama-depan" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="nama-belakang"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nama Belakang
                  </label>
                  <input type="text" name="nama-belakang" id="nama-belakang" />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="alamat-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Alamat Email
                  </label>
                  <input type="email" name="alamat-email" id="alamat-email" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="kecamatan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kecamatan
                  </label>
                  <select
                    id="kecamatan"
                    name="kecamatan"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>Balikpapan Timur</option>
                    <option>Balikpapan Selatan</option>
                    <option>Balikpapan Tengah</option>
                    <option>Balikpapan Utara</option>
                    <option>Balikpapan Barat</option>
                    <option>Balikpapan Kota</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Alamat Rumah
                  </label>
                  <input type="text" name="street-address" />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Kota
                  </label>
                  <input type="text" name="kota" value="Balikpapan" disabled />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="rt-rw"
                    className="block text-sm font-medium text-gray-700"
                  >
                    RT/RW
                  </label>
                  <input type="text" name="rt-rw" id="rt-rw" />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label
                    htmlFor="Kode Pos"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kode Pos
                  </label>
                  <input type="number" name="Kode Pos" id="Kode Pos" />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <Button
                type="submit"
                children="Sign up"
                className="px-7 w-32 uppercase text-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
