import { Header } from "./components/Header";
import { Footer } from "../../components/Footer";

import { SearchSection } from "./sections/Search";
import { LocalsSlider } from "../../components/LocalsSlider";
import { Events } from "./sections/Events";
import { BigCardSlider } from "../../components/BigCardSlider";

import { useRef } from "react";

import Fortaleza from "../../assets/image.png";


export function CitySearch() {
  const turisticRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const hotelRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);


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

    const events = [
    {
      name: "Festival de Comida Cearense",
      city: "Fortaleza",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      startDate: "05/10/2023",
      endDate: "10/10/2023",
    },
  ];

   const Cities = [
    {
      name: "Fortaleza",
      description: "A capital do Ceará, conhecida por suas belas praias e cultura vibrante.",
      imageUrl: Fortaleza,
    },
    {
      name: "Canoa Quebrada",
      description: "Famosa por suas falésias e vida noturna animada.",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];

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
