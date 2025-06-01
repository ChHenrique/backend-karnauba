import { Header } from "./components/Header";
import { Footer } from "../../components/Footer";

import { SearchSection } from "./sections/Search";
import { LocalsSlider } from "../../components/LocalsSlider";
import { Events } from "./sections/Events";
import { BigCardSlider } from "../../components/BigCardSlider";

import { useRef, useState, useEffect } from "react";


import { GetCities } from "./services/GetCitys";
import type { cityDataDTO } from "../../dto/City/cityDTO";

export function CitySearch() {
  const turisticRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const hotelRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  const [cities, setCities] = useState<cityDataDTO>([]);

  const [gastronomicPlaces, setGastronomicPlaces] = useState<cityDataDTO['places']>([]);
  const [turisticPlaces, setTuristicPlaces] = useState<cityDataDTO['places']>([]);
  const [Hotels, setHotels] = useState<cityDataDTO['places']>([]);
  const [events, setEvents] = useState<cityDataDTO['events']>([]);

  useEffect(()=>{

    try{
      GetCities().then((data: cityDataDTO) => {
        setCities(data);

        const turisticPlaces = data.flatMap(city => city.places.filter(place => place.category === 'PAISAGENS'));
        const gastronomicPlaces = data.flatMap(city => city.places.filter(place => place.category === 'GASTRONOMIA'));
        const Hotels = data.flatMap(city => city.places.filter(place => place.category === 'HOTEL'));
        const events = data.flatMap(city => city.events);
        setTuristicPlaces(turisticPlaces);
        setGastronomicPlaces(gastronomicPlaces);
        setHotels(Hotels);
        setEvents(events);
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
      <BigCardSlider places={cities}></BigCardSlider>
      <div className="w-full h-fit" ref={turisticRef}><LocalsSlider name="Pontos Turísticos em Alta" places={turisticPlaces}/></div>
      <div className="w-full h-fit" ref={restaurantRef}><LocalsSlider name="O Melhor da Gastronomia Cearense" places={gastronomicPlaces}/></div>
      <div className="w-full h-fit" ref={hotelRef}> <BigCardSlider places={Hotels}/></div>
      <div className="w-full h-fit" ref={eventRef}><Events events={events}/></div>
      <Footer />
    </div>
  );
}
