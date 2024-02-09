import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../parsial/Loder";
import TopNav from "../parsial/Topnav";
import Dropdwon from "../parsial/Dropdwon";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../parsial/Cards";

function Tvshow(){
    
    const navigate=useNavigate()
    const [category,setcategory]=useState("airing_today")
    const [tvshow,settvshow]=useState([])
    const [page, setPage] = useState(1);
    const [hasMore,sethasMore]=useState(true)
    document.title="MovieWorld | TVSHOW" + category.toUpperCase()

    const gettvshow=async ()=>{
        try {
            const {data}=await axios.get(`/tv/${category}?page=${page}`);
            
            if(data.results.length > 0){
            settvshow((prevState)=>[...prevState,...data.results])
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
    if(tvshow.length === 0){
        gettvshow();
    }
    else{
        setPage(1);
        settvshow([])
        gettvshow()
    }
   }

    useEffect(()=>{
        refreshhandle();
    },[category])

    return tvshow ? (
        <>
        <div className="w-screen h-screen text-white bg-[#1F1E24] ">
            <div className="px-[5%] flex items-center w-full ">
               <h1 className="text-2xl font-bold text-zinc-400">
               <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
               TvShow {category}</h1>
               <div className="w-[80%] mx-auto flex items-center">
               <TopNav/>
               <Dropdwon title={'Category'} option={['on_the_air','popular','top_rated','airing_today']} func={(e)=>setcategory(e.target.value)}/>
               
              
               </div>
               
            </div>
            
            <InfiniteScroll
            dataLength={tvshow.length}
            next={gettvshow}
            hasMore={hasMore}
            loader={<Loader/>}
            >
            <Card data={tvshow} title='tv'/>
            </InfiniteScroll>
            
        </div>
        </>
    ):<Loader/>
}
export default Tvshow