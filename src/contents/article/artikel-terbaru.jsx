import { dataArticle } from "../../data";
import { Link } from "react-router-dom";

export function ArtikelTerbaru() {
  return (
    <>
      <div className="md:px-32 px-10 my-8">
        <h1 className="text-2xl text-slate-800">Artikel Terbaru</h1>
        <div className="mt-10">
          <div className="bg-white">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {dataArticle.map((data) => (
                <Link
                  to={data.slug}
                  key={data.id}
                  className="group rounded-lg flex flex-col gap-4 shadow-lg p-2"
                >
                  <div className="h-46 rounded-md group-hover:opacity-75">
                    <img
                      src={data.urlImage}
                      alt={data.title}
                      className="h-36 w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-sm text-gray-700 font-medium text-center">
                    {data.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
