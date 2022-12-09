// import axios from "axios";
// import { useEffect } from "react";
// import { CardArticles } from "../../components";
import { useState, useEffect } from "react";
import { apiFetch } from "../../api";

export function ArtikelTerbaru() {
  // const { items, isPending, error } = apiFetch(
  //   "top-headlines?country=id&category=health"
  // );
  // console.log(items);

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=b1156ab2feed4129a1d9292b28e5e494"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data.articles);
      });
  }, []);
  console.log(items);

  return (
    <>
      {/* {isPending && <span className="uppercase font-bold">Loading...</span>} */}
      {/* {error && <span className="uppercase font-bold">Terjadi Kesalahan</span>} */}
      <div className="md:px-32 px-10 my-8">
        <h1 className="text-2xl text-slate-800">Artikel Terbaru</h1>
        <div className="mt-10">
          <div className="bg-white">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {items.map((data, i) => (
                <a
                  href={`/artikel/${data.publishedAt}`}
                  key={i}
                  className="group rounded-lg flex flex-col gap-4"
                >
                  <div className="lg:h-64 h-48  rounded-md group-hover:opacity-75">
                    <img
                      src={
                        data.urlToImage
                          ? data.urlToImage
                          : "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                      }
                      alt={data.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-sm text-gray-700 font-medium text-center">
                    {data.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
