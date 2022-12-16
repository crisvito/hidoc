import { Link } from "react-router-dom";
import { layanans } from "../../data";

export function HomeService() {
  return (
    <div className="mt-8 py-8 sm:px-9 px-7 border-t-2 border-blue-500">
      <h1 className="sm:text-2xl text-lg text-blue-900 dark:text-blue-500 tracking-widest font-medium">
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
              <div className="h-28 rounded-md group-hover:opacity-75 bg-blue-900">
                <img
                  src={layanan.imageSrc}
                  alt={layanan.imageAlt}
                  className="h-full w-full object-cover object-center rounded-lg"
                />
              </div>
              <h3 className="text-sm text-blue-800 dark:text-white font-medium text-center">
                {layanan.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
