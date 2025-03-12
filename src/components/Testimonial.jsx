import React, { useRef } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect } from 'react';
const Testimonial = () => {
const scrollRef = useRef();

const handleClickLeft = ()=>{
scrollRef.current.scrollLeft -=500;
}
const handleClickRight = ()=>{
scrollRef.current.scrollLeft +=500; 
}
  return (
    <div className='lg:h-[80vh]  md:h-[45vh] bg-[#EDF2FA]'>
      <div className='pt-5 sm:pt-12'>
        <div className='sm:w-5/7 w-full px-3 sm:px-0 mx-auto flex justify-between' >
        <div>
        <h1 className='font-bold mx-auto text-2xl'>Testimonials from our students</h1>
        </div>
       
        <div className='flex justify-center items-center gap-5'>
            <span className='cursor-pointer hover:bg-[#DCDCDC] hover:rounded-3xl' onClick={handleClickLeft}>
            <MdKeyboardArrowLeft className='text-[27px]'/>
            </span>
      <span className='cursor-pointer hover:bg-[#DCDCDC] hover:rounded-3xl'  onClick={handleClickRight}>
      <MdOutlineKeyboardArrowRight  className='text-[27px]'/>
      </span>
      
        </div>
        </div>
       
      </div>
      <div className='h-[330px] lg:ml-auto w-29/30 lg:w-6/7  pt-4 flex px-6 lg:px-6 overflow-hidden  mt-10 gap-6'  ref={scrollRef} >


<div className='min-w-[320px] h-[240px] sm:h-[315px] bg-white  rounded-2xl'>
<div className="md:px-6 md:pb-6 px-4 pb-4 flex flex-col justify-between h-full">
      {/* Quote Section */}
      <div className="quotes-image-text">
        <img
          alt="quotes_icon"
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          data-nimg="1"
          className="md:w-16 md:h-16 w-10 h-10 relative -top-4 md:-top-5"
          src="quotes.svg"
        />
        <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body mb-5 md:mb-10">
          I chose ALLEN Online Courses because I wanted to balance my NEET prep
          with my school schedule. The course structure, from daily homework to
          post-class handouts, was well-organized.
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-start mt-10 sm:mt-auto">
        <img
          alt="Sarth Patil"
          loading="lazy"
          width={48}
          height={48}
          decoding="async"
          data-nimg="1"
          className="w-8 h-8 lg:w-14 lg:h-14 rounded-full mr-3"
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Sarth-128x128_wrp1pw.webp"
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-xs leading-4 md:text-base md:leading-5 text-default-title line-clamp-2">
            SARTH PATIL
          </h2>
          <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body line-clamp-2">
            NEET-UG 2024, Score 710/720
          </p>
        </div>
      </div>
    </div>
</div>





<div className='min-w-[320px]  h-[240px] sm:h-[315px]  bg-white rounded-2xl'>
<div className="md:px-6 md:pb-6 px-4 pb-4 flex flex-col justify-between h-full">
      {/* Quote Section */}
      <div className="quotes-image-text">
        <img
          alt="quotes_icon"
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          data-nimg="1"
          className="md:w-16 md:h-16 w-10 h-10 relative -top-4 md:-top-5"
          src="quotes.svg"
        />
        <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body mb-5 md:mb-10">
        I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Courses. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score.
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-start mt-10 sm:mt-auto">
        <img
          alt="Sarth Patil"
          loading="lazy"
          width={48}
          height={48}
          decoding="async"
          data-nimg="1"
          className="w-8 h-8 lg:w-14 lg:h-14 rounded-full mr-3"
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Galib-128x128_1_ktw4sw.webp"
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-xs leading-4 md:text-base md:leading-5 text-default-title line-clamp-2">
          SEKH GALIB RAZA
          </h2>
          <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body line-clamp-2">
            NEET-UG 2024, SCORE 690/720
          </p>
        </div>
      </div>
    </div>
</div>







<div className='min-w-[320px] h-[240px] sm:h-[315px] bg-white rounded-2xl'>
<div className="md:px-6 md:pb-6 px-4 pb-4 flex flex-col justify-between h-full">
      {/* Quote Section */}
      <div className="quotes-image-text">
        <img
          alt="quotes_icon"
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          data-nimg="1"
          className="md:w-16 md:h-16 w-10 h-10 relative -top-4 md:-top-5"
          src="quotes.svg"
        />
        <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body mb-5 md:mb-10">
        I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!        </p>
      </div>

      {/* Profile Section */}
      <div className="flex items-start mt-10 sm:mt-auto">
        <img
          alt="Sarth Patil"
          loading="lazy"
          width={48}
          height={48}
          decoding="async"
          data-nimg="1"
          className="w-8 h-8 lg:w-14 lg:h-14 rounded-full mr-3"
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Avik-128x128_vbkt1r.webp"
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-xs leading-4 md:text-base md:leading-5 text-default-title line-clamp-2">
          AVIK DAS
          </h2>
          <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body line-clamp-2">
          JEE Adv. 2024, AIR 69
          </p>
        </div>
      </div>
    </div>
</div>


















<div className='min-w-[320px] h-[240px] sm:h-[315px] bg-white rounded-2xl'>
<div className="md:px-6 md:pb-6 px-4 pb-4 flex flex-col justify-between h-full">
      {/* Quote Section */}
      <div className="quotes-image-text">
        <img
          alt="quotes_icon"
          loading="lazy"
          width={24}
          height={24}
          decoding="async"
          data-nimg="1"
          className="md:w-16 md:h-16 w-10 h-10 relative  -top-4 md:-top-5"
          src="quotes.svg"
        />
        <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body mb-5 md:mb-10">
        I came to know about ALLEN’s Online Test Series from my senior in school. The tests are really awesome as these are based mainly on NCERT and cover almost all types of NEET questions. They gave me the real feel of the competition.</p>      </div>

      {/* Profile Section */}
      <div className="flex items-start mt-10 sm:mt-auto">
        <img
          alt="Sarth Patil"
          loading="lazy"
          width={48}
          height={48}
          decoding="async"
          data-nimg="1"
          className="w-8 h-8 lg:w-14 lg:h-14 rounded-full mr-3"
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Shifa-128x128_yjuigd.webp"
        />
        <div className="flex flex-col">
          <h2 className="font-bold text-xs leading-4 md:text-base md:leading-5 text-default-title line-clamp-2">
          AVIK DAS
          </h2>
          <p className="font-normal text-xs leading-[18px] md:text-sm md:leading-[22px] text-default-body line-clamp-2">
          NEET-UG 2024, Score 696/720
          </p>
        </div>
      </div>
    </div>
</div>








   






      </div>
    </div>
  )
}

export default Testimonial
