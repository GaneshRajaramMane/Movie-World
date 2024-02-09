import { Link } from "react-router-dom"

function Header({data}){

    
    return(
        <>
        <div style={{
           background:`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path||data.profile_path})`,
           backgroundSize:"cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "top 10%",
          
        }} className="h-[50vh] w-full flex flex-col justify-end items-start pl-[7%] pb-5 ">
            
            <h1 className="w-[70%] text-white text-5xl font-semibold  mb-2 ">{data.title||data.original_name||data.original_title||data.name }</h1>
            <p className="w-[70%] text-white text-lg w-[70%] mb-2">{data.overview.slice(0,200)} <Link to={`/${data.media_type}/details/${data.id}`}  className="text-blue-500">...more</Link></p>
            <p className="w-[70%] text-white text-lg w-[70%] mb-2  flex">
              <i className="mr-1 text-yellow-500 ri-megaphone-fill"></i>{data.release_date|| "No Information"}
              <i className="mr-1 ml-5 text-yellow-500 ri-album-fill"></i>{data.media_type.toUpperCase()}
            </p>
            <Link to={`${data.media_type}/details/${data.id}/trailer`} className="mb-4 text-white font-bold p-3 rounded-md  bg-[#6556CD]">Watch Tralior</Link>
        </div>
        </>
    )
}
export default Header