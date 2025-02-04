// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

// import Gift from "./pages/Gift"
import Homepage from "./pages/Homepage"
import Gift from "./pages/Gift"
import WeddingProgram from "./pages/WeddingProgram"
import Food from "./pages/Food"
import Photo from "./pages/Photo"
import Drik from "./pages/Drik"
import Picture from "./pages/Picture"



const App = () => {
  return (
    <>      
        {/* <Homepage/> */}
        {/* <Gift/> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/gift" element={<Gift/>}></Route>
            <Route path="/program" element={<WeddingProgram/>}></Route>
            <Route path="/food" element={<Food/>}></Route>
            <Route path="/drink" element={<Drik/>}></Route>
            <Route path="/photo" element={<Photo/>}></Route>
            <Route path="/picture" element={<Picture/>}></Route>
            <Route path="/visitor" element={<Picture/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App