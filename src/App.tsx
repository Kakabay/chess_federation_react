import { Outlet } from 'react-router-dom';
import { Button } from './components/ui/button';

function App() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
