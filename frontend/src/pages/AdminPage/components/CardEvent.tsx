import { set } from "zod/v4";
import Edit from "../../../assets/edit.svg";
import Trash from "../../../assets/trash.svg";

import { useRef } from "react";
import { BaseURL } from "../../../lib/axios.config";

export function Card({
  event,
  color02,
  setUpdate = () => {},
  setEvent = () => {},
}: {
  setUpdate?: (value: boolean) => void;
  setEvent?: (value: any) => void;
  event: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    category: string;
    city: string;
    latitude?: number;
    longitude?: number;
    adress?: string;
    startDate?: string;
    endDate?: string;
  };
  color02?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    console.log(event?.id); // corrigido

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <div className="h-72 items-start w-50 max-md:w-36 flex flex-col text-neutrals-200 justify-start overflow-hidden relative">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: `${color02 ? color02 : "#E8C9FF"}` }}
        className="h-50 max-md:h-36 w-50 max-md:w-36 aspect-square flex justify-end items-end rounded-2xl"
      >
        <div
          className="h-48 max-md:h-34 w-48 max-md:w-34 rounded-2xl absolute right-0 top-0"
          style={{
            background: `url(${BaseURL + (event?.imageUrl ?? "")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full z-20 absolute bottom-0 px-4 gap-4 justify-end flex items-center">
            <button
              onClick={() => {
                setUpdate(true);
                setEvent({
                  id: event?.id,
                  name: event?.name,
                  description: event?.description,
                  imageUrl: event?.imageUrl,
                  category: event?.category,
                  city: event?.city,
                  adress: event?.adress,
                  startDate: event?.startDate,
                  endDate: event?.endDate,
                  latitude: event?.latitude,
                  longitude: event?.longitude,
                });
              }}
              className="h-8 w-8 rounded-lg bg-white cursor-pointer hover:scale-105"
            >
              <img src={Edit} alt="" />
            </button>
            <button className="h-8 w-8 rounded-lg bg-primary-300 cursor-pointer hover:scale-105">
              <img src={Trash} alt="" />
            </button>
          </div>
          <div className="h-full z-10 absolute duration-200 w-full"></div>
        </div>
      </div>

      <div>
        <h1 className="text-base font-roboto-100 font-bold">{event?.name}</h1>
        <h1 className="text-sm font-roboto-100 font-bold">{event?.city}, Ce</h1>
        {event?.startDate ? (
          <h1 className="text-sm font-roboto-100 font-bold">
            De {event?.startDate} à {event?.endDate}
          </h1>
        ) : null}
      </div>
    </div>
  );
}
