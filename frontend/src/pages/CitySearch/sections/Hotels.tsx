import "swiper/css";
import "swiper/css/pagination";
import Fortaleza from "../../../assets/image.png";

import { Pagination } from 'swiper/modules';

import { Bigcard } from "../../../components/BigCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export function Hotels() {
  const Cidades = [
    {
      name: "Fortaleza",
      text: "A capital do Ceará, conhecida por suas belas praias e cultura vibrante.",
      imageUrl: Fortaleza,
    },
    {
      name: "Canoa Quebrada",
      text: "Famosa por suas falésias e vida noturna animada.",
      imageUrl:
        "https://images.unsplash.com/photo-1604079622920-8f1b2c3d4e5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="w-full h-fit mt-20 flex justify-center items-center">
      <div className="w-full h-fit flex justify-center items-center">
        <div className="w-full max-w-6xl">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation, Pagination]}
            className="w-full h-full"
          >
            {Cidades.map((cidade, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <Bigcard
                  imageUrl={cidade.imageUrl}
                  name={cidade.name}
                  text={cidade.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
