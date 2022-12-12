import { Layout } from "../../layouts";
import { useParams, Link } from "react-router-dom";
import { useTitle } from "../../hooks";
import { useState, useEffect } from "react";
import { dataPertanyaan } from "../../data";
import { ArrowLeft, User } from "phosphor-react";
import parse from "html-react-parser";

export function TanyaDetail() {
  useTitle("Detail Pertanyaan");
  const [items, setItems] = useState([]);

  const { tanya } = useParams();
  useEffect(() => {
    const dataFilter = dataPertanyaan.filter((data) => data.slug === tanya);
    setItems(dataFilter[0]);
  }, []);
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="sm:w-3/4 w-full py-16 sm:px-0 px-10 flex flex-col gap-5">
          <h1 className="text-2xl font-bold">
            Jawab Dokter dari Pertanyaan terkait
          </h1>
          <span className="flex items-center gap-3 text-blue-500">
            <ArrowLeft size={30} />
            <Link to="/tanya-dokter">Kembali ke daftar pertanyaan</Link>
          </span>
          <div>
            <h1 className="text-xl font-medium">{items.question}</h1>
            <div className="flex mt-10 items-center justify-between sm:w-3/4 w-full">
              <div className="flex items-center gap-5">
                <User size={50} className="md:inline-flex hidden" />
                <h3>{items.questionBy}</h3>
              </div>
              <div className="flex flex-col text-right text-sm">
                <span>{items.questionDate}</span>
                <span>{items.questionTime}</span>
              </div>
            </div>
            <p className="pt-10 sm:w-3/4 w-full tracking-wide leading-relaxed text-gray-700">
              {items.detailQuestion}
            </p>
          </div>
          <div className="p-3  border-2 border-gray-300 sm:w-3/4 w-full rounded">
            <h4 className="text-sm font-medium text-gray-700 tracking-widest">
              Dijawab oleh :
            </h4>
            <div className="p-5 pt-0">
              <div className="flex mt-10 items-center justify-between">
                <div className="flex items-center gap-5">
                  <User size={50} className="md:inline-flex hidden" />
                  <h3>{items.answerBy}</h3>
                </div>
                <div className="flex flex-col text-right text-sm">
                  <span>{items.answerDate}</span>
                  <span>{items.answerTime}</span>
                </div>
              </div>
              <p className="pt-10 sm:w-3/4 w-full tracking-wide leading-relaxed text-gray-700 flex flex-col gap-5">
                {parse(`${items.answer}`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
