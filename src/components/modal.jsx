import "flowbite";
import { Button } from ".";
import { X } from "phosphor-react";
export function Modal() {
  return (
    <>
      <span
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
      >
        <Button
          children="Saya Ingin Bertanya..."
          className="text-sm py-2 px-7"
        />
      </span>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="modal fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <X
              size={32}
              data-modal-hide="authentication-modal"
              className="absolute right-3 top-3"
            />
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Silahkan masukan pertanyaan
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label htmlFor="nama">Nama</label>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    placeholder="john doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="pertanyaan">Pertanyaan Anda</label>
                  <textarea
                    type="text"
                    name="pertanyaan"
                    id="pertanyaan"
                    placeholder="saya ingin bertanya..."
                    required
                  />
                </div>
                <Button children="tanya" className="text-sm py-2 px-7" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
