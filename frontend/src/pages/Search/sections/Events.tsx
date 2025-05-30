import "swiper/css";
import "swiper/css/pagination";

import { Card } from "../../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

type Events ={
  events :{
  name: string,
  city: string,
  imageUrl: string,
  startDate: string,
  endDate: string,
  }[],
  color02: string,
}

export function Events({events, color02}: Events) {


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
                slidesPerView: 2.5,
              },
              600: {
                slidesPerView:3.5,
              },
              720: {
                slidesPerView: 3.5,
              },
              860: {
                slidesPerView: 3.5,
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
                  color02={color02}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
