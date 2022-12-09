import { Link, useLocation } from "react-router-dom";
import { NavMenu } from "../data";
import { useState } from "react";
import { List, X } from "phosphor-react";
import { OutlineLinkButton } from "../components";

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const active = NavMenu.findIndex((e) => "/" + e.path === pathname);

  return (
    <div className="shadow-lg py-1 block w-full">
      <nav className="flex justify-between items-center my-4 mx-5 lg:mx-10  lg:space-x-20">
        <h1 className="font-bold text-2xl uppercase">hidoc</h1>
        <div className="lg:hidden">
          {open ? (
            <X size={32} weight="bold" onClick={() => setOpen(false)} />
          ) : (
            <List size={32} weight="bold" onClick={() => setOpen(true)} />
          )}
        </div>
        <div
          className={`flex flex-1 fixed top-0 z-50 flex-col gap-5 duration-500 bg-slate-800 w-8/12 h-full px-14 py-10 text-white md:w-1/2 lg:text-black lg:p-0 lg:bg-transparent lg:flex-row lg:justify-between lg:gap-0 lg:static ${
            open ? "left-0" : "left-[2000px]"
          }`}
        >
          <ul className="flex flex-col gap-5 lg:gap-20 lg:flex-row">
            {NavMenu.map((menu, i) => {
              return (
                <Link
                  key={i}
                  to={"/" + menu.path}
                  className={`nav-text ${i === active ? "active" : ""}`}
                >
                  {menu?.display}
                </Link>
              );
            })}
          </ul>
          <div>
            <OutlineLinkButton
              children="Masuk"
              className="px-5"
              path="./login"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
