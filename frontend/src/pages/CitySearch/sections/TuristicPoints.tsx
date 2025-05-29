import "swiper/css";
import "swiper/css/pagination";


import { Card } from "../../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export function TuristicPoints() {
  const pontosTuristicos = [
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
    },   {
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
    },   {
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
    },   {
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
    <div className="w-full h-[50vh] flex mt-20 items-center flex-col justify-center bg-neutrals-100">
      <h1 className="w-full max-w-5xl mb-12 text-start text-2xl font-roboto-100 font-bold text-neutrals-200">Pontos Turísticos em Alta</h1>
      <div className="w-full h-[30vh] flex justify-center items-center">
        <div className="w-full max-w-5xl">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={100}
            modules={[Autoplay, Navigation]}
            className="w-full h-full justify-start"
          >
            {pontosTuristicos.map((pontosTuristicos, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <Card
                  imageUrl={pontosTuristicos.imageUrl}
                  name={pontosTuristicos.name}
                  city={pontosTuristicos.city}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
