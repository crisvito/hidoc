import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

export function Profile() {
  const { data } = useUser();

  return (
    <div className="bg-blue-100">
      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto my-28">
        <Link to="/" className="absolute top-5 left-5 font-bold text-blue-900">
          Home
        </Link>
        <Link
          to="/profile/edit"
          className="absolute top-5 right-5 font-bold text-blue-900"
        >
          Edit
        </Link>
        <div className="flex justify-center">
          <img
            src={data.photoURL ? data.photoURL : "/default_profile.png"}
            alt=""
            className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
          />
        </div>

        <div className="mt-16">
          <h1 className="font-bold text-center text-3xl text-gray-900">
            {data.namaDepan + " " + data.namaBelakang}
          </h1>
          <p className="text-center text-sm text-gray-400 font-medium">
            {data.email}
          </p>
          <div className="my-5 px-6">
            <a
              href="#"
              className="text-gray-200 block tracking-wider rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
            >
              No telepon <span className="font-bold">{data.phone}</span>
            </a>
          </div>

          <div className="w-full">
            <h3 className="font-medium text-gray-900 text-left px-6">
              Biodata
            </h3>
            <div className="biodata">
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                Kecamatan : <span>{data.kecamatan}</span>
              </div>
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                Alamat Rumah :<span>{data.alamatRumah}</span>
              </div>
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                Email : <span>{data.email}</span>
              </div>
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                Sebagai : <span>{data.as}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
