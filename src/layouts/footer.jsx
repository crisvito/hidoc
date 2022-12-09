import { Link } from "react-router-dom";
import { FooterMenu } from "../data";

export function Footer() {
  return (
    <div className="flex justify-center bg-blue-500">
      <div className="flex flex-col w-10/12">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 py-16 text-white">
          <h1 className="lg:text-start text-center font-bold lg:text-2xl md:text-xl text-lg">
            HIDOC
          </h1>
          <div className="flex sm:flex-row flex-col w-full sm:items-start sm:gap-0 gap-5 items-center justify-center">
            {FooterMenu.map((menu, i) => {
              return (
                <div
                  className="flex sm:flex-col flex-row justify-center flex-wrap gap-7 font-medium w-full tracking-widest"
                  key={i}
                >
                  {menu.map((m, i) => {
                    return (
                      <Link key={i} to={m.path}>
                        {m.display}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-t-2 py-5">
          <span className="text-white tracking-widest font-medium">
            Hak Cipta © 2022 hidoc
          </span>
        </div>
      </div>
    </div>
  );
}
