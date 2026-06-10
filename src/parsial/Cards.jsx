import { Link } from "react-router-dom"
import noimage from '/PNA.jpg'

function Card({data,title}){
    return(
        <div className="flex px-4 sm:px-[5%] flex-wrap justify-center w-full h-full overflow-y-auto bg-[#1F1E24] pt-10 gap-6">
        {data.map((d,i)=>(
            <Link  to={`/${d.media_type || title}/details/${d.id}`} key={i} className = "relative w-full sm:w-[45vw] md:w-[30vw] lg:w-[25vh] mb-8">
                <img className = "w-full h-[45vh] sm:h-[40vh] md:h-[38vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-md" src={d.poster_path || d.backdrop_path || d.profile_path?`https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path}`:noimage} alt={d.title || d.name}></img>
                <h1 className = "text-zinc-300 text-xl font-bold mt-3">{d.title || d.original_name || d.original_title || d.name  }</h1>
             {d.vote_average && 
              <div className="absolute right-0 bottom-0 translate-x-1/2 w-[6vh] text-lg font-semibold rounded-full h-[6vh] bg-black text-white flex items-center justify-center">
                 {(d.vote_average * 10).toFixed()}<sup className="text-xs">%</sup>
              </div>}
            </Link>
        ))}
        </div>
    )
}
export default Card