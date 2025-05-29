import "swiper/css";
import "swiper/css/pagination";

import { Card } from "../../../components/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export function Events() {
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

  return (
    <div className="w-full h-fit flex mt-10 items-center flex-col justify-center bg-neutrals-100">
      <h1 className="w-full max-w-6xl mb-12 text-start text-2xl font-roboto-100 font-bold text-neutrals-200">
        Eventos que você não pode perder
      </h1>
      <div className="w-full h-fit flex justify-center items-center">
        <div className="w-full max-w-6xl">
          <Swiper
            slidesPerView={5}
 breakpoints={{
              0: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView:3,
              },
              720: {
                slidesPerView: 3,
              },
              860: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1360: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={100}
            modules={[Autoplay, Navigation]}
            className="w-full h-full justify-start"
          >
            {events.map((events, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <Card
                  imageUrl={events.imageUrl}
                  name={events.name}
                  city={events.city}
                  startDate={events.startDate}
                  endDate={events.endDate}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
