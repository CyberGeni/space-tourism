import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import data from "../data.json";
// import '@splidejs/react-splide/css';
import "@splidejs/react-splide/css/core";
import "../App.css";
function CrewCarousel() {
  return (
    <div>
      <Splide hasTrack={false}>
        <SplideTrack className="w-screen">
          
          {data.crew.map((crew) => (
            <SplideSlide className="">
              <div className="flex flex-col-reverse">
                <div className="text-center space-y-3 mt-8">
                
                  <h4 className="text-lg text-white/70 font-Bellefair uppercase">
                    
                    {crew.role}
                  </h4>
                  <h1 className="text-4xl crew-name text-white my-1 font-Bellefair uppercase">
                    {crew.name}
                  </h1>
                  <p className="w-4/5 text-lg mx-auto font-Barlow text-lavender">
                    {crew.bio}
                  </p>
                </div>
                <div className="border-b-2 border-[#383B4B] w-4/5 mx-auto">
                  <img
                    className="w-3/5 mx-auto mt-6"
                    src={crew.images.png}
                    alt=""
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
          
        </SplideTrack>
        {/* <div className="splide__pagination -mt-60" /> */}
      </Splide>
    </div>
  );
}

export default CrewCarousel;
