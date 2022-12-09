import { Layout } from "../../layouts";
import { useParams } from "react-router-dom";
import { useTitle } from "../../hooks";
import { apiFetch } from "../../api";
import { useEffect, useState } from "react";

export function ArtikelDetail() {
  const { artikel } = useParams();
  const [items, setItems] = useState < any > null;

  const { data, isPending, error } = apiFetch(
    "top-headlines?country=id&category=health"
  );
  useEffect(() => {
    const dataFilter = data.filter((data) => data.publishedAt === artikel);
    setItems(dataFilter[0]);
  }, [data]);

  return (
    <Layout>
      {isPending && <span className="uppercase font-bold">Loading...</span>}
      {error && <span className="uppercase font-bold">Terjadi Kesalahan</span>}
      <div className="p-10 flex flex-col gap-10">
        <h1 className="font-semibold text-3xl tracking-widest">
          {items?.title}
        </h1>
        <img
          src={
            items?.urlToImage
              ? items?.urlToImage
              : "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          }
          alt={items?.title}
          className="w-2/3"
        />
        <p>
          {items?.content
            ? items?.content.slice(0, items.content.length - 20)
            : "Tidak ada konten (terjadi kesalahan)"}
          ...
          <a href={items?.url} target="_blank" className="text-blue-600">
            Baca Selengkapnya
          </a>
        </p>
      </div>
    </Layout>
  );
}
