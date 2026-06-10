import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Notfound from "./Notfound"

function Trailer(){
    const navigate=useNavigate()
   const  {pathname}=useLocation()
   const category =pathname.includes("movie") ? "movie":"tv"
    const ytmovie=useSelector((state)=>state[category].info.videos)
    return  (
    <div className="absolute inset-0 z-[100] bg-[rgba(0,0,0,.8)] flex items-center justify-center p-4">
        <Link
            onClick={()=>navigate(-1)}
             className=" absolute top-5 right-5 hover:text-[#6556CD] ri-close-fill text-3xl text-white"
            >
          </Link>
          {ytmovie ?
          <div className="w-full max-w-5xl h-[50vh] sm:h-[70vh]">
            <ReactPlayer
             controls
              width="100%"
              height="100%" 
              url={`https://www.youtube.com/watch?v=${ytmovie.key}`}/>
          </div> : <Notfound/>}
        </div>
    )
}
export default Trailer