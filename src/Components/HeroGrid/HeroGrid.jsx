import React from "react";
import heroImg from "../../assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "../../assets/images/image-web-3-mobile.jpg";

const HeroGrid = () => {
  return (
    <>
      <section className='flex h-full'>
        
        <div className="hero-grid md:grid md:grid-cols-1 mx-auto">
          
          <div className='hero-img row-start-1'>
            <img
              src={heroImg}
              alt='hero image'
              className='w-full md:block hidden'
            />
          </div>
          <div className='hero-img row-start-1'>
            <img
              src={heroImgMobile}
              alt='hero image'
              className='w-full md:hidden block'
            />
          </div>

          <div className='row-start-2 flex flex-col md:flex-row justify-center mt-6 gap-6 xl:gap-20 mx-auto'>
          
            <div className='flex items-start'>
              <h1 className='text-7xl lg:text-6xl xl:text-8xl font-extrabold'>
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className='flex flex-col items-start justify-between'>
              <p className='copy leading-9'>
                We dive into the next evolution of the web that claims to put the
                power of the platforms back into the hands of the people. But is
                it really fulfilling its promise?
              </p>
              <button className='bg-soft-red mt-4 lg:mt-0 py-3 px-9 tracking-widest font-bold hover:bg-very-dark-blue hover:text-Off-white transition duration-300 ease-in-out'>
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroGrid;
