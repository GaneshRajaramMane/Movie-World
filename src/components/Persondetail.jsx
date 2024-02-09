import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link,  useLocation, useNavigate, useParams } from "react-router-dom"
import { asyncloadperson, removeperson } from "../store/actions/Personactions"
import Loader from '../parsial/Loder'
import Horizontalcard from "../parsial/Horizontolcard"
import Dropdwon from "../parsial/Dropdwon"

function Persondetail(){
    const [category,setcategory]=useState("movie")
    
    const navigate=useNavigate()
    const {id}= useParams()
    const {info}=useSelector((state)=>state.person)
    
    const dispatch=useDispatch()
     useEffect(()=>{
     dispatch(asyncloadperson(id))
     return()=>{
         dispatch(removeperson())
     }
     },[id])
    return info ?(
        <div className="w-screen px-[10%] h-[160vh] bg-[#1F1E24] pb-20s">
         {/* navigation part 1*/}
         <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-xl">
           <Link
            onClick={()=>navigate(-1)}
             className="hover:text-[#6556CD] ri-arrow-left-line"
            >
          </Link>  
         </nav>
         <div className="w-full flex ">
          {/*part 2 poster and detais */}
          <div className="w-[20%] ">
          <img className = "h-[35vh] w-full shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] rounded-md" src={ info.detail.profile_path?`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`:"PNA.jpg"}></img>
          <hr className="mt-2 border-none h-[3px] bg-zinc-500"></hr>
          {/*social media link */}
          <div className="text-white text-2xl flex gap-x-5 justify-center">
          <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-line"></i></a>
          <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}/`}><i className="ri-facebook-circle-fill"></i></a>
          <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}/`}><i className="ri-instagram-line"></i></a>
          <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}/`}><i className="ri-twitter-x-fill"></i></a>
          </div>
           {/*personal informatio*/}
           <h1 className="text-zinc-300 font-bold text-2xl mt-5 my-2"> personl info</h1>
           <h1 className="text-zinc-400 font-semibold text-lg ">Known for </h1>
           <h1 className="text-zinc-400 font-semibold text-sm ">{info.detail.known_for_department}</h1>
           <h1 className="text-zinc-400 font-semibold text-lg mt-1 ">Gender </h1>
           <h1 className="text-zinc-400 font-semibold text-sm ">{info.detail.gender === 2 ? "male" : "female"}</h1>
           <h1 className="text-zinc-400 font-semibold text-lg mt-1 ">Birthday </h1>
           <h1 className="text-zinc-400 font-semibold text-sm ">{info.detail.birthday}</h1>
           <h1 className="text-zinc-400 font-semibold text-lg mt-1 ">Death Day </h1>
           <h1 className="text-zinc-400 font-semibold text-sm ">{info.detail.deathday ? info.detail.deathday:"Still Alive" }</h1>
           <h1 className="text-zinc-400 font-semibold text-lg mt-1 ">Place Of Birth </h1>
           <h1 className="text-zinc-400 font-semibold text-sm ">{info.detail.place_of_birth }</h1>
           <h1 className="text-zinc-400 font-semibold text-lg mt-1 ">Also Known as </h1>
           <h1 className="text-zinc-400 font-semibold text-sm ">{info.detail.also_known_as.join(",") }</h1>
          </div>
           {/*part 3 right detail and information */}
              <div className="w-[80%] ml-[5%]">
              <h1 className="text-zinc-300 font-black text-5xl my-3">{info.detail.name}</h1>
              <h1 className="text-zinc-300 font-bold text-xl mt-2">Biography</h1>
              <p className="text-zinc-400   my-1">{info.detail.biography.slice(0,800)}</p>
              <h1 className="text-zinc-300 font-bold text-xl my-3">Known For</h1>
              <Horizontalcard data={info.combinecredits.cast}/>
              <div className="w-full flex justify-between my-5">
              <h1 className="text-zinc-300 font-bold text-xl my-3">Acting</h1>
              <Dropdwon title="category" option={["tv","movie"]} func={(e)=>setcategory(e.target.value)}/>
              </div>
              <div className="w-full h-[50vh] text-zinc-400 shadow-xl shadow-[rgba(255,255,255,.2)] overflow-x-hidden overflow-y-auto border-2 border-zinc-700 p-5 ]">
                {info[category+"credits"].cast.map((v,i)=>(
                    
                     <li key={i} className="hover:text-white duration-300 mt-5 cursor-pointer">
                    <Link to={`/${category}/details/${v.id}`}>
                    <span>
                    {category} : {v.title || v.original_name || v.original_title || v.name}</span>
                    <span className="block pl-6">Character  : {v.character ? v.character:"Not available Sorry"}</span>
                    </Link>
                    </li>
                    
                ))}
                 
              </div>
              </div>
         

         </div>
         
        </div>

    ):<Loader/>
}
 export default Persondetail