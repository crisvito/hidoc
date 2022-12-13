import { Layout } from "../../layouts";
import { useParams, Link } from "react-router-dom";
import { useTitle } from "../../hooks";
import { getPertanyaan } from "../../data";
import { ArrowLeft, User } from "phosphor-react";
import parse from "html-react-parser";

export function TanyaDetail() {
  useTitle("Detail Pertanyaan");

  const { tanya } = useParams();
  const item = getPertanyaan(tanya);

  return (
    <Layout>
      <div className="tanya-dokter flex flex-col items-center">
        <div className="sm:w-3/4 w-full py-16 sm:px-0 px-10 flex flex-col gap-5">
          <h1 className="text-2xl font-bold">
            Jawab Dokter dari Pertanyaan terkait
          </h1>
          <span className="flex items-center gap-3 text-blue-500">
            <ArrowLeft size={30} />
            <Link to="/tanya-dokter">Kembali ke daftar pertanyaan</Link>
          </span>
          <div>
            <h1 className="text-xl font-medium">{item.question}</h1>
            <div className="flex mt-10 items-center justify-between sm:w-3/4 w-full">
              <div className="flex items-center gap-5">
                <User size={50} className="md:inline-flex hidden" />
                <h3>{item.questionBy}</h3>
              </div>
              <div className="flex flex-col text-right text-sm">
                <span>{item.questionDate}</span>
                <span>{item.questionTime}</span>
              </div>
            </div>
            <p className="pt-10 sm:w-3/4 w-full tracking-wide leading-relaxed text-gray-700">
              {item.detailQuestion}
            </p>
          </div>
          <div className="p-3 sm:mt-0 mt-5 sm:border-2 border-0 border-gray-300 sm:w-3/4 w-full rounded sm:bg-transparent bg-blue-200">
            <h4 className="text-sm sm:font-medium font-bold text-gray-700 tracking-widest">
              Dijawab oleh :
            </h4>
            <div className="sm:p-5 p-0 pt-0">
              <div className="flex sm:mt-10 mt-5 items-center justify-between">
                <div className="flex items-center gap-5">
                  <User size={50} className="md:inline-flex hidden" />
                  <h3>{item.answerBy}</h3>
                </div>
                <div className="flex flex-col text-right text-sm">
                  <span>{item.answerDate}</span>
                  <span>{item.answerTime}</span>
                </div>
              </div>
              <p className="tanya-content pt-10 sm:w-3/4 w-full tracking-wide leading-relaxed text-gray-700 flex flex-col gap-5">
                {parse(`${item.answer}`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
