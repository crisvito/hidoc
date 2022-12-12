import { layanans } from "../../data";

export function HomeService() {
  return (
    <div className="md:px-32 px-10 my-8">
      <h1 className="text-2xl text-slate-800">Layanan Kesehatan</h1>
      <div className="mt-10">
        <div className="bg-white">
          <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {layanans.map((layanan) => (
              <a
                href={layanan.href}
                key={layanan.id}
                className="group rounded-lg flex flex-col gap-4"
              >
                <div className="h-3/4 rounded-md group-hover:opacity-75 bg-black">
                  <img
                    src={layanan.imageSrc}
                    alt={layanan.imageAlt}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
                <h3 className="text-sm text-gray-700 font-medium text-center">
                  {layanan.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
