import { Link } from "react-router-dom"
import Dropdwon from "./Dropdwon"
import noimage from '/PNA.jpg'

function Horizontalcard({data}){
    
   return(
    <>
    
        
       
     <div className="flex overflow-hidden overflow-x-auto h-[35vh] w-[100%] ">
        {data.length >0 ? data.map((d,i)=>(
        <Link to={`/${d.media_type}/details/${d.id}`}  key={i} className="bg-zinc-900 p-3  rounded-md text-white flex-shrink-0 w-[15%] h-[100%] mr-5  ">
            <img className="w-full h-[50%] object-cover" src={d.backdrop_path||d.profile_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path||d.profile_path}` : noimage}></img>
            <h1 className="text-white text-lg font-semibold  mb-2 ">
                {d.title||d.original_name||d.original_title||d.name }
            </h1>
            <p className=" text-white text-xs mb-2">{d.overview.slice(0,40)} <span className="text-blue-500">...more</span></p>
        </Link>
        )):<h1 className="mt-5 text-3xl text-white font-bold">Nothing to Show</h1>}
        </div>
       

    </>
   )
}
export default Horizontalcard