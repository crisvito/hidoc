import { Link } from "react-router-dom";
import { FooterMenu } from "../data";

export function Footer() {
  return (
    <div className="border-t-2 bg-white dark:bg-slate-800 mt-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 py-16">
          <img
            src="/assets/logo/main.png"
            alt="Hidoc Company"
            className="h-16 w-32 sm:self-start self-center"
          />
          <div className="flex sm:flex-row flex-col w-full sm:items-start gap-7 items-center justify-center">
            {FooterMenu.map((menu, i) => {
              return (
                <div
                  className="flex sm:flex-col flex-row justify-center flex-wrap gap-6 font-medium w-full tracking-widest sm:border-t border-0 border-blue-800 pt-3"
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
        <div className="border-t-2 py-5 border-blue-800">
          <span className="tracking-widest font-medium">
            Hak Cipta © 2022 hidoc
          </span>
        </div>
      </div>
    </div>
  );
}
