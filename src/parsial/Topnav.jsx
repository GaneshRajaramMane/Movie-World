
import axios from '../utils/axios'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function TopNav(){
    const [query,setquery]=useState("")
    const [datas,setdata]=useState()
   
    const searchdata=async ()=>{
        try {
            const data=await axios.get(`/search/multi?query=${query}`);
              setdata(data.data.results)
            } catch (error){
             console.log(error) 
            }
       
    }

    useEffect(()=>{
        searchdata();
    },[query])
    return(
        <>
        <div className="relative z-[100] w-full px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <i className="text-zinc-400 text-3xl ri-search-line"></i>
          <input
           onChange={(e)=>setquery(e.target.value)}
           value={query} 
           className="w-full sm:w-[30rem] max-w-full p-2 rounded-full outline-none border-none bg-transparent text-white"
           type="text"
           placeholder="Search Anything you want">
          </input>
           {query.length>0 &&
           <i onClick={()=>setquery("")} className=" text-zinc-400 text-3xl ri-close-line"></i>
           }
        </div>

        <div className="rounded-md absolute left-0 top-full mt-2 w-full sm:w-[30rem] max-h-[50vh] bg-zinc-400 overflow-auto shadow-lg">
        { datas && datas.length > 0 && datas.map((val, ind) => (
          <Link to={`${val.media_type}/details/${val.id}`}
            key={ind}
            className="font-semibold hover:text-black hover:bg-zinc-200 duration-300 text-zinc-700 p-4 w-full flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img className='mr-5 w-[30%] h-full rounded-sm' src={val.backdrop_path||val.profile_path? `https://image.tmdb.org/t/p/original/${val.backdrop_path||val.profile_path}`:"PNA.jpg"} alt="Description" /> 
            <span className="">{val.title||val.original_name||val.original_title||val.name }
            </span>
          </Link>
        ))}
          
        </div>
        
        </div>
        
        </>
    )
}
export default TopNav