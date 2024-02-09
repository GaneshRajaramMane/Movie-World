import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import { asyncloadmovie, removemovie } from "../store/actions/Movieactions"
import Loader from '../parsial/Loder'
import Horizontalcard from "../parsial/Horizontolcard"



function Moviedetails(){
   const {pathname}=useLocation()
   const navigate=useNavigate()
   const {id}= useParams()
   const {info}=useSelector((state)=>state.movie)
   
   const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(asyncloadmovie(id))
    return()=>{
        dispatch(removemovie())
    }
    },[id])

    return info ?(
        <div className="relative w-full h-[145vh] px-[10%]"
        style={{
            background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
            backgroundSize:"cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 10%",
           
         }} >
            {/* navigation part 1*/}
          <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl">
           <Link
            onClick={()=>navigate(-1)}
             className="hover:text-[#6556CD] ri-arrow-left-line"
            >
          </Link>
          <a target="_blank" href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-line"></i></a>
          <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>IMDB</a>
               
          </nav>

          {/* poster and details part 2*/}
          <div className="w-full flex mt-2  ">
          <img className = "h-[60vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-md" src={info.detail.poster_path || info.detail.backdrop_path || info.detail.profile_path?`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path || info.detail.profile_path}`:"PNA.jpg"}></img>
          <div className="content ml-[5%] ">
         
          <h1 className="text-white  text-4xl font-black">{info.detail.title || info.detail.original_name || info.detail.original_title || info.detail.name  }
          <span className="text-xl font-bold text-zinc-300">({info.detail.release_date.split("-")[0]})</span>
          </h1>
          
          <div className="text-white font-bold my-2 gap-5 gap flex items-center">
            <span className=" w-[7vh] text-xl font-semibold rounded-full h-[7vh] bg-black text-white flex items-center justify-center">
                 {(info.detail.vote_average * 10).toFixed()}<sup>%</sup>
              </span>
              <h1 className="text-xl w-[60px]">User Score</h1>
              <h1>{info.detail.release_date}</h1>
              <h1>{info.detail.genres.map((w)=>w.name).join(",")}</h1>
              <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-lg font-bold italic text-zinc-200">{info.detail.tagline}</h1>
          <h1 className="text-xl my-3 font-bold text-white">Overview</h1>
          <p className=" text-white">{info.detail.overview}</p>
          <h1 className="text-xl my-3 font-bold text-white">Movie Translation</h1>
          <p className=" text-white mb-5 ">{info.translation.join(' ')}</p>
          <Link className="p-3 bg-[#6556CD] rounded-lg text-white font-semibold " to={`${pathname}/trailer`}><i className="ri-google-play-fill"></i> Watch Trailer</Link>

            </div>
             
          </div>
           
           {/* platform 3*/}
          <div className=" flex flex-col gap-y-5 mt-5 w-[80%]">
           {info.watchproviders &&
            info.watchproviders.flatrate &&(
            <div className="flex gap-5 text-zinc-100 items-center">
                <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w)=>(
                <img title={w.provider_name} className="w-[5vh] h-[5vh] rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}></img>
            ))}
            </div>
            )}
          
            {info.watchproviders &&
            info.watchproviders.rent &&(
            <div className="flex gap-5 text-zinc-100 items-center">
                <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w)=>(
                
                <img title={w.provider_name} className="w-[5vh] h-[5vh] rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}></img>
            ))}
            </div>
            )}
          
          {info.watchproviders &&
            info.watchproviders.buy &&(
            <div className="flex gap-5 text-zinc-100 items-center">
                <h1>Available To Buy </h1>
            {info.watchproviders.buy.map((w)=>(
                <img title={w.provider_name} className="w-[5vh] h-[5vh] rounded-md" src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}></img>
            ))}
            </div>
            )}
          </div>
          <hr className="mt-5 border-none h-[3px] bg-zinc-500"></hr>
           {/* recommdation and similar stuff 4*/}
           <div className="mt-5">
            <h1 className="text-2xl font-bold text-white mb-3">Recommendation & Similar Stuff</h1>
           <Horizontalcard data={info.recommendations.length > 0 ? info.recommendations :info.similar} />
           </div>

           <Outlet/>
        </div>
    ):<Loader/>
}
export default Moviedetails