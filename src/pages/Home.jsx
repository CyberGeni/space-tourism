import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen md:min-h-unset md:h-screen flex flex-col space-y-5 justify-center items-center md:items-end md:pb-36 text-center md:text-left md:flex-row md:px-[10%] bg-no-repeat bg-center bg-cover bg-[url('./assets/home/background-home-mobile.jpg')] sm:bg-[url('./assets/home/background-home-tablet.jpg')] lg:bg-[url('./assets/home/background-home-desktop.jpg')]">
      <section className="space-y-4 mt-12">
        <h4 className="text-lavender font-Barlow tracking-widest md:text-xl">SO YOU WANT TO TRAVEL TO</h4>
        <h1 className="text-white font-Bellefair text-8xl sm:text[124px] lg:text-[150px]">SPACE</h1>
        <p className="text-lavender font-Barlow w-4/5 sm:w-3/4 mx-auto md:mx-0 md:text-xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <Link to="/destination">
        <button className="rounded-full my-6 md:my-0 w-48 lg:w-60 lg:h-60 h-48 hover:outline-[32px] hover:outline hover:outline-white/10 text-2xl transition-all  font-Bellefair text-darkBlue bg-white md:tracking-wider">EXPLORE</button>
      </Link>
      
    </main>
  );
}

export default Home;
