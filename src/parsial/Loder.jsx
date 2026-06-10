import loader from '/Loder.gif'
function Loader(){
    return(
        <>
        <div className='flex justify-center items-center bg-black min-h-screen w-full p-6'>
        <img className='w-full max-w-sm h-auto' src={loader} alt="Loading..." />
        </div>
       
        </>
    )
}
export default Loader