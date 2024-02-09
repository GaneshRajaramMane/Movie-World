import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../parsial/Loder";
import TopNav from "../parsial/Topnav";
import Dropdwon from "../parsial/Dropdwon";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../parsial/Cards";

function Popular(){
    
    const navigate=useNavigate()
    const [category,setcategory]=useState("movie")
    const [popular,setpopular]=useState([])
    const [page, setPage] = useState(1);
    const [hasMore,sethasMore]=useState(true)
    document.title="MovieWorld | Popular" + category.toUpperCase()

    const getpopular=async ()=>{
        try {
            const {data}=await axios.get(`/${category}/popular?page=${page}`);
            
            if(data.results.length > 0){
            setpopular((prevState)=>[...prevState,...data.results])
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
    if(popular.length === 0){
        getpopular();
    }
    else{
        setPage(1);
        setpopular([])
        getpopular()
    }
   }

    useEffect(()=>{
        refreshhandle();
    },[category])

    return popular ? (
        <>
        <div className="w-screen h-screen text-white bg-[#1F1E24] ">
            <div className="px-[5%] flex items-center w-full ">
               <h1 className="text-2xl font-bold text-zinc-400">
               <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
               Popular</h1>
               <div className="w-[80%] mx-auto flex items-center">
               <TopNav/>
               <Dropdwon title={'Category'} option={['tv','movie']} func={(e)=>setcategory(e.target.value)}/>
               
              
               </div>
               
            </div>
            
            <InfiniteScroll
            dataLength={popular.length}
            next={getpopular}
            hasMore={hasMore}
            loader={<h1>Loading..</h1>}
            >
            <Card data={popular} title={category}/>
            </InfiniteScroll>
            
        </div>
        </>
    ):<Loader/>
}
export default Popular