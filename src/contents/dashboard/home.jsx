import { User, FirstAid, Article } from "phosphor-react";
import { dataDokter } from "../../data";

export function Home() {
  return (
    <div>
      <h3 className="text-gray-700 text-3xl font-medium">Dashboard Pages</h3>

      <div className="mt-4">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
              <User size={55} />
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">5</h4>
                <div className="text-gray-500">Dokter</div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
              <FirstAid size={55} />
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">15</h4>
                <div className="text-gray-500">Pertanyaan</div>
              </div>
            </div>
          </div>

          <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
            <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
              <Article size={55} />
              <div className="mx-5">
                <h4 className="text-2xl font-semibold text-gray-700">49</h4>
                <div className="text-gray-500">Artikel Tersedia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8"></div>

      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Jenis</th>
                  <th>Status</th>
                  <th>Pengalaman</th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {dataDokter.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={data.img}
                              alt={data.nama}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">
                              {data.nama}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-900">
                          Dokter {data.jenis}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {data.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                        {data.pengalaman}
                      </td>

                      <td className="px-6 py-4 text-right border-b border-gray-200 text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
