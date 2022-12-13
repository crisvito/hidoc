import { Link } from "react-router-dom";
import { layanans } from "../../data";

export function HomeService() {
  return (
    <div className="md:px-32 px-10 py-8 bg-gradient-to-t from-blue-300 to-blue-200">
      <h1 className="sm:text-2xl text-lg text-slate-800 tracking-widest font-medium">
        Layanan Kesehatan
      </h1>
      <div className="mt-10">
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
          {layanans.map((layanan) => (
            <Link
              to={layanan.href}
              key={layanan.id}
              className="group rounded-lg flex flex-col gap-4"
            >
              <div className="h-3/4 rounded-md group-hover:opacity-75">
                <img
                  src={layanan.imageSrc}
                  alt={layanan.imageAlt}
                  className="h-full w-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-sm text-gray-700 font-medium text-center">
                {layanan.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
