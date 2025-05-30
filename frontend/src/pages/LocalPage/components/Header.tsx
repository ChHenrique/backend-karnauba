import LogoBright from "../../../assets/Logo-bright.svg";
import { useState } from "react";
import chroma from "chroma-js";

type refsType = {
  turisticRef: React.RefObject<HTMLDivElement>;
  restaurantRef: React.RefObject<HTMLDivElement>;
  hotelRef: React.RefObject<HTMLDivElement>;
  eventRef: React.RefObject<HTMLDivElement>;
};

// malandragem colcoada pq o react n quer aceitar o type de props com mais de uma propriedade
type Props = {
  refs: refsType;
  cityName: string;
  FirstColor: string;
};

export function Header({ refs, cityName, FirstColor }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const safeColor = FirstColor || "#FFFFFF"
  const Contrast = chroma.contrast(safeColor, "#FFFFFF");
  
  const textColor = Contrast > 3 ? "#FFFFFF" : "#262626";


  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  // function to scroll to the section
  function GoTo(ref: React.RefObject<HTMLDivElement>) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div
      className={`w-screen h-24 flex fixed z-30 top-0 flex-col`}
    >
      <div className="w-full h-14 flex justify-between items-center px-4 bg-neutrals-100">
      <img src={LogoBright} alt="" className="scale-75" />

      
      </div>
      <div
        style={{
          backgroundColor: FirstColor,
          color: textColor,
        }}
        className={`w-screen justify-center flex items-center h-10 font-roboto-100 font-bold text-2xl`}
      >
        {cityName}
      </div>
    </div>
  );
}
