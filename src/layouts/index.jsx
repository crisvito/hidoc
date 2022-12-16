import { Header } from "./header";
import { Footer } from "./footer";

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full min-h-[420px] mx-auto flex-1">
        <div className="flex justify-center">
          <div className="w-full max-w-[1024px] lg:px-0 px-8">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
