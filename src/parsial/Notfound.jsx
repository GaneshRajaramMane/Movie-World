import { Link, useNavigate } from 'react-router-dom'
import not from '/404.gif'
function Notfound(){
   const navigate= useNavigate()
    return(
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-red-600 p-6'>
             <Link
            onClick={()=>navigate(-1)}
             className="absolute top-6 right-6 hover:text-[#6556CD] ri-close-fill text-3xl text-white"
            >
          </Link>
        <img className='w-full max-w-xl h-auto' src={not} alt="Not Found"></img>
        </div>
    )
}
export default Notfound