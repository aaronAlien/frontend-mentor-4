import React from "react";

const New = () => {
  return (
    <>
      <section className='new flex flex-col h-full py-8 px-4 bg-very-dark-blue'>
        <h2 className='mb-12 text-4xl font-bold text-soft-orange'>New</h2>
        <ul className="flex flex-col gap-8 lg:gap-14">
          <li className="">
            <a href='#' target='_blank'>
              <p className="new-p">Hydrogen VS Electric Cars</p>
            </a>
            <span className="copy">Will hydrogen-fueled cars ever catch up to EVs?</span>
          </li>
          <li>
            <a href='#' target='_blank'>
              <p className="new-p">The Downsides of AI Artistry</p>
            </a>
            <span className="copy">
              What are the possible adverse effects of on-demand AI image
              generation?
            </span>
          </li>
          <li>
            <a href='#' target='_blank'>
              <p className="new-p">Is VC Funding Drying Up?</p>
            </a>
            <span className="copy">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default New;
