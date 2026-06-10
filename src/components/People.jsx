import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../parsial/Loder";
import TopNav from "../parsial/Topnav";
import Dropdwon from "../parsial/Dropdwon";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../parsial/Cards";

function People(){
    
    const navigate=useNavigate()
    const [category,setcategory]=useState("popular")
    const [person,setperson]=useState([])
    const [page, setPage] = useState(1);
    const [hasMore,sethasMore]=useState(true)
    document.title="MovieWorld | STARS"

    const getperson=async ()=>{
        try {
            const {data}=await axios.get(`/person/${category}?page=${page}`);
            
            if(data.results.length > 0){
            setperson((prevState)=>[...prevState,...data.results])
            setPage((prevPage) => prevPage + 1);
            sethasMore(true)
            }
           else{
            sethasMore(false)
           }
        }  
        catch (error){
           console.log(error) 
        }
       
    }

   const  refreshhandle= ()=>{
    if(person.length === 0){
        getperson();
    }
    else{
        setPage(1);
        setperson([])
        getperson()
    }
   }

    useEffect(()=>{
        refreshhandle();
    },[category])

    return person ? (
        <>
        <div className="min-h-screen w-full text-white bg-[#1F1E24] ">
            <div className="px-4 sm:px-[5%] flex flex-col md:flex-row md:items-center gap-4 w-full">
               
               <h1 className="text-2xl font-bold text-zinc-400">
               <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
               People</h1>
               <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
               <TopNav/>
               </div>
               
            </div>
            
            <InfiniteScroll
            dataLength={person.length}
            next={getperson}
            hasMore={hasMore}
            loader={<Loader/>}
            >
            <Card data={person} title='people'/>
            </InfiniteScroll>
            
        </div>
        </>
    ):<Loader/>
}
export default People