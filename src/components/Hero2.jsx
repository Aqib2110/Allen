import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  const slideRef = useRef();
  const [trans, setTrans] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const touchMoveX = e.touches[0].clientX;
    const diff = touchStartX - touchMoveX;
  
    // Dynamically set slide distance based on screen width
    // const slideDistance = window.innerWidth < 640 ? 100 : 150; // 100px for mobile, 150px for larger screens
    // const maxTrans = window.innerWidth < 640 ? 600 : 300; // Set max translation for different screens
  
    if (diff > 50 && trans <= 900) {
      setTrans((val) => val + 150);
    } else if (diff < -50 && trans >= 0) {
      setTrans((val) => val - 150);
    }
  };

  return (
    <div className="mb-5 w-full border-white">
      <div className="flex justify-center items-center mt-8 lg:mt-14">
        <h1 className="font-bold text-2xl mx-auto">Why ALLEN Online</h1>
      </div>

      <div className="overflow-hidden lg:w-3/4 w-full mx-auto mt-8">
        <motion.div
          className="flex gap-5 cursor-pointer px-5"
          ref={slideRef}
          drag="x"
          dragConstraints={{ left: -300, right: 0 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          animate={{ x: -trans }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {/* Card 1 */}
          <div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 flex flex-col gap-3 mt-6">
            <img className="h-[60px] -top-6 w-[60px] absolute" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489047/1_dfic0f.svg" alt="" />
            <div className="mt-9">
              <h1 className="text-lg px-2 font-bold">Kota Faculty</h1>
              <p className="px-2 text-[#494A4A]">Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 flex flex-col gap-3 mt-6">
            <img className="h-[60px] -top-6 w-[60px] absolute" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489326/2_ddboz0.svg" alt="" />
            <div className="mt-9">
              <h1 className="text-lg px-2 font-bold">Proven Results</h1>
              <p className="px-2 text-[#494A4A]">Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams</p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 flex flex-col gap-3 mt-6">
            <img className="h-[60px] -top-6 w-[60px] absolute" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/3_ivbkv8.svg" alt="" />
            <div className="mt-9">
              <h1 className="text-lg px-2 font-bold">Learning Tools</h1>
              <p className="px-2 text-[#494A4A]">24x7 doubt resolution and customized study material to test, and improve continuously</p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div className="bg-[#DCEDF8] relative min-w-[270px] lg:min-w-[260px] rounded-xl h-[190px] px-3 flex flex-col gap-3 mt-6">
            <img className="h-[60px] -top-6 w-[60px] absolute" src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/4_ar5ewd.svg" alt="" />
            <div className="mt-9">
              <h1 className="text-lg px-2 font-bold">Mentor Support</h1>
              <p className="px-2 text-[#494A4A]">Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 w-full flex justify-center items-center">
        <span className="bg-[#0555B1] mx-auto rounded-3xl px-5 py-3 text-white font-bold">
          Explore Online Courses
        </span>
      </div>
    </div>
  );
};

export default Hero2;
