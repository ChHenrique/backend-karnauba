import "swiper/css";
import "swiper/css/pagination";


import { Card } from "../../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export function Restaurants() {

  const Restaurantes = [
    {name: "Restaurante A", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Restaurante B", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Restaurante A", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Restaurante B", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Restaurante A", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Restaurante B", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Restaurante A", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
    {name: "Restaurante B", city: "Fortaleza", imageUrl: "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"},
  ]


  return (
 <div className="w-full h-[50vh] flex mt-20 items-center flex-col justify-center bg-neutrals-100">
      <h1 className="w-full max-w-5xl mb-12 text-start text-2xl font-roboto-100 font-bold text-neutrals-200">O Melhor da Gastronomia Cearense</h1>
      <div className="w-full h-[30vh] flex justify-center items-center">
        <div className="w-full max-w-5xl">
          <Swiper
            slidesPerView={4.5}
            spaceBetween={100}
            modules={[Autoplay, Navigation]}
            className="w-full h-full justify-start"
          >
            {Restaurantes.map((Restaurantes, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <Card
                  imageUrl={Restaurantes.imageUrl}
                  name={Restaurantes.name}
                  city={Restaurantes.city}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
