import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from './pages/home'

import About from './pages/about'
import Nav from './components/nav'
import Footer from './components/footer'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/nav', element: <Nav /> },
  { path: '/footer', element: <Footer /> }


]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
