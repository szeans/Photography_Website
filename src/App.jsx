import {RouterProvider, createBrowserRouter} from "react-router-dom";

import './App.css';
import {Index} from './pages';
import {BNW} from './pages/BNW';
import {Color} from './pages/Color';
import {Contact} from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BNW />,
  },
  {
    path: "/bnw",
    element: <BNW />,
  },
  {
    path: "/color",
    element: <Color />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
