import { Header } from "./header";
import { Footer } from "./footer";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full min-h-[420px] mx-auto flex-1 bg-slate-200 dark:bg-slate-900">
        <div className="flex justify-center">
          <div className="w-full max-w-[1024px]">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
