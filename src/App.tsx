import { Outlet } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

function App() {
  return (
    <main className="flex flex-col h-screen">
      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;
