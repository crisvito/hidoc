import { Layout } from "../../layouts";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../../data";
import parse from "html-react-parser";
import { ArrowLeft } from "phosphor-react";

export function ArtikelDetail() {
  const { artikel } = useParams();
  const item = getArticle(artikel);

  return (
    <Layout>
      <div className="lg:w-3/4 md:w-4/5 sm:p-10 p-5 md:pl-20 w-full">
        <div className="artikel-detail p-10 flex flex-col gap-10">
          <h1 className="font-semibold text-3xl tracking-widest">
            {item?.title}
          </h1>
          <img
            src={item?.urlImage}
            alt={item?.title}
            className="md:h-72 sm:h-60 h-52"
          />
          <span className="flex items-center gap-3 text-blue-500">
            <ArrowLeft size={30} />
            <Link to="/artikel">Kembali ke Halaman Sebelumnya</Link>
          </span>
          <div className="artikel-content flex flex-col gap-10 leading-loose tracking-wide">
            {parse(`${item?.content}`)}
            {parse(`${item?.content2}`)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
