import React, { useRef,useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const QNA = () => {
  const [show, setShow] = useState('qna1');
  const refimg = useRef();
  const handleClick = (id)=>{
    if(id==1){
     refimg.current.src = 'qn1.avif';
    }
    else if(id==2){
     refimg.current.src = 'qn2.avif';
    }
    else{
     refimg.current.src = 'qn3.avif';
    }
  }
  return (
    <div className='lg:h-[95vh] mb-5 sm:h-[100vh] md:h-[50vh]'>
      <div className='mt-5 md:mt-12 px-2 md:px-45'>
        <h1 className='font-bold text-2xl'>ALLEN App Advantage</h1>
      </div>

      <div className='flex'>
        <div className='lg:pl-45 pl-2 md:pl-8 mt-3 md:mt-12 w-29/30 md:w-6/11'>

                                        <div className='  flex flex-col  md:gap-5 w-full cursor-pointer  my-6' onClick={()=>{handleClick(1);
                                            setShow('qna1')
                                        }}>
                                          <div className='flex  gap-3 w-full md:py-0 py-3 justify-between md:justify-start items-center'>
                                        <h1 className='font-bold w-3/4 text-xl'>400 Lakh+ Questions Practised</h1><span><IoIosArrowDown /></span>
                                          </div>                                      
                                        <div className={`${show === 'qna1' ? '' : 'hidden'} w-3/4`}><p>Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas</p></div>

                                        <div className={`${show === 'qna1' ? '' : 'hidden'}  w-full block md:hidden mt-3`}>
            <img src="qn1.avif" className='h-[320px]  w-full' alt=""/>
        </div>

                                     <hr  className='text-red w-full md:w-4/5'/>
                                    
                                        </div>

<div className=' flex flex-col  gap-5 w-full cursor-pointer my-6' onClick={()=>{handleClick(2);
    setShow('qna2');
}}>
<div className='flex justify-between md:justify-start gap-3 w-full'><h1 className='font-bold w-3/4 text-xl'>10 Lakh+ hours of Learning Content consumed</h1><span className='mt-2'><IoIosArrowDown /></span>    
</div>                                        
                                       
                                        <div className={`${show === 'qna2' ? '' : 'hidden'} w-3/4`} ><p>Boost your score with practice! Pick topics & difficulty level, and let AI target your weak areas</p></div>
                                       
                                        <div className={`${show === 'qna2' ? '' : 'hidden'}  w-full block md:hidden mt-3`}>
            <img src="qn2.avif" className='h-[320px]  w-full' alt=""/>
        </div>
                                       
                                       
                                       
                                        <hr  className='text-red w-full md:w-4/5'/>
                                        </div>

                                        <div className='flex flex-col gap-3 cursor-pointer w-full my-6' onClick={()=>{handleClick(3);
                                          setShow('qna3')
                                        }}>
                                          <div className='flex  gap-13 w-full justify-between md:justify-start  items-center'>
                                        <h1 className='font-bold w-2/3 text-xl'>10 Lakh+ Doubts Solved</h1><span><IoIosArrowDown /></span>
                                          </div>
                                        
                                        <div className={`${show === 'qna3' ? '' : 'hidden'} w-3/4`}><p>Get instant answers with faculty help & our AI Assistant available 24/7 in any language.</p></div>
                                       
                                        <div className={`${show === 'qna3' ? '' : 'hidden'}  w-full block md:hidden mt-3`}>
            <img src="qn3.avif" className='h-[320px]  w-full' alt=""/>
        </div>
                                       
                                       
                                        <hr  className='text-red w-full md:w-4/5'/>
                                        </div>
        </div>
        <div className='w-5/11 md:block hidden mt-12'>
            <img src="qn1.avif" className='h-[320px]  w-full' alt="" ref={refimg}/>
        </div>

      </div>

     
       
  <div className='flex justify-center mt-10 lg:mt-24'>
<span className='font-bold cursor-pointer bg-[#0555B1] px-5 py-2 rounded-3xl text-white text-md'>Explore More</span>
</div>
    </div>
  )
}
{/* <IoIosArrowUp /> */}
export default QNA
