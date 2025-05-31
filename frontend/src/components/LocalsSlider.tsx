import "swiper/css";
import "swiper/css/pagination";

import { Card } from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { PlaceDefinition } from "../dto/placeDefinitionDTO";

export function LocalsSlider({name, places, color02 }: PlaceDefinition) {

  return (
    <div className="w-full h-fit flex mt-10 items-center flex-col justify-center bg-neutrals-100">
      <h1 className="w-full max-w-6xl mb-12 text-start text-2xl font-roboto-100 font-bold text-neutrals-200">
        {name}
      </h1>
      <div className="w-full h-fit flex justify-center items-center">
        <div className="w-full max-w-6xl">
          <Swiper
            slidesPerView={5}
            spaceBetween={100}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView:4,
              },
              720: {
                slidesPerView: 4,
              },
              860: {
                slidesPerView: 4.5,
              },
              1024: {
                slidesPerView: 4.5,
              },
              1360: {
                slidesPerView: 5.5,
              },
            }}
            className="w-full h-full justify-start"
          >
            {places.map((places, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <Card
                  imageUrl={places.imageUrl}
                  name={places.name}
                  city={places.cityName}
                  color02={color02 || "#F1DEFE"} // Default color if not provided
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
