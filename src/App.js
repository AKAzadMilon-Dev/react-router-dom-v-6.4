import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const routerLink = createBrowserRouter(createRoutesFromElements(

))

function App() {
  return <RouterProvider router={routerLink}/>
}

export default App;
