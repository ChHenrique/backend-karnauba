import { useRef } from "react";

export function Card({
  color02,
  imageUrl,
  name,
  city,
}: {
  color02: string;
  imageUrl: string;
  city: string;
  name: string;
}) {
   const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

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
    <div className="h-full cursor-pointer w-fit flex flex-col text-neutrals-200 justify-end items-start overflow-hidden relative">
      <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: color02 }}
      className="h-50 max-md:h-36 w-50 max-md:w-36 aspect-square flex justify-end items-end rounded-2xl">
        <div
          className="h-48 max-md:h-34 w-48 max-md:w-34 rounded-2xl absolute right-0 top-0"
        style={{background: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
          <div className="h-full z-10 hover:bg-gray-100/15 absolute duration-200  w-full "></div>
        </div>
      </div>

      <div>
        <h1 className="text-base font-roboto-100 font-bold">{name}</h1>
        <h1 className="text-sm font-roboto-100 font-bold">{city}, Ce</h1>
      </div>
    </div>
  );
}
