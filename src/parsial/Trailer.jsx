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
    <div className="absolute z-[100] bg-[rgba(0,0,0,.8)] left-0 top-0 w-screen h-screen flex items-center justify-center ">
        <Link
            onClick={()=>navigate(-1)}
             className=" absolute top-[5%] right-[5%] hover:text-[#6556CD] ri-close-fill text-3xl text-white"
            >
          </Link>
          {ytmovie ?<ReactPlayer
           controls
            width={1300}
            height={650} 
            url={`https://www.youtube.com/watch?v=${ytmovie.key}`}/>:<Notfound/>}
        </div>
    )
}
export default Trailer