import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='  bg-[#DCEDF8] pb-24 pt-[133px] py-6 w-[100%]'> 
            <div className='border-blue-900 gap-18 lg:gap-35 xl:gap-18 lg:flex w-29/30 sm:w-3/4 mx-auto'>
            <div className='lg:w-1/2 w-full flex  flex-col justify-center '>
<h1 className='font-bold font-[Plus-Jakarta-Sans] lg:w-[600px] flex justify-center items-center  text-center sm:text-left  text-[1.5rem]  sm:pt-0 sm:text-[35px] pt-6  pl-0 lg:pl-6 w-full'>Online coaching that delivers results</h1>
<p className='font-bold pt-3 sm:pt-12 pl-0 flex lg:flex-none justify-center lg:pl-6 text-[#494A4A]'>Explore our online courses</p>
<div className='lg:flex flex justify-center  sm:pl-6 pt-4  gap-2'>
<span className='border-2 text-[13px] font-bold text-center self-center border-[#0555B1] cursor-pointer px-5 py-2.5 rounded-3xl'>NEET</span>
<span className='border-2 border-[#0555B1]  text-[13px] font-bold text-center cursor-pointer self-center px-5 py-2.5 rounded-3xl'>JEE</span>
<span className='border-2 border-[#0555B1] text-[13px] font-bold text-center cursor-pointer self-center px-5 py-2.5 rounded-3xl'>Class 6-10</span>
</div>
        </div>
        <div className='fit-content lg:flex-none flex justify-center lg:my-0 my-8'>
            <img src="allen.avif" alt="" className='h-[220px] w-28/30 sm:27/30 lg:w-[360px] xl:w-[400px]'/>
        </div>
            </div>

            <div className='mx-auto mt-16'>
                <img src="allen2.avif" alt="" className='mx-auto h-[300px] lg:h-[200px] lg:w-2/3 w-9/10 ' />
            </div>   
        </div>
    </>
  )
}

export default Hero


