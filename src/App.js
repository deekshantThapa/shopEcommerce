import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./Layouts/RootLayout";
import HomeLayout from "./Layouts/HomeLayout";

// pages
import Home from "./pages/Home/Home";
import { loadNewArrivalsClothes } from "./pages/Home/NewArrivals";
import Contact from "./pages/Contact";
import ProductDetail, { loadProductDetail } from "./pages/Home/ProductDetail";

const customRouter = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>

      <Route index element={<Home/>} loader={loadNewArrivalsClothes}/>
      <Route path=":id" element={<ProductDetail/>} loader={loadProductDetail}/>

      <Route path="contact" element={<Contact/>}/>

    </Route>

  )
)

export default function App(){
  return(
    <RouterProvider router={customRouter} />
  )
}