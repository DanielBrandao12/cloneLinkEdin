import Inicio from './scenes/inicio';
import MinhaRede from './scenes/minhaRede';
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Inicio/>
      },
      {
        path: "/MinhaRede",
        element: <MinhaRede/>
      }

  ]);

  return (
    
      <RouterProvider router={router}/>

  );
}

export default App;
