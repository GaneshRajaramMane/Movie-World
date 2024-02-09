import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movie from "./components/Movie"
import Tvshow from "./components/Tvshows"
import People from "./components/People"
import Moviedetail from "./components/Moviedetails"
import Tvdetail from "./components/Tvdetails"
import Persondetail from "./components/Persondetail"
import Trailer from "./parsial/Trailer"
import Notfound from "./parsial/Notfound"



function App() {
  document.title="movieworld.Homepage"

  return (
    <>
   
     <div className=" bg-[#1F1E24] w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/movie/details/:id" element={<Moviedetail/>}>
          <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/tv" element={<Tvshow/>}/>
        
       +<Route path="/tv/details/:id" element={<Tvdetail/>}>
       <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
       </Route>
        <Route path="/people" element={<People/>}/>
        <Route path="/people/details/:id" element={<Persondetail/>}/>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
      </div> 
    </>
  )
}

export default App
