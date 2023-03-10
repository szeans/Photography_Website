import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './App.css';
import { BNW } from './pages/BNW';
import { Color } from './pages/Color';
import { Contact } from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Color />,
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
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
