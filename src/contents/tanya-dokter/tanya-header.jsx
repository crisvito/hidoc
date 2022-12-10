import { Button } from "../../components";

export function TanyaHeader() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 py-10">
        <div className="flex md:flex-row flex-col justify-between md:items-end items-start gap-5">
          <div className="tracking-widest leading-loose">
            <h1 className="font-medium text-2xl uppercase">Tanya Dokter</h1>
            <span className="text-gray-600 font-medium text-sm">
              Bertanya seputar kesehatan yang dapat membantu anda
            </span>
          </div>
          <form action="" className="flex items-center gap-1">
            <input
              type="text"
              className="form-control block w-full px-5 pr-20 py-2 font-normal text-gray-700 bg-white border border-solid border-gray-400 rounded
            duration-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Cari Pertanyaan"
            />
            <Button children="Cari" className="text-sm w-1/4 py-2 px-2" />
          </form>
        </div>
      </div>
    </div>
  );
}
