import axios from "../utils/axios";
import Sidenav from "../parsial/Sidenav"
import TopNav from "../parsial/Topnav"
import { useEffect, useState } from "react";
import Header from "../parsial/Header";
import Horizontalcard from "../parsial/Horizontolcard";
import Dropdwon from "../parsial/Dropdwon";
import Loader from "../parsial/Loder";

function Home(){
    const [category,setcategory]=useState('all')
    const [wallpaper,setwallpaper]=useState(null)
    const [trendingdata,settrendingdata]=useState(null);
    const getwallpaper=async ()=>{
        try {
            const data=await axios.get(`/trending/all/day`);
            let random= data.data.results[(Math.random()*data.data.results.length).toFixed()]
            setwallpaper(random)
           
        }  
        catch (error){
           console.log(error) 
        }
       
    }

    const gettrending=async ()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/day`);
            settrendingdata(data.results)
        }  
        catch (error){
           console.log(error) 
        }
       
    }

    useEffect(()=>{
       !wallpaper && getwallpaper();
        gettrending();
    },[category])

   
    
    return wallpaper&&trendingdata ?(
        
        <>
        <div className="flex w-screen h-screen">
        <Sidenav/>
        <div className="w-[100%] overflow-x-hidden oveflow-auto">
            <TopNav/>
            <Header data={wallpaper}/>

            <div className="px-10  flex justify-between my-5">
               <h1 className="text-zinc-400 text-3xl font-semibold">Trending</h1>
               <Dropdwon
                title={"Filter"}
                option={['tv','movie','all']} 
                func={(e)=>setcategory(e.target.value)}
                />
            </div>

            <Horizontalcard data={trendingdata}/>
        </div>
        </div>
        </>
    ):<Loader/>
}
export default Home