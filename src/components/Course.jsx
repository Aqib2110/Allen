import React from 'react'

const Course = () => {
  return (
    <div className='md:h-[133vh] mb-5 sm:h-[160vh] lg:h-[186vh]'>
      <div className='mt-12 px-6 lg:px-45'>
        <h1 className='font-bold text-2xl'>Discover the perfect online course</h1>
      </div>
      <div>

    <div className="flex flex-col flex-wrap gap-3 pt-4 md:flex-row md:gap-8 md:pt-6">
      {/* JEE Card */}
    <div className='lg:pl-45 pl-6 gap-8 flex flex-col md:flex-row'>
    <div
        id="JEE"
        data-testid="card"
        className="relative md:w-80 bg-[#EDF2FA] w-29/30 h-32 md:h-60 rounded-2xl bg-contain bg-right-bottom bg-no-repeat flex flex-col justify-between bg-primary"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp')",
        }}
      >
        <span className="font-normal text-xs leading-4 md:text-sm md:leading-5 text-default-title block h-full">
          <a className="flex size-full flex-col justify-between p-4 md:p-6" href="/jee">
            <div>
              <h3 className="font-bold text-base leading-5 md:text-xl md:leading-[26px] text-default-title cursor-pointer" data-testid="JEE">
                JEE
              </h3>
            </div>
            <div className="mt-2 flex cursor-pointer items-center text-active" data-testid="cardButton">
              <h2 className="font-bold text-xs leading-4 md:text-base md:leading-5 text-active">View</h2>
              <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
          </a>
        </span>
      </div>







      <div
        id="NEET"
        data-testid="card"
        className="relative md:w-80  bg-[#EDF2FA]  w-29/30 h-32 md:h-60 rounded-2xl bg-contain bg-right-bottom bg-no-repeat flex flex-col justify-between bg-primary"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp')",
        }}
      >
        <span className="font-normal text-xs leading-4 md:text-sm md:leading-5 text-default-title block h-full">
          <a className="flex size-full flex-col justify-between p-4 md:p-6" href="/neet">
            <div>
              <h3 className="font-bold text-base leading-5 md:text-xl md:leading-[26px] text-default-title cursor-pointer" data-testid="NEET">
                NEET
              </h3>
            </div>
            <div className="mt-2 flex cursor-pointer items-center text-active" data-testid="cardButton">
              <h2 className="font-bold text-xs leading-4 md:text-base md:leading-5 text-active">View</h2>
              <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
              </svg>
            </div>
          </a>
        </span>
      </div>


    </div>

      {/* Class 6-10 Card */}
     
    </div>
    <div className='my-8 lg:pl-45 pl-6'>



   
<div
    id="Class_6-10"
    data-testid="card"
    className="relative md:w-80   h-32  w-29/30 bg-[#EDF2FA] md:h-60 rounded-2xl bg-contain bg-right-bottom bg-no-repeat flex flex-col justify-between bg-primary"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp')",
    }}
  >
    <span className="font-normal text-xs leading-4 md:text-sm md:leading-5 text-default-title block h-full">
      <a className="flex size-full flex-col justify-between p-4 md:p-6" href="/classes-6-10">
        <div>
          <h3 className="font-bold text-base leading-5 md:text-xl md:leading-[26px] text-default-title cursor-pointer" data-testid="Class 6-10">
            Class 6-10
          </h3>
        </div>
        <div className="mt-2 flex cursor-pointer items-center text-active" data-testid="cardButton">
          <h2 className="font-bold text-xs leading-4 md:text-base md:leading-5 text-active">View</h2>
          <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="#0266DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
          </svg>
        </div>
      </a>
    </span>
  </div>




  
    </div>
      </div>



<div className=' mt-22 '>
    <div className='flex mx-auto w-full lg:w-5/7'>


    <div>
<img src="man.avif" alt="" className='hidden lg:block h-[300px]'/>
</div>


