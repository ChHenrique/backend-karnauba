import LogoBright from "../../../assets/Logo-bright.svg";
import { useState } from "react";

type refsType = {
    turisticRef: React.RefObject<HTMLDivElement>,
    restaurantRef: React.RefObject<HTMLDivElement>,
    hotelRef: React.RefObject<HTMLDivElement>,
    eventRef: React.RefObject<HTMLDivElement>,
}

// malandragem colcoada pq o react n quer aceitar o type de props com mais de uma propriedade
type Props = {
    refs: refsType,
}


export function Header({refs}: Props) {

   const [menuOpen,setMenuOpen] = useState(false);

     // function to toggle the menu visibility
   // this function will be called when the hamburger icon is clicked
   function toggleMenu() {
      setMenuOpen(!menuOpen);
   }

    // function to scroll to the section
   function GoTo(ref: React.RefObject<HTMLDivElement>){
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
    })

   }

  return (
    <div className={`w-full h-14 flex fixed z-30 top-0 justify-beetween items-center px-4 bg-neutrals-100`}>
      <img src={LogoBright} alt="" className="scale-75" />

      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:hidden ml-auto cursor pointer"
        onClick={toggleMenu}
      >
        <path
          d="M5.625 10.125H30.375M5.625 18H30.375M5.625 25.875H30.375"
          stroke="#262626"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div className={` ${menuOpen ? 'max-md:visible max-md:opacity-100' : 'max-md:invisible max-md:-translate-y-20 max-md:opacity-0' } duration-200 w-fit ml-auto justify-center items-center h-full flex gap-7 max-md:flex-col max-md:absolute max-md:right-4 max-md:top-14 max-md:bg-neutrals-100 max-md:shadow-lg max-md:shadow-neutrals-200/10 max-md:h-fit max-md:p-4 rounded-2xl max-md:z-20 px-4`}>
        <button onClick={() => GoTo(refs.turisticRef)} className="font-roboto-100 font-medium text-lg text-neutrals-200 cursor-pointer">
          Pontos Turisticos
        </button>
        <button onClick={() => GoTo(refs.restaurantRef)} className="font-roboto-100 font-medium text-lg text-neutrals-200 cursor-pointer">
          Gastronomia
        </button>
        <button onClick={() => GoTo(refs.hotelRef)} className="font-roboto-100 font-medium text-lg text-neutrals-200 cursor-pointer">
          Hospedagem
        </button>
        <button onClick={() => GoTo(refs.eventRef)} className="font-roboto-100 font-medium text-lg text-neutrals-200 cursor-pointer">
          Eventos
        </button>
      </div>
    </div>
  );
}
