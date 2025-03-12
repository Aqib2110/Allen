import React from 'react'

const Trending = () => {
  return (
    <div className='lg:h-[200vh]  md:h-[120vh] bg-[#EDF2FA]'>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-2xl mt-12 mx-auto'>What's Trending</h1>
      </div>
      <div className='mt-7 '>
        <img src="three.avif" className='lg:h-[200px] h-[300px] w-29/30 lg:w-8/10 mx-auto' alt="" />
      </div>
      <div className='lg:mt-25 mt-12'>
        <div className='flex justify-center items-center'>
        <h1 className='font-bold text-2xl mx-auto'>Meet our Champions</h1>
        </div>
        <div className='mt-8'>
            <img src="toppers.avif" className='lg:w-[900px] w-29/30 h-[600px]  mx-auto' alt="" />
        </div>
<div className='mt-8 '>
    <span className='md:flex md:flex-row flex-col lg:w-3/4 w-29/30 mx-auto px-5 justify-between'>
    <div className='flex justify-between w-29/30 md:mx-0 mx-auto md:w-[433px] rounded-lg bg-[#D5E8FF]'>
    <span className='font-bold text-lg px-1 lg:px-4 py-3 '>View JEE Main 2025 Results</span>
    <img alt="" width="28" height="48" loading="lazy" className="ml-3 lg:h-12 lg:py-3" data-testid="shownImage" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733810195/zey5b8tscj7ribv0xga4.svg?_upload_ref=ic_img_tool&amp;__ar__=1.04" style={{ display: "block", aspectRatio: 1.04 / 1 }}
      ></img>
    </div>
<div className='flex justify-between w-29/30 md:mx-0 md:my-0 my-5 mx-auto md:w-[433px] rounded-lg bg-[#D5E8FF]'>
<span className='font-bold text-lg px-1 lg:px-4 py-3 '>View NEET 2024 Results</span>
<img alt="" width="28" height="48" loading="lazy" className="ml-3 text-black lg:h-12 lg:py-3" data-testid="shownImage" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733810195/zey5b8tscj7ribv0xga4.svg?_upload_ref=ic_img_tool&amp;__ar__=1.04" style={{ display: "block",color:"black", aspectRatio: 1.04 / 1 }}
      ></img>
</div>
    </span>
   

</div>
      </div>
    </div>
  )
}

export default Trending
