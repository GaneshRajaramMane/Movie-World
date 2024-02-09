import { Link } from "react-router-dom"
import noimage from '/PNA.jpg'

function Card({data,title}){
    return(
        <div className="  flex px-[5%] flex-wrap justify-center w-full h-full  overflow-y-auto  bg-[#1F1E24] pt-10">
        {data.map((d,i)=>(
            <>
            <Link  to={`/${d.media_type || title}/details/${d.id}`} key={i} className = " relative w-[25vh] mb-[5%] mr-[5%]   ">
                <img className = "h-[38vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-md" src={d.poster_path || d.backdrop_path || d.profile_path?`https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path}`:noimage}></img>
                <h1 className = " text-zinc-300 text-xl font-bold mt-3  ">{d.title || d.original_name || d.original_title || d.name  }</h1>
             {d.vote_average && 
              <div className="absolute right-[-10%] bottom-[25%] w-[6vh] text-xl font-semibold rounded-full h-[6vh] bg-black text-white flex items-center justify-center">
                 {(d.vote_average * 10).toFixed()}<sup>%</sup>
              </div>}
             
            </Link>
           
           </>
        ))}
        </div>
    )
}
export default Card