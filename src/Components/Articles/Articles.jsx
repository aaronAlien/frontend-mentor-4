import React from "react";
import pc from "../../assets/images/image-retro-pcs.jpg";
import laptop from "../../assets/images/image-top-laptops.jpg";
import gaming from "../../assets/images/image-gaming-growth.jpg";

const Articles = () => {
  return (
    <>
      <section className='three-articles flex flex-col md:flex-row justify-center'>
        <div className='article one-pcs grid sm:grid-cols-3 gap-6 w-full'>
          <img src={pc} alt='' className='article-img' />
          <div className='articles-text col-start-2 col-span-2 flex flex-col gap-2 2xl:mr-4'>
            <h3 className='article-num'>01</h3>
            <a href='#' target='_blank'>
              <h3 className='article-title'>Reviving Retro PCs</h3>
            </a>
            <p className='copy'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className='article two-laptops grid sm:grid-cols-3 gap-6 w-full'>
          <img src={laptop} alt='' className='article-img' />
          <div className='articles-text col-start-2 col-span-2 flex flex-col gap-2 2xl:mr-4'>
            <h3 className='article-num'>02</h3>
            <a href='#' target='_blank'>
              <h3 className='article-title'>Top 10 Laptops of 2022</h3>
            </a>
            <p className='copy'>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className='article three-gaming grid sm:grid-cols-3 gap-6 w-full'>
          <img src={gaming} alt='' className='article-img' />
          <div className='articles-text col-start-2 col-span-2 flex flex-col gap-2 2xl:mr-4'>
            <h3 className='article-num'>03</h3>
            <a href='#' target='_blank'>
              <h3 className='article-title'>The Growth of Gaming</h3>
            </a>
            <p className='copy'>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
