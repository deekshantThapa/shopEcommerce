import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";

// pages
import Home from "./pages/Home/Home";
import { NewArrivalsClothesLoader } from "./pages/Home/NewArrivals";
import Contact from "./pages/Contact";

const customRouter = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>

      <Route index element={<Home/>} loader={NewArrivalsClothesLoader}/>
      <Route path="contact" element={<Contact/>}/>
      
    </Route>

  )
)

export default function App(){
  return(
    <RouterProvider router={customRouter} />
  )
}