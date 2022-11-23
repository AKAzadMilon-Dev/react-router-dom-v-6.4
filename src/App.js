import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Roots from "./components/Roots";

const routerLink = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Roots/>}></Route>
))

function App() {
  return <RouterProvider router={routerLink}/>
}

export default App;
