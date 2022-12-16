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
      <div className="tanya-dokter flex flex-col items-center sm:bg-white bg-transparent dark:bg-transparent my-3 sm:shadow-lg rounded-lg">
        <div className="w-full py-10 sm:px-5 md:px-10 flex flex-col gap-5 px-5">
          <h1 className="text-2xl font-bold">
            Jawab Dokter dari Pertanyaan terkait
          </h1>
          <span className="flex items-center gap-3 text-blue-500">
            <ArrowLeft size={30} />
            <Link to="/tanya-dokter">Kembali ke daftar pertanyaan</Link>
          </span>
          <div className="py-2">
            <h1 className="text-xl font-medium my-5">{item.question}</h1>
            <div className="flex sm:flex-row flex-col py-5 sm:items-center sm:justify-between items-start gap-8 border-b-2 border-blue-300">
              <div className="flex sm:items-center items-end gap-5">
                <User size={50} />
                <h3>{item.questionBy}</h3>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-0 gap-5 sm:text-right text-sm">
                <span>{item.questionDate}</span>
                <span>{item.questionTime}</span>
              </div>
            </div>
            <p className="pt-10 tracking-wide leading-loose sm:text-base text-sm">
              {item.detailQuestion}
            </p>
          </div>
          <div className="p-3 sm:mt-0 mt-5 sm:border-2 border-0 dark:border-blue-500 rounded dark:bg-transparent dark:border sm:bg-transparent bg-blue-200">
            <h4 className="text-sm sm:font-medium font-bold tracking-widest">
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
              <p className="tanya-content pt-10 tracking-wider leading-loose flex flex-col gap-5 sm:text-base text-sm">
                {parse(`${item.answer}`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
