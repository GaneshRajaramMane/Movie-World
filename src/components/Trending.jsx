import { useNavigate } from "react-router-dom"
import TopNav from "../parsial/Topnav"
import Dropdwon from "../parsial/Dropdwon"
import { useEffect, useState } from "react"
import axios from "../utils/axios"
import Loader from "../parsial/Loder"
import Card from "../parsial/Cards"
import InfiniteScroll from "react-infinite-scroll-component"

function Trending(){
    const navigate=useNavigate()
    const [category,setcategory]=useState("all")
    const [duration,setduration]=useState("day")
    const [trendingdata,settrendingdata]=useState([])
    const [page, setPage] = useState(1);
    const [hasMore,sethasMore]=useState(true)
    document.title="MovieWorld | Trending" + category.toUpperCase()


    const gettrending=async ()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/${duration}?page=${page}`);
            
            if(data.results.length > 0){
            settrendingdata((prevState)=>[...prevState,...data.results])
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
    if(trendingdata.length === 0){
        gettrending();
    }
    else{
        setPage(1);
        settrendingdata([])
        gettrending()
    }
   }

    useEffect(()=>{
        refreshhandle();
    },[category,duration])

  

    return trendingdata ? (
        <>
        <div className="w-screen h-screen text-white bg-[#1F1E24] ">
            <div className="px-[5%] flex items-center w-full ">
               <h1 className="text-2xl font-bold text-zinc-400">
               <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
               Trending</h1>
               <div className="w-[80%] flex items-center">
               <TopNav/>
               <Dropdwon title={'Trending'} option={['tv','movie','all']} func={(e)=>setcategory(e.target.value)}/>
               <div className="w-[5%]"></div>
               <Dropdwon title={'Duration'} option={['week','day']} func={(e)=>setduration(e.target.value)} />
               </div>
               
            </div>
            
            <InfiniteScroll
            dataLength={trendingdata.length}
            next={gettrending}
            hasMore={hasMore}
            loader={<h1>Loading..</h1>}
            >
            <Card data={trendingdata} title={category}/>
            </InfiniteScroll>
            
        </div>
        </>
    ):<Loader/>
}
export default Trending