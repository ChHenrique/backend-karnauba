import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper/modules';

import { Bigcard } from "./BigCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";


type PlaceDefinition = {
  places: {
    name: string,
    description: string,
    imageUrl: string,
  }[],
}

export function BigCardSlider({places}: PlaceDefinition) {


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
            {places.map((place, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <Bigcard
                  imageUrl={place.imageUrl}
                  name={place.name}
                  text={place.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
