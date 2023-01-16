import { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { List, X, Sun, Moon } from "phosphor-react";
import { NavMenu } from "../data";
import { OutlineLinkButton } from "../components";
import { useUser } from "../hooks/useUser";

export function Header() {
  const [open, setOpen] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("mode") === "dark" ? true : false
  );
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const active = NavMenu.findIndex((e) => "/" + e.path === pathname);

  const { currentUser } = useContext(AuthContext);
  const { data } = useUser();

  useEffect(() => {
    if (theme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  function handleSignOut() {
    localStorage.setItem("user", null);
  }

  return (
    <div className="flex justify-center items-center shadow w-full sticky top-0 z-30 bg-white dark:bg-slate-800 font-medium">
      <nav className="w-full flex justify-between items-center my-3 mx-6 lg:space-x-20">
        <img src="/assets/logo/main.png" alt="HIDOC" className="w-20" />
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
              <div className="relative">
                <button
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => setAvatar(!avatar)}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src={data.photoURL ? data.photoURL : "/default_profile.png"}
                    alt={data.namaDepan}
                  />
                </button>
                <div
                  className={`${
                    avatar ? "fixed bg-transparent inset-0 z-50" : ""
                  } `}
                  onClick={() => setAvatar(!avatar)}
                >
                  <div
                    className={`avatar  ${
                      avatar ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  >
                    <Link to="/profile">Your Profile</Link>
                    <a>Settings</a>
                    <a onClick={handleSignOut} href="/">
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
                onClick={() => {
                  setTheme(false);
                  localStorage.setItem("mode", "light");
                }}
              />
            ) : (
              <Moon
                size={34}
                onClick={() => {
                  setTheme(true);
                  localStorage.setItem("mode", "dark");
                }}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
