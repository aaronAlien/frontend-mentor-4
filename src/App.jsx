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
      <main className='flex flex-col h-screen mx-4 my-6 md:my-16 md:mx-8 lg:mx-24 2xl:mx-48'>
        <div className='mb-10'>
          <Navbar />
        </div>

        <div className='flex flex-col md:flex-row justify-center'>

          <div className='lg:grid lg:grid-cols-3 lg:gap-6 2xl:gap-8'>
            
            <div className='lg:col-start-1 lg:col-end-3 mb-14 md:mb-10 2xl:mb-0'>
              <HeroGrid />
            </div>
            <div className='md:row-start-1 col-start-3 mb-14 md:mb-10 2xl:mb-0'>
              <New />
            </div>
            <div className='md:row-start-2 col-start-1 col-end-4 md:mt-6'>
              <Articles />
            </div>
          </div>
        </div>

        <div className='pt-8'>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
