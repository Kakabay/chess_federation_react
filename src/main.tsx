import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home.tsx';
import News from './pages/news.tsx';

import './index.css';
import App from './App.tsx';
import About from './pages/about.tsx';
import Events from './pages/events.tsx';
import Contacts from './pages/contacts.tsx';
import NewsSingle from './pages/news-single.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'news', element: <News /> },
      { path: 'about', element: <About /> },
      { path: 'events', element: <Events /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'news/:pageId', element: <NewsSingle /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
