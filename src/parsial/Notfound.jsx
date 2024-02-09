import { Link, useNavigate } from 'react-router-dom'
import not from '/404.gif'
function Notfound(){
   const navigate= useNavigate()
    return(
        <div className=' absolute top-0 left-0 flex justify-center items-center bg-red w-screen h-screen '>
             <Link
            onClick={()=>navigate(-1)}
             className=" absolute top-[25%] right-[33%] hover:text-[#6556CD] ri-close-fill text-3xl text-white"
            >
          </Link>
        <img className='w-[27%] h-[40%]' src={not}></img>
        </div>
    )
}
export default Notfound