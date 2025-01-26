import React from "react";
import pc from "../../assets/images/image-retro-pcs.jpg";
import laptop from "../../assets/images/image-top-laptops.jpg";
import gaming from "../../assets/images/image-gaming-growth.jpg";

const Articles = () => {
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-6'>
        <div className='lg:col-start-1 flex gap-8'>
          <img src={pc} alt='' className='h-auto w-32' />

          <div className='flex flex-col gap-3'>
            <h3 className='article-num'>01</h3>
            <a href='#' target='_blank'>
              <h3 className='article-title'>Reviving Retro PCs</h3>
            </a>
            <p className='copy pr-8'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className='lg:col-start-2 flex gap-8 2xl:ml-14'>
          <img src={laptop} alt='' className='h-auto w-32' />

          <div className='flex flex-col gap-3'>
            <h3 className='article-num'>02</h3>
            <a href='#' target='_blank'>
              <h3 className='article-title'>Top 10 Laptops of 2022</h3>
            </a>
            <p className='copy pr-8'>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className='lg:col-start-3 flex gap-8 2xl:ml-1'>
          <img src={gaming} alt='' className='h-auto w-32' />

          <div className='flex flex-col gap-3'>
            <h3 className='article-num'>03</h3>
            <a href='#' target='_blank'>
              <h3 className='article-title'>The Growth of Gaming</h3>
            </a>
            <p className='copy pr-8'>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
