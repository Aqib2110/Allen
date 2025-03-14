import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
const [close, setclose] = useState('none');

const handleOpen = ()=>{
  setclose('block');
}
  const handleClick = ()=>{
setclose('none');
  }
  return (
    <div className="fixed top-[0px] z-10 w-full">
      
      <div className="absolute  md:hidden block top-0 left-0 h-screen w-full" 
      style={
        {
display:`${close}`,
        }
      }
      >

<div className="flex h-full w-full">
       
<div className="h-full bg-[#eff3f6]  w-9/10">
<div className="w-full  shadow  py-10 flex px-4 justify-between items-center">
  <div>
    <svg
      width="91"
      height="26"
      viewBox="0 0 91 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      alt="Allen logo"
      data-testid="onboardingAllenLogo"
      className="w-23 cursor-pointer h-7"
    >
      <path
        d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z"
        fill="#005BAA"
      ></path>
    </svg>
  </div>
  <div>
    <RxCross2 className="text-[22px] font-bold" onClick={handleClick} />
  </div>
</div>



<div className="flex flex-col h-full">
<div className="flex flex-col  h-[80%] ">
<div className="">
  <div className="flex px-3 items-center justify-between py-3">
  <a href="#" className="font-bold text-md">
    Courses
  </a>
  <MdKeyboardArrowDown />
  </div>
  <div className="">
  <hr className="text-[#DCDCDC]"/>
  </div>
</div>
<div className="">

<div className="flex px-3 items-center justify-between py-3">
<a href="#" className="font-bold text-md">
    Test Series
  </a>{" "}
  <MdKeyboardArrowDown />
</div>
  <div>
  <hr className="text-[#DCDCDC]"/>
  </div>
</div>

<div className="">
<div className="flex items-center justify-between px-3 py-3">
<a href="#" className="font-bold text-md">
    Scholarships
  </a>{" "}
  <MdKeyboardArrowDown />
</div>
  <div>
  <hr className="text-[#DCDCDC]"/>
  </div>

</div>

<div className="">
<div className="flex px-3 items-center justify-between py-3">
<a href="#" className="font-bold text-md">
    Results
  </a>{" "}
  <MdKeyboardArrowDown />
</div>
  <div>
  <hr className="text-[#DCDCDC]"/>
  </div>
</div>

<div className="">
  <div className="flex px-3 items-center justify-between py-3">
  <a href="#" className="font-bold text-md">
    Study Materials
  </a>{" "}
  <MdKeyboardArrowDown />
  </div>

  <div>
  <hr className="text-[#DCDCDC]"/>
  </div>
</div>

<div className="">
  <div className="flex px-3 items-center justify-between py-3">
  <a href="#" className="font-bold text-md">
    About us
  </a>{" "}
  <MdKeyboardArrowDown />
  </div>

  <div>
  <hr className="text-[#DCDCDC]"/>
  </div>
</div>

</div>

<div className="font-bold pt-8 text-[#0555B1] px-3">
Login
</div>

</div>



</div> 
<div className="w-1/10 h-full  ">










</div>
</div>


      

     

      </div>
     


      <div className="bg-white flex sm:hidden py-4 px-6 justify-between items-center w-full">
        <div className="w-1/2 flex gap-3  items-center">
          <GiHamburgerMenu className="text-[24px]" onClick={handleOpen}/>
          <svg
            width="91"
            height="26"
            viewBox="0 0 91 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Allen logo"
            data-testid="onboardingAllenLogo"
            className="w-23 cursor-pointer h-7"
          >
            <path
              d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z"
              fill="#005BAA"
            ></path>
          </svg>
        </div>
        <div className="flex gap-4 w-1/2 justify-end items-center">
          <a href="#">Phone</a>
          <div className="border-2 border-[#0555B1] cursor-pointer px-3 py-1.5 font-bold text-[12px] rounded-2xl fit-content">
            Login
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] w-full hidden sm:flex justify-between md:px-10 lg:px-26 items-center h-16">
        <div className="flex md:gap-5 lg:gap-6 justify-center items-center">
          <svg
            width="91"
            height="26"
            viewBox="0 0 91 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Allen logo"
            data-testid="onboardingAllenLogo"
            className="w-23 cursor-pointer h-7"
          >
            <path
              d="M22.2309 23.7954H13.9211L12.626 20.1214H9.60432L8.30916 23.7954H0L11.1154 0L22.2309 23.7954ZM12.2753 14.7801C12.2753 14.4604 12.1583 14.1776 11.9247 13.9328C11.6905 13.6875 11.4206 13.5648 11.1154 13.5648C10.8096 13.5648 10.5397 13.6875 10.3061 13.9328C10.072 14.1776 9.95491 14.4604 9.95491 14.7801C9.95491 15.1004 10.072 15.3833 10.3061 15.628C10.5397 15.8734 10.8096 15.9955 11.1154 15.9955C11.4206 15.9955 11.6905 15.8734 11.9247 15.628C12.1583 15.3832 12.2753 15.1004 12.2753 14.7801ZM37.4199 16.5611L35.8013 23.7953H22.9594V2.3176H31.0526V16.5611H37.4199ZM53.6068 16.5611L51.9882 23.7953H39.1464V2.3176H47.2401V16.5611H53.6068ZM71.1435 16.5611L69.309 23.7953H55.3339V2.3176H69.309L71.1435 9.55235H63.4276C63.1037 9.55235 62.9599 9.86904 62.9957 10.1706C63.0321 10.4341 63.1753 10.7061 63.4276 10.7061H68.0139V15.4073H63.4276C63.1401 15.4073 62.9957 15.6995 62.9957 15.9824C62.9957 16.2652 63.1401 16.5611 63.4276 16.5611L71.1435 16.5611ZM90.9999 26L81.5036 18.1434V23.7953H73.3559V1.01768L82.9068 7.96961V2.31767H91L90.9999 26Z"
              fill="#005BAA"
            ></path>
          </svg>
          <div className="group flex flex-col justify-center">
            {" "}
            <a href="#" className="mt-2">
              Courses
            </a>
            <div class="bg-blue-600 invisible group-hover:visible text-black h-1 mt-2 rounded-xl"></div>
          </div>
          <div className="group flex flex-col justify-center">
            <a className="mt-2" href="#">
              Test Series
            </a>{" "}
            <div class="bg-blue-600 invisible group-hover:visible text-black h-1 mt-2 rounded-xl"></div>
          </div>

          <div className="group flex flex-col justify-center">
            <a className="mt-2" href="#">
              Scholarships
            </a>{" "}
            <div class="bg-blue-600 invisible group-hover:visible text-black h-1 mt-2 rounded-xl"></div>
          </div>

          <div className="group flex flex-col justify-center">
            <a className="mt-2" href="#">
              Results
            </a>{" "}
            <div class="bg-blue-600 invisible group-hover:visible text-black h-1 mt-2 rounded-xl"></div>
          </div>

          <div className="group flex flex-col justify-center">
            <a className="mt-2" href="#">
              Study Materials
            </a>{" "}
            <div class="bg-blue-600 invisible group-hover:visible text-black h-1 mt-2 rounded-xl"></div>
          </div>

          <div className="group flex flex-col justify-center">
            <a className="mt-2" href="#">
              About us
            </a>{" "}
            <div class="bg-blue-600 invisible group-hover:visible text-black h-1 mt-2 rounded-xl"></div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <a href="#">Phone</a>
          <div className="border-2 border-[#0555B1] cursor-pointer px-3 py-1.5 font-bold text-[12px] rounded-2xl fit-content">
            Login
          </div>
        </div>
      </div>
      <div className="bg-[#019370] w-full flex justify-center items-center gap-4">
        <div className="text-[#F8FD05] flex gap-1 justify-center items-center">
          <img
            width="28"
            height="28"
            loading="lazy"
            decoding="async"
            draggable="false"
            fetchpriority="auto"
            alt=""
            class="mr-3 h-14 w-auto py-1.5 lg:h-9"
            src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            style={{ aspectRatio: 0 / 1 }}
          ></img>
          <span className="font-bold text-[13px]">REGISTER FOR AOSAT</span>
          <img
            alt=""
            width="24"
            height="24"
            loading="lazy"
            className="ml-0.5"
            data-testid="shownImage"
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733741024/lpbkzdbke54wl6cevwjo.svg?_upload_ref=ic_img_tool&amp;__ar__=1.06"
            style={{ display: "block", aspectRatio: 1.06 / 1 }}
          ></img>
        </div>
        <div className="flex gap-1 justify-center text-white items-center">
          <span className="font-bold">
            {" "}
            Win up to 90% scholarship on our Online Courses
          </span>
          <img
            alt=""
            width="28"
            height="48"
            loading="lazy"
            className="ml-3 lg:h-12 lg:py-3"
            data-testid="shownImage"
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733810195/zey5b8tscj7ribv0xga4.svg?_upload_ref=ic_img_tool&amp;__ar__=1.04"
            style={{ display: "block", aspectRatio: 1.04 / 1 }}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
