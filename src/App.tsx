import { Outlet } from 'react-router-dom';
import Header from './components/shared/header';
import Footer from './components/shared/footer';

function App() {
  return (
    <main className="flex flex-col h-screen overflow-x-hidden">
      <Header />

      <div className="flex-auto bg-PAGE_BG">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;
