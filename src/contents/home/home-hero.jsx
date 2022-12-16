import { Button } from "../../components";

export function HomeHero() {
  return (
    <div className="flex justify-center pt-5 h-96">
      <div className="flex justify-between gap-5">
        <div className="self-center lg:text-left text-center flex flex-col gap-5 items-center lg:items-start">
          <h1 className="md:text-4xl text-2xl tracking-wide text-blue-900 dark:text-blue-500">
            Solusi Kesehatan Terlengkap
          </h1>
          <p className="tracking-wide leading-loose md:text-lg text-base">
            Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update
            informasi seputar kesehatan, semua bisa di Hidoc!
          </p>
          <Button
            children="Chat dengan dokter"
            className="bg-blue-900 lg:w-5/12 md:w-2/5 w-3/4 py-3"
          />
        </div>
        <div className="lg:inline-flex w-[500px] hidden">
          <img
            src="/assets/logo/home-hero.png"
            alt="err"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
