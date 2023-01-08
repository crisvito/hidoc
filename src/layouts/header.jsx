import { Link, useLocation } from "react-router-dom";
import { NavMenu } from "../data";
import { useState, useEffect, useRef, useContext } from "react";
import { List, X, Sun, Moon } from "phosphor-react";
import { OutlineLinkButton } from "../components";
import { AuthContext } from "../context";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export function Header() {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );

  const { pathname } = useLocation();

  const active = NavMenu.findIndex((e) => "/" + e.path === pathname);
  const headRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === false) {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const { currentUser } = useContext(AuthContext);

  function handleSignOut() {
    signOut(auth);
  }
  return (
    <div
      className="flex justify-center items-center shadow w-full sticky top-0 z-30 bg-white dark:bg-slate-800 font-medium"
      ref={headRef}
    >
      <nav className="w-full flex justify-between items-center my-3 mx-6 lg:space-x-20">
        <h1 className="font-bold text-2xl uppercase">
          <img src="/assets/logo/main.png" alt="HIDOC" className="w-20" />
        </h1>
        <div className="lg:hidden">
          {open ? (
            <X size={32} weight="bold" onClick={() => setOpen(false)} />
          ) : (
            <List size={32} weight="bold" onClick={() => setOpen(true)} />
          )}
        </div>
        <div
          className={`flex flex-1 lg:items-center items-start fixed top-0 z-50 flex-col gap-5 duration-500 bg-neutral-300 dark:bg-slate-900 lg:dark:bg-slate-800 w-8/12 h-full px-10 py-10 md:w-1/2 lg:p-0 lg:bg-transparent lg:flex-row lg:justify-between lg:gap-0 lg:static ${
            open ? "left-0" : "left-[2000px]"
          }`}
        >
          <ul className="flex flex-col gap-5 lg:gap-20 lg:flex-row p-0">
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
          <div className="flex items-center gap-5">
            {currentUser ? (
              <div>
                <div className="relative ml-3 ">
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                    onClick={() => setAvatar(!avatar)}
                  >
                    <img
                      className="h-8 w-8 rounded-full bg-cover"
                      src={currentUser.photoURL}
                      alt={currentUser.displayName}
                    />
                  </button>

                  <div
                    className={`absolute md:right-0 -right-100 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform ease-out duration-100 opacity-0 scale-95 ${
                      avatar ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                      Settings
                    </a>
                    <a
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <OutlineLinkButton
                children="Masuk"
                className="px-5"
                path="/login"
              />
            )}
            {theme ? (
              <Sun
                size={34}
                weight="fill"
                onClick={() => {
                  setTheme(false);
                  localStorage.setItem("mode", "light");
                }}
              />
            ) : (
              <Moon
                size={34}
                weight="fill"
                onClick={() => {
                  localStorage.setItem("mode", "dark");
                  setTheme(true);
                }}
                className="text-gray-500"
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
