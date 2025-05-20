import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import clsx from "clsx";
import LanguageSync from "./lang-sync";

function App() {
  const { pathname } = useLocation();

  return (
    <main className="flex flex-col h-screen overflow-x-hidden">
      <LanguageSync />

      <Header />

      <div
        className={clsx("flex-auto bg-PAGE_BG", {
          "pt-6 md:pt-20 md:pb-[200px] pb-[72px]": pathname !== "/",
        })}
      >
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;
