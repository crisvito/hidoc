import { dataArticle } from "../../data";
import { Link } from "react-router-dom";

export function ArtikelTerbaru() {
  return (
    <div className="my-8 sm:px-9 px-7">
      <div class="flex items-center after:flex-1 after:border-t after:border-gray-500 after:mt-0.5">
        <h1 className="text-2xl text-center mx-2 mb-0">Artikel Terbaru</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {dataArticle.map((data) => (
          <Link
            to={data.slug}
            key={data.id}
            className="group rounded-lg flex flex-col gap-4 shadow-lg bg-slate-700 text-white dark:bg-neutral-300 dark:text-gray-900"
          >
            <img
              src={data.urlImage}
              alt={data.title}
              className="h-36 w-full object-cover object-center rounded-t-lg group-hover:opacity-75"
            />
            <h3 className="text-sm font-medium text-center px-5 py-2">
              {data.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
