import { TestCovid } from "../../data";
import { Layout } from "../../layouts";
import { Link } from "react-router-dom";
import { Button } from "../../components";

export function TestCovid19() {
  return (
    <Layout>
      <div className="my-8 sm:px-9 px-7">
        <div className="flex items-end  tracking-wide">
          <h1 className="text-2xl text-center mx-2 mb-0 font-medium">
            TEST COVID 19
          </h1>
          <span className="text-gray-500 dark:text-neutral-200 font-bold">
            Hasil tes COVID-19 terintegrasi dengan NAR dan PeduliLindungi
          </span>
        </div>
        <div className="">
          {TestCovid.map((data, i) => (
            <Link
              to={data.slug}
              key={i}
              className="group rounded flex flex mt-8 border border-gray-400 bg-white text-gray-600 dark:bg-slate-600 dark:text-white h-40"
            >
              <img src={data.img} alt={data.title} className="h-full w-2/5" />
              <div className="w-full p-5 tracking-wide flex justify-between items-center">
                <div className="h-full grid grid-cols content-between">
                  <h3 className="text-xl font-medium">{data.title}</h3>
                  <span>
                    <h4 className="font-semibold">{data.tempat}</h4>
                    <h4 className="text-sm">
                      {data.kecamatan} , {data.kota}
                    </h4>
                  </span>
                </div>
                <div className="flex flex-col gap-4 text-end">
                  <p className="text-xl font-medium tracking-wider">
                    Rp {data.harga}
                  </p>
                  <Button children="Lihat Detail" className="px-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
