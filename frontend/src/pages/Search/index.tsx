import { Header } from "./components/Header";
import { SearchSection } from "./sections/Search";
import { CardCity } from "./sections/CardCity";
import { LocalsSlider } from "../../components/LocalsSlider";
import { Events } from "./sections/Events";
import { BigCardSlider } from "../../components/BigCardSlider";
import { Footer } from "../../components/Footer";

import { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

import { GetCityInfo } from "../../services/GetCity";

import type { cityDataDTO } from "../../dto/cityDTO";
import type { EventPlaceDTO } from "../../dto/Place/EventDef";

export function Search() {
  const { id } = useParams();
  const [city, setCity] = useState<cityDataDTO | null>(null);
  const [places, setPlaces] = useState<cityDataDTO["places"]>([]);

  const [turisticPlaces, setTuristicPlaces] = useState<cityDataDTO["places"]>([]);
  const [gastronomicPlaces, setGastronomicPlaces] = useState<cityDataDTO["places"]>([]);
  const [Hotels, setHotels] = useState<cityDataDTO["places"]>([]);


  const [events, setEvents] = useState<cityDataDTO["events"]>([]);

  const [allArray, setAllArray] = useState<EventPlaceDTO[]>([]);

  useEffect(() => {
    if (id) {
      GetCityInfo(id).then((data: cityDataDTO) => {
        setCity(data);
        setPlaces(data.places);
        setEvents(data.events);

        setTuristicPlaces(
          data.places.filter((place) => place.category === "PAISAGENS")
        );
        setGastronomicPlaces(
          data.places.filter((place) => place.category === "GASTRONOMIA")
        );
        setHotels(
          data.places.filter((place) => place.category === "HOTEL")
        );

         console.log(data.places);
        setAllArray([
          ...data.places,
          ...data.events.map((event) => ({
            id: event.id,
            name: event.name,
            description: event.description,
            imageUrl: event.imageUrl,
            category: "EVENTO",
            city: data.name,
          })),
        ]);
      });
    }
  }, [id]);

  const turisticRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const hotelRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  

  return (
    <div className="h-full w-full px-12 pt-4 max-md:px-4 bg-neutrals-100 flex flex-col items-center">
      <div></div>
      <Header
        refs={{
          turisticRef,
          restaurantRef,
          hotelRef,
          eventRef,
        }}
        cityName={city?.name || "Cidade"}
        FirstColor={city?.color01 || "#FFFFFF"}
      />
      <div
        className="w-full h-fit flex flex-col items-center mt-26"
        style={{
          backgroundColor: `gradient(30deg, 0% #FFFFFF, 30% #FFFFFF,31% ${
            city?.color02 || "#FFFFFF"
          }, 100% ${city?.color02 || "#FFFFFF"})`,
        }}
      >
        <CardCity
          cityImageUrl={city?.imageUrl || "#"}
          cityName={city?.name || "Cidade"}
          cityText={city?.description || "Descrição"}
        />
        <SearchSection color02={city?.color02 || "#FFFFFF"} PlacesEvents={allArray}/>
      </div>
      <div className="w-full h-fit" ref={turisticRef}>
        <LocalsSlider
          color02={city?.color02 || "#FFFFFF"}
          name="Pontos Turisticos em Alta"
          places={turisticPlaces}
        />
      </div>
      <div className="w-full h-fit" ref={restaurantRef}>
        <LocalsSlider
          color02={city?.color02 || "#FFFFFF"}
          name="O Melhor da Gastronomia Cearense"
          places={gastronomicPlaces}
        />
      </div>
      <div className="w-full h-fit" ref={hotelRef}>
        <BigCardSlider places={Hotels}></BigCardSlider>
      </div>
      <div className="w-full h-fit" ref={eventRef}>
        <Events events={events} color02={city?.color02 || "#FFFFFF"} />
      </div>
      <Footer />
    </div>
  );
}
