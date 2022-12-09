import { Button } from "../../components";

export function HomeHero() {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-300 flex justify-center pt-5 h-96 lg:px-32 px-20">
      <div className="self-center lg:text-left text-center flex flex-col gap-5 items-center lg:items-start">
        <h1 className="md:text-4xl text-2xl text-white tracking-wide">
          Solusi Kesehatan Terlengkap
        </h1>
        <p className="tracking-wide leading-loose text-white md:text-lg text-base">
          Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update
          informasi seputar kesehatan, semua bisa di Hidoc!
        </p>
        <Button
          children="Chat dengan dokter"
          className="bg-blue-900 lg:w-5/12 md:w-2/5 w-3/4 py-3"
        />
      </div>
      <div className="lg:inline-flex hidden">
        <img src="/assets/img/homehero.png" alt="err" />
      </div>
    </div>
  );
}
