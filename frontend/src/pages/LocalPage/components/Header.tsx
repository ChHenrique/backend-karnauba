import LogoBright from "../../../assets/Logo-bright.svg";
import { useState } from "react";
import chroma from "chroma-js";



// malandragem colcoada pq o react n quer aceitar o type de props com mais de uma propriedade
type Props = {
  cityName: string;
  FirstColor: string;
};

export function Header({ cityName, FirstColor }: Props) {

  // Ensure FirstColor is a valid color fallback to white if not provided
  const safeColor = FirstColor || "#FFFFFF"
  // Define the text color based on the contrast with the FirstColor
  const Contrast = chroma.contrast(safeColor, "#FFFFFF");
  
  const textColor = Contrast > 3 ? "#FFFFFF" : "#262626";

  // function to toggle the menu visibility
  // this function will be called when the hamburger icon is clicked


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
