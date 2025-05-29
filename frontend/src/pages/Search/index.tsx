import { Header } from "./components/Header";
import { SearchSection } from "./sections/Search";
import { CardCity } from "./sections/CardCity";
import { LocalsSlider } from "../../components/LocalsSlider";
import { Events } from "./sections/Events";
import { BigCardSlider } from "../../components/BigCardSlider";
import { Footer } from "../../components/Footer";

import { useRef } from "react";

export function Search() {
  const turisticRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const hotelRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  const SecondColor = "#12f94C";

const gastronomicPlaces = [
  {
    name: "Restaurante Sabor Nordestino",
    city: "Fortaleza",
    imageUrl: "https://source.unsplash.com/featured/?restaurant,northeast"
  },
  {
    name: "Bistrô Maré Alta",
    city: "Natal",
    imageUrl: "https://source.unsplash.com/featured/?seafood,restaurant"
  },
  {
    name: "Cantinho do Sertão",
    city: "Juazeiro do Norte",
    imageUrl: "https://source.unsplash.com/featured/?brazilian,food"
  },
  {
    name: "Churrascaria Fogo na Brasa",
    city: "Recife",
    imageUrl: "https://source.unsplash.com/featured/?barbecue,restaurant"
  },
  {
    name: "Tapiocaria da Lú",
    city: "Maceió",
    imageUrl: "https://source.unsplash.com/featured/?tapioca,food"
  }
];

const turisticPlaces = [
  {
    name: "Praia de Iracema",
    city: "Fortaleza",
    imageUrl: "https://source.unsplash.com/featured/?beach,fortaleza"
  },
  {
    name: "Parque das Dunas",
    city: "Natal",
    imageUrl: "https://source.unsplash.com/featured/?dunes,park"
  },
  {
    name: "Cânion do Rio São Francisco",
    city: "Paulo Afonso",
    imageUrl: "https://source.unsplash.com/featured/?canyon,river"
  },
  {
    name: "Centro Histórico de Olinda",
    city: "Olinda",
    imageUrl: "https://source.unsplash.com/featured/?historic,olinda"
  },
  {
    name: "Serra de Guaramiranga",
    city: "Guaramiranga",
    imageUrl: "https://source.unsplash.com/featured/?mountains,guaramiranga"
  }
];

 const Hotels = [
  {
    name: "Hotel Praia de Iracema",
    city: "Fortaleza",
    description: "Um hotel muito bom,com vista ao mar",
    imageUrl: "https://source.unsplash.com/featured/?hotel,fortaleza"
  },
  {
    name: "Pousada Maré Alta",
    city: "Natal",
    description: "Uma pousada aconchegante, perto da praia",
    imageUrl: "https://source.unsplash.com/featured/?pousada,natal"
  },
  {
    name: "Hotel Serra Verde",
    city: "Guaramiranga",
    description: "Um hotel localizado na serra, com vista para as montanhas",
    imageUrl: "https://source.unsplash.com/featured/?hotel,guaramiranga"
  },
  {
    name: "Pousada Olinda",
    city: "Olinda",
    description: "Uma pousada charmosa, no centro histórico de Olinda",
    imageUrl: "https://source.unsplash.com/featured/?pousada,olinda"
  },
  {
    name: "Hotel Canoa Quebrada",
    city: "Canoa Quebrada",
    description: "Um hotel à beira-mar, com uma vista incrível para o pôr do sol",
    imageUrl: "https://source.unsplash.com/featured/?hotel,canoa-quebrada"
  }];     

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
      <div className="w-full h-fit" ref={turisticRef} ><LocalsSlider name="Pontos Turisticos em Alta" places={turisticPlaces} /></div>
      <div className="w-full h-fit" ref={restaurantRef} ><LocalsSlider name="O Melhor da Gastronomia Cearense" places={gastronomicPlaces}/></div>
      <div className="w-full h-fit" ref={hotelRef}><BigCardSlider places={Hotels}></BigCardSlider></div>
      <div className="w-full h-fit" ref={eventRef}><Events /></div>
      <Footer />
    </div>
  );
}
