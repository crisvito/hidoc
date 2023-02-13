import { Layout } from "../../layouts";

export function KesehatanJantung() {
  return (
    <Layout>
      <div className="my-8 sm:px-9 px-7 flex flex-col gap-20">
        <div className="flex gap-5 leading-loose tracking-wide">
          <div className="flex flex-col gap-3">
            <span className="text-blue-900 font-semibold tracking-wide">
              Ayo Peduli dengan Kesehatan Jantung Anda Untuk Hidup yang lebih
              Sehat
            </span>
            <h5 className="py-3 text-blue-700 font-semibold">
              Tahukah Kalian?
            </h5>
            <div className="text-sm flex flex-col gap-3 leading-loose tracking-wider">
              <p>
                bahwa penyakit jantung merupakan penyakit penyebab kematian
                nomor 1 – baik secara global maupun nasional di Indonesia?
              </p>
              <p>
                menurut American College of Cardiology, umumnya terjadi
                peningkatan potensi serangan jantung pada rentang usia 20-30
                tahun?
              </p>
            </div>
          </div>
          <img
            src="/assets/img/services/kesehatan-jantung2.jfif"
            alt="kesehatan mental"
            className="w-2/5"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 border-r-2 border-indigo-500">
            <h1 className="text-lg font-medium uppercase tracking-widest text-blue-800">
              Faktor penyebab penyakit jantung:
            </h1>
            <ul className="leading-loose tracking-wide list-disc">
              <li>
                Merokok – kebiasaan merokok merupakan penyebab nomor 1 dari
                penyakit jantung dan dapat meningkatkan risiko seseorang terkena
                penyakit jantung hingga EMPAT kali lipat,
              </li>
              <li>
                Konsumsi garam dan lemak jahat – konsumsi berlebih dari dua zat
                tersebut dapat meningkatkan potensi tekanan darah tinggi dan
                kolesterol yang dapat berdampak pada penyakit jantung,
              </li>
              <li>Pola makan yang tidak seimbang,</li>
              Kurangnya aktivitas fisik dan kelebihan berat badan.
            </ul>
          </div>
          <div className="flex flex-col gap-5 border-r-2 border-indigo-500">
            <h1 className="text-lg font-medium uppercase tracking-widest text-blue-800 ">
              Gejala umum yang sering terjadi:
            </h1>
            <ul className="leading-loose tracking-wide list-disc">
              <li>Nyeri dada – seringkali juga menyebar hingga area lengan,</li>
              <li>Jantung terasa berdebar-debar,</li>
              <li>Kuku dan bibir menjadi kebiruan, Sering</li>
              <li>
                merasa kelelahan sehabis menaiki anak tangga (nafas terasa
                pendek),
              </li>
              <li>Bengkak pada kaki, paha atau pergelangan kaki.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
