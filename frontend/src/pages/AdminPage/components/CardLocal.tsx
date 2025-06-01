import { set } from "zod/v4";
import Edit from "../../../assets/edit.svg";
import Trash from "../../../assets/trash.svg";

import { useRef } from "react";
import { BaseURL } from "../../../lib/axios.config";

export function Card({
  color02,
  place,
  setUpdate = () => {},
  setLocals = () => {},
}: {
  setUpdate?: (value: boolean) => void;
  setLocals?: (value: any) => void;
  place: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    category: string;
    city: string;
    latitude?: number;
    longitude?: number;
    adress?: string;
    instagram?: string;
    whatsapp?: string;
  };
  color02?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    console.log(place?.id); // Adicionado operador condicional

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
            background: `url(${BaseURL + (place?.imageUrl ?? "")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full z-20 absolute bottom-0 px-4 gap-4 justify-end flex items-center">
            <button
              onClick={() => {
                setUpdate(true);
                setLocals({
                  id: place?.id,
                  name: place?.name,
                  description: place?.description,
                  imageUrl: place?.imageUrl,
                  category: place?.category,
                  city: place?.city,
                  latitude: place?.latitude,
                  longitude: place?.longitude,
                  adress: place?.adress,
                  instagram: place?.instagram,
                  whatsapp: place?.whatsapp,
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
        <h1 className="text-base font-roboto-100 font-bold">{place?.name}</h1>
        <h1 className="text-sm font-roboto-100 font-bold">{place?.city}, Ce</h1>
        {place?.adress && (
          <h1 className="text-sm font-roboto-100 font-bold">{place?.adress}</h1>
        )}
      </div>
    </div>
  );
}