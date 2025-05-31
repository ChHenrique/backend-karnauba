import { Header } from "./components/Header";
import { Footer } from "../../components/Footer";

import { SearchSection } from "./sections/Search";
import { LocalsSlider } from "../../components/LocalsSlider";
import { Events } from "./sections/Events";
import { BigCardSlider } from "../../components/BigCardSlider";

import { useRef, useState, useEffect } from "react";


import type { SimpleCityDTO } from "../../dto/City/SimpleCityDTO";


export function CitySearch() {
  const turisticRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const hotelRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  const [cities, setCities] = useState<SimpleCityDTO>([]);

  useEffect(()=>{

    try{
      GetCities().then((data) => {
        setCities(data);
      })
    }catch(error) {
      console.error("Error fetching cities:", error);
    }


  })


  return (
    <div className="h-full w-full px-12 pt-4 max-md:px-4 bg-neutrals-100 flex flex-col items-center">
     <Header
        refs={{
          turisticRef,
          restaurantRef,
          hotelRef,
          eventRef,
        }}
      />

      

      <SearchSection />
      <BigCardSlider places={Cities}></BigCardSlider>
      <div className="w-full h-fit" ref={turisticRef}><LocalsSlider name="Pontos Turísticos em Alta" places={turisticPlaces}/></div>
      <div className="w-full h-fit" ref={restaurantRef}><LocalsSlider name="O Melhor da Gastronomia Cearense" places={gastronomicPlaces}/></div>
      <div className="w-full h-fit" ref={hotelRef}> <BigCardSlider places={Hotels}/></div>
      <div className="w-full h-fit" ref={eventRef}><Events events={events}/></div>
      <Footer />
    </div>
  );
}
