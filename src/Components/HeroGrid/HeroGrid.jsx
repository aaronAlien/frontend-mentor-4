import React from "react";
import heroImg from "../../assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "../../assets/images/image-web-3-mobile.jpg";

const HeroGrid = () => {
  return (
    <>
      <section className='hero-grid grid sm:grid-cols-2 auto-rows-auto'>
        <div className='hero-img col-span-full row-start-1 sm:row-span-1'>
          <img
            src={heroImg}
            alt='hero image'
            className='w-full sm:block hidden'
          />
        </div>

        <div className='hero-img col-span-full row-start-1 sm:row-span-2'>
          <img
            src={heroImgMobile}
            alt='hero image'
            className='w-full sm:hidden block'
          />
        </div>

        <div className='mt-6 col-span-full row-start-2 grid grid-cols-1 sm:grid-cols-2'>
          <h1 className='flex flex-col items-start col-span-1 col-start-1 text-4xl md:text-6xl 2xl:mr-14 md:mr-6 font-extrabold'>
            The Bright Future of Web 3.0?
          </h1>

          <div className='sm:col-start-2 flex flex-col items-start justify-between'>
            <p className='copy leading-9'>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className='bg-soft-red mt-4 lg:mt-0 py-3 px-5 tracking-widest font-bold hover:bg-very-dark-blue hover:text-Off-white transition duration-300 ease-in-out'>
              READ MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroGrid;
