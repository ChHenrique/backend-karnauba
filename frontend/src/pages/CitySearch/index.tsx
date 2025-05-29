import { Header } from "./components/Header";
import { SearchSection } from "./sections/Search";
import { CardCity } from "./sections/CardCity";
import { TuristicPoints } from "./sections/TuristicPoints";
import { Restaurants } from "./sections/Restaurants";
import { Events } from "./sections/Events";
import { Hotels } from "./sections/Hotels";
import { Footer } from "../../components/Footer";

import { useRef } from "react";

export function CitySearch() {
  const turisticRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const hotelRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

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
      <CardCity />
      <div className="w-full h-fit" ref={turisticRef}><TuristicPoints /></div>
      <div className="w-full h-fit" ref={restaurantRef}><Restaurants /></div>
      <div className="w-full h-fit" ref={hotelRef}><Hotels /></div>
      <div className="w-full h-fit" ref={eventRef}><Events /></div>
      <Footer />
    </div>
  );
}
