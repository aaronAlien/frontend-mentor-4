import { useState } from "react";
import "./index.css";
import HeroGrid from "./Components/HeroGrid/HeroGrid";
import New from "./Components/New/New";
import Articles from "./Components/Articles/Articles";
import Navbar from "./Components/Nav/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <main className='flex flex-col h-screen mx-4 my-6 md:my-16 md:mx-28 2xl:my-20 2xl:mx-40'>
        <div className='mb-10'>
          <Navbar />
        </div>

        <div className='container-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-rows-3 gap-12'>
          
          <div className='col-span-full row-span-1 sm:col-span-3 md:col-span-full lg:col-span-4 lg:row-span-2 md:row-start-1'>
            <HeroGrid />
          </div>

          <div className='col-span-full row-span-1 sm:col-span-2 md:col-span-full lg:col-start-5 lg:col-end-7 lg:row-span-2 mx-auto w-full bg-very-dark-blue'>
            <New />
          </div>

          <div className='row-span-1 lg:row-start-3 col-span-full'>
            <Articles />
          </div>
        </div>
        <div className='py-3'>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
