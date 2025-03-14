import React, { useRef, useEffect, useState } from "react";
const Hero2 = () => {

  const [slide, setSlide] = useState(false);
  const slideRef = useRef();
  const [trans, settrans] = useState(0);
  const handleKeyPress = (e) => {
    setSlide(true);
    if (e.key === "ArrowRight") {
      slideRef.current.scrollLeft += 100;
    } else if (e.key === "ArrowLeft") {
      slideRef.current.scrollLeft -= 100;
    }
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(document.querySelector('.status-container').scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const currentX = e.touches[0].clientX;
      const diff = currentX - startX;
      requestAnimationFrame(() => {
        document.querySelector('.status-container').scrollLeft = scrollLeft - diff;
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startX, scrollLeft]);

 

  useEffect(() => {
    if (!slideRef.current) return;

    if (slide) {
      document.addEventListener("keyup", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [slide]);



  return (
    <div className="mb-5 w-full  border-white">
      <div className="flex justify-center items-center mt-8 lg:mt-14">
        <h1 className="font-bold text-2xl mx-auto">Why ALLEN Online</h1>
      </div>



     <div className="">
     <div
        className={`lg:w-3/4 w-full h-[220px] mt-8 mx-auto overflow-scroll   cursor-pointer px-5  flex gap-5`}
        ref={slideRef}
        onClick={() => setSlide(true)}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none", 
        }}
        
      >


   <div className={` w-content h-[220px] mx-auto cursor-pointer px-5  flex gap-5`}
    //  style={{ transform: `translateX(-${trans}px)` }}
   >





<div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 flex flex-col gap-3 mt-6">
          <img
            className="h-[60px] -top-6 w-[60px] absolute"
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489047/1_dfic0f.svg"
            alt=""
          />
          <div className="mt-9">
            <h1 className="text-lg px-2 font-bold">Kota Faculty</h1>
            <p className="px-2 text-[#494A4A]">
              Expert faculty, top-notch study material and teaching methods
              perfected in Kota over 35+ years
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 flex flex-col gap-3 mt-6">
          <img
            className="h-[60px] -top-6 w-[60px] absolute"
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489326/2_ddboz0.svg"
            alt=""
          />
          <div className="mt-9">
            <h1 className="text-lg px-2 font-bold">Proven Results</h1>
            <p className="px-2 text-[#494A4A]">
              Stellar results delivered through Online Courses across JEE, NEET,
              Olympiads and 10th Board Exams
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 flex flex-col gap-3 mt-6">
          <img
            className="h-[60px] -top-6 w-[60px] absolute"
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/3_ivbkv8.svg"
            alt=""
          />
          <div className="mt-9">
            <h1 className="text-lg px-2 font-bold">Learning Tools</h1>
          </div>
          <p className="px-2 text-[#494A4A]">
            24x7 doubt resolution and customized study material to test, and
            improve continuously
          </p>
        </div>




        {/* Card 4 */}
        <div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 lg:mr-0 mr-5 flex flex-col gap-3 mt-6">
          <img
            className="h-[60px] -top-6 w-[60px] absolute"
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/4_ar5ewd.svg"
            alt=""
          />
          <div className="mt-9">
            <h1 className="text-lg px-2 font-bold">Mentor Support</h1>
            <p className="px-2 text-[#494A4A]">
              Regular mentorship sessions with faculty, guidance on exam
              strategy and updates to parents
            </p>
          </div>
        </div>
</div>



        {/* Card 1 */}
      

      </div>
     </div>



      <div className="mt-8 w-full flex justify-center items-center">
        <span className="bg-[#0555B1] mx-auto rounded-3xl px-5 py-3 text-white font-bold text-fit-content">
          Explore Online Courses
        </span>
      </div>
    </div>
  );
};

export default Hero2;

