import { Header } from "./components/Header";
import { SearchSection } from "./sections/Search";
import { CardCity } from "./sections/CardCity";
import { LocalsSlider } from "./sections/LocalsSlider";
import { Events } from "./sections/Events";
import { Hotels } from "./sections/Hotels";
import { Footer } from "../../components/Footer";

import { useRef } from "react";

export function Search() {
  const turisticRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const hotelRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  const SecondColor = "#12f94C";

    const place = [
    {
      name: "praia do futuro",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Centro Dragão do Mar de Arte e Cultura",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Mercado Central de Fortaleza",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Centro Dragão do Mar de Arte e Cultura",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Mercado Central de Fortaleza",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Centro Dragão do Mar de Arte e Cultura",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Mercado Central de Fortaleza",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Centro Dragão do Mar de Arte e Cultura",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Mercado Central de Fortaleza",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];

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
        cityName="Moraujo"
        FirstColor="#F2C94C"
      />
      <div className="w-full h-fit flex flex-col items-center mt-26"
      style={{ backgroundColor: `gradient(30deg, 0% #FFFFFF, 30% #FFFFFF,31% ${SecondColor}, 100% ${SecondColor})` }}>
      <CardCity cityImageUrl="#" cityName="Moraujo" cityText="Cidade boa da piula"/>
      <SearchSection />
      </div>
      <div className="w-full h-fit" ref={turisticRef} places={place} ><LocalsSlider name="Pontos Turisticos em Alta"/></div>
      <div className="w-full h-fit" ref={restaurantRef}><LocalsSlider name="O Melhor da Gastronomia Cearense"/></div>
      <div className="w-full h-fit" ref={hotelRef}><Hotels /></div>
      <div className="w-full h-fit" ref={eventRef}><Events /></div>
      <Footer />
    </div>
  );
}
