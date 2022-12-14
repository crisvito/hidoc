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
        <div className="artikel-detail p-10 flex flex-col gap-8">
          <span className="flex sm:flex-row flex-col sm:items-center items-start gap-6 justify-between">
            <div className="flex items-center gap-3 text-blue-500">
              <ArrowLeft size={30} />
              <Link to="/artikel">Kembali ke Halaman Sebelumnya</Link>
            </div>
            <div className="flex flex-col sm:text-right text-left font-medium text-slate-700">
              <span>{item?.articleDate}</span>
              <span>{item?.articleTime}</span>
            </div>
          </span>
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-3xl tracking-widest leading-relaxed">
              {item?.title}
            </h1>
            <span className="font-medium italic">"{item?.excerpt}"</span>
            <div className="flex sm:flex-row flex-col sm:items-center items-start justify-end gap-3">
              <span className="font-medium">Ditinjau oleh</span>
              <span className="px-4 py-1 bg-blue-200 rounded text-blue-800">
                {item?.confirmBy}
              </span>
            </div>
          </div>
          <img
            src={item?.urlImage}
            alt={item?.title}
            className="md:h-96 md:h-72 sm:h-60 h-56 bg-cover bg-center"
          />
          <div className="artikel-content flex flex-col gap-10 leading-loose tracking-wide">
            {parse(`${item?.content}`)}
            {parse(`${item?.content2}`)}
          </div>
        </div>
      </div>
    </Layout>
  );
}
