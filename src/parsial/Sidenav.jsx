import { Link } from "react-router-dom"

function Sidenav(){
    return(
        <div className="w-[20%] border-r-2 border-zinc-200 text-white font-bold p-10">
         <h1 className="text-2xl flex gap-3">
         <i className=" text-[#6556CD] ri-tv-fill"></i>
          Movie World
         </h1>
         <nav className="flex flex-col text-md text-zinc-400 gap-1">
         <h1 className="text-xl text-zinc-200 font-bold mb-5 mt-8">New Feeds</h1>
         <Link to="/trending" className="p-4 hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg "> <i className="mr-2 ri-fire-fill"></i>Trending</Link>
         <Link to="/popular" className="p-4 hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg "><i className="mr-2 ri-bard-fill"></i>Popular</Link>
         <Link to="/movie" className="p-4 hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg "><i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
         <Link to="/tv" className="p-4 hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg "><i className="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
         <Link to="/people" className="p-4 hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg mb-5"><i className="mr-2 ri-team-fill"></i>People</Link>
         </nav>
         <hr className="border-none h-[1px] bg-zinc-400" />
         <nav className="flex flex-col text-md text-zinc-400 gap-1">
         <h1 className="text-xl text-zinc-200 font-bold mb-5 mt-8">Website Information</h1>
         <Link className="p-4 hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg "><i className="mr-2 ri-information-2-fill"></i>About</Link>
         <Link className="p-4 hover:text-white hover:bg-[#6556CD] duration-300 rounded-lg "><i className="mr-2 ri-phone-fill"></i>Contact Us</Link>
         </nav>
        
        </div>
    )
    
}

export default Sidenav