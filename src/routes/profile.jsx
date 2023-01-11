import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export function Profile() {
  const { data } = useUser();

  return (
    <div className="bg-blue-100">
      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto my-28">
        <Link to="/" className="absolute top-5 left-5 font-bold text-blue-900">
          Home
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
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                Kecamatan : <span className="font-bold">{data.kecamatan}</span>
              </div>
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                Alamat Rumah :
                <span className="font-bold">{data.alamatRumah}</span>
              </div>
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                Email : <span className="font-bold">{data.email}</span>
              </div>
              <div className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                <img
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full h-6 shadow-md inline-block mr-2"
                />
                Sebagai : <span className="font-bold">{data.as}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
