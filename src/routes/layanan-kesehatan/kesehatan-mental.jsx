import { Layout } from "../../layouts";
import { Button } from "../../components";

export function KesehatanMental() {
  return (
    <Layout>
      <div className="my-8 sm:px-9 px-7 flex flex-col gap-20">
        <div className="flex gap-5 leading-loose tracking-wide">
          <div className="flex flex-col gap-3">
            <span className="text-blue-900 font-semibold tracking-wide">
              Ayo Peduli dengan Kesehatan Mental Anda. Jangan Abaiakan Kesehatan
              Mentalmu.
            </span>
            <h5 className="py-3 text-gray-700 font-medium">
              masalah yang sering dihadapi
            </h5>
            <div className="text-sm flex flex-col gap-3 leading-loose tracking-wider">
              <p>
                Stres tidak selalu buruk, namun stres jangka panjang bisa ganggu
                kesehatanmu.
              </p>
              <p>
                Berbagai situasi atau peristiwa kehidupan dapat menimbulkan
                stres. Ketika kita mendapati pengalaman baru, atau ketika suatu
                keadaan berada di luar kendali kita, kita dapat merasa lebih
                stres daripada biasanya.
              </p>
              <p>
                Stres tidak dapat dihilangkan, tapi kita mengatasi stres dengan
                cara yang berbeda-beda. Jika kamu kesulitan mengatasi stres,
                dapatkan bantuan profesional untuk mencari cara mengelola stres
                dengan lebih baik.
              </p>
            </div>
            <Button children="Dokter Ahli" className="w-2/6" />
          </div>
          <img
            src="/assets/img/services/kesehatan-mental2.png"
            alt="kesehatan mental"
            className="w-2/5"
          />
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-5 border-r-2 border-indigo-500">
            <h1 className="text-lg font-medium uppercase tracking-widest text-blue-800">
              Psikolog
            </h1>
            <p className="leading-loose tracking-wide">
              Jika kamu perlu asesmen kesehatan mental dan bantuan konseling.
              <p>
                psikolog menangani kasus-kasus kejiwaan, mendiagnosis gejala
                psikologis pasien, dan melakukan psikoterapi sebagai bentuk
                penanganannya. Itu sebabnya, psikolog berkompeten untuk
                melakukan beberapa tes psikologi yang kemudian hasilnya
                diinterpretasikan sebagai jawaban dari masalah yang dialami oleh
                pasiennya.
              </p>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg font-medium uppercase tracking-widest text-blue-800">
              Psikiater
            </h1>
            <p className="leading-loose tracking-wide">
              Jika kamu butuh penanganan lebih intensif atau terapi pengobatan.
              <p>
                Sebagai dokter ahli psikiatri, seorang psikiater mengetahui
                segala hal tentang diagnosis dan perawatan yang bisa dilakukan
                untuk setiap kondisi psikologis setiap pasien yang cenderung
                rumit, seperti gangguan bipolar dan skizofrenia. Di banyak
                negara, psikiater adalah pekerjaan legal dan klinis sehingga ia
                bertanggung jawab atas keseluruhan perawatan kesehatan mental
                pasien.
              </p>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