<div className='bg-[#EDF2FA] rounded-2xl h-[740px] lg:h-[420px] w-[100%] lg:w-[600px]'>
<div>
    <h1 className='font-bold text-xl ml-4 mt-4 mb-2'>Request a callback</h1>
    <hr className='text-white mx-auto px-2 w-18/19'/> 
</div>
<div className='flex  justify-between gap-4 px-5 md:px-0 flex-col lg:flex-wrap'>
<div className='flex lg:flex-row flex-col  w-full' >
<label htmlFor="" className='flex   text-md mx-auto w-full lg:w-1/2  flex-col'>   <span className='pl-3 mt-2'>Student’s full name</span> 
    <input type="text" placeholder='Ex:Rohit Singh' className='border-2 bg-white border-gray-700 mx-auto w-29/30 px-4 lg:w-14/15 py-4 lg:py-2 rounded-md' />
    </label>

    <label htmlFor="" className='flex w-full lg:w-1/2 flex-col'> <span className='pl-3 mt-2'> Mobile Number</span> 
    <input type="text" placeholder='Ex:+919876543210' className='border-2 bg-white border-gray-700 mx-auto px-4 w-29/30 lg:w-14/15 py-4 lg:py-2 rounded-md' />
    </label>
</div>

<div className='flex  lg:flex-row flex-col  w-full' >
<label htmlFor="" className='flex  text-md mx-auto w-full lg:w-1/2  flex-col'>    <span className='pl-3 mt-2'> Class</span>
<select name="" className='border-2 bg-white border-gray-700 mx-auto px-4 w-29/30 lg:w-14/15 py-4 lg:py-2 rounded-md' id="">
<option className='bg-white text-black' value="6th">6th</option>
<option className='bg-white text-black' value="6th">7th</option>
<option className='bg-white text-black' value="6th">8th</option>
</select>
    {/* <input type="text" className='border-2 bg-white border-gray-700 mx-auto px-4 w-14/15 py-2 rounded-md' /> */}
    </label>

    <label htmlFor="" className='flex w-full lg:w-1/2 flex-col'>  <span className='pl-3 mt-2'> Goals</span>
    <select name="" className='border-2 bg-white border-gray-700 mx-auto px-4 w-29/30 lg:w-14/15  py-4 lg:py-2 rounded-md' id="">
<option className='bg-white text-black' value="6th">NEET</option>
<option className='bg-white text-black' value="6th">JEE ADVANCED</option>
<option className='bg-white text-black' value="6th">PNCF (Olympiads/Boards)</option>
</select>    </label>
</div>

<div className='flex  lg:flex-row flex-col  w-full' >
<label htmlFor="" className='flex  text-md mx-auto w-full lg:w-1/2  flex-col'><span className='pl-3 mt-2'>  Preferred Courses</span>
<select name="" className='border-2 bg-white border-gray-700 mx-auto px-4 w-29/30 lg:w-14/15  py-4 lg:py-2 rounded-md' id="">
<option className='bg-white text-black' value="6th">Online Courses</option>
<option className='bg-white text-black' value="6th">Classroom Courses</option>
<option className='bg-white text-black' value="6th">Online Test Series</option>
</select> 
    </label>

    <label htmlFor="" className='flex lg:w-1/2 w-full flex-col'>   <span className='pl-3 mt-2'>State</span>
    <select name="" className='border-2 bg-white border-gray-700 mx-auto px-4 w-29/30 lg:w-14/15  py-4 lg:py-2 rounded-md' id="">
   
<option className='bg-white text-black' value="6th">
    Andaman and Nicobar Islands</option>
<option className='bg-white text-black' value="6th">Andhra Pradesh</option>
<option className='bg-white text-black' value="6th">Andhra Pradesh</option>
</select> 
    </label>
</div>

<p className='text-sm mx-auto'>By continuing, you agree to our <a className='underline' href="">Terms & Conditions </a> </p>

</div>
<div className='flex justify-center mt-6 lg:mt-2'>
    <span className='bg-[#0555B1] font-bold text-white rounded-3xl py-2 cursor-pointer text-md px-22'>Submit</span>
   </div>

</div>

    </div>













</div>




    </div>
  )
}

export default Course
