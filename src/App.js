import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";

// pages
import Home from "./pages/Home/Home";
import { CasualClothesLoader } from "./pages/Home/Casual";
import Contact from "./pages/Contact";

const customRouter = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} loader={CasualClothesLoader}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>

  )
)

export default function App(){
  return(
    <RouterProvider router={customRouter} />
  )
}