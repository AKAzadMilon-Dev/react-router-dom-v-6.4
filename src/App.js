import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Roots from "./components/RootLayout";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Userlist, { user } from "./components/Userlist";

const routerLink = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Roots/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/userlist" element={<Userlist/>} loader={user} errorElement={<p>Data nai</p>} ></Route>
  </Route>
))

function App() {
  return <RouterProvider router={routerLink}/>
}

export default App;
