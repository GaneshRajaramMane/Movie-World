import loader from '/Loder.gif'
function Loader(){
    return(
        <>
        <div className='flex justify-center items-center bg-black w-screen h-screen'>
        <img className='w-[27%] h-[40%]' src={loader}></img>
        </div>
       
        </>
    )
}
export default Loader