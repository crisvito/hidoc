import { useState } from "react";

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      {/* <div
        className={`${
          sidebar ? "block" : "hidden"
        } fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden`}
      ></div> */}
      <div
        className={`absolute inset-y-0 left-0 z-30 w-64 transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0 h-screen
          ${sidebar ? "translate-x-0 ease-out" : "-translate-x-full ease-in"}`}
      >
        <div className="flex items-center pt-8 pl-6">
          <div className="flex items-center gap-3">
            <span className="mx-2 text-2xl font-semibold text-blue-500">
              Hidoc
            </span>
            <img src="/assets/logo/icon.png" alt="hidoc" className="w-16" />
          </div>
        </div>

        <nav className="mt-10">
          <a
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            href="/"
          >
            <span className="mx-3">Home</span>
          </a>

          <a
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            href="/ui-elements"
          >
            <span className="mx-3">Artikel</span>
          </a>

          <a
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            href="/tables"
          >
            <span className="mx-3">Dokter</span>
          </a>

          <a
            className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            href="/forms"
          >
            <span className="mx-3">User</span>
          </a>
        </nav>
      </div>
    </>
  );
}
