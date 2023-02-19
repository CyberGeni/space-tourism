import React from "react";
import CrewCarousel from "../components/CrewCarousel";

function Crew() {
  return (
    <main className="min-h-screen md:min-h-unset md:h-screen flex  md:px-[10%] bg-no-repeat bg-center bg-cover bg-[url('./assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')]">
      <section className="">
        <h1 className="w-4/5 mx-auto mt-28 text-white font-Barlow text-2xl">
          <span className="text-white/70 mr-2">02</span>MEET YOUR CREW
        </h1>
        <CrewCarousel />
      </section>
    </main>
  );
}

export default Crew;
