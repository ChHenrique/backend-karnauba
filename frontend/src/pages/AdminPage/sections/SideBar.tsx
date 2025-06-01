import { useState } from "react";


import {LocalIcon} from '../../../assets/local.tsx'
import {HomeIcon} from '../../../assets/home.tsx'
import {EventIcon} from '../../../assets/event.tsx'

export function SideBar({
  name,
  page,
  setPage,
}: {
  name: string;
  page: number;
  setPage: (page: number) => void;
}) {

  return (
    <div className="h-full w-fit bg-neutrals-100 shadow-xl shadow-neutrals-200/25 px-6 py-6 flex flex-col items-start rounded-3xl">
      <div className="w-full h-12 flex items-center justify-start ">

        <h1 className="text-xl font-regular ml-4">{name}</h1>
      </div>

      <div className="h-full w-full flex flex-col items-center justify-start mt-6">
        <h1 className="text-base text-neutrals-200 font-bold">Área administrativa</h1>

        <div className="w-full h-fit flex flex-col items-start justify-start mt-4 gap-2">
          <button
            onClick={() => setPage(0)}
            className={`w-full text-left flex-row gap-2 items-center flex text-base font-spline-400 font-semibold p-2 rounded-3xl duration-200 ${
              page === 0 ? "bg-primary-100 text-white" : "hover:bg-neutrals-200/20"
            }`}
          >
            
            <HomeIcon></HomeIcon>
            Cidade
                      
            </button>
          <button
            onClick={() => setPage(1)}
            className={`w-full text-left text-base flex-row flex gap-2 items-center font-spline-400 font-semibold p-2 rounded-3xl duration-200 ${
              page === 1 ? "bg-primary-100 text-white" : "hover:bg-neutrals-200/20"
            }`}
          >
            
            <LocalIcon></LocalIcon>
            Locais
          </button>
          <button
            onClick={() => setPage(2)}
            className={`w-full text-left text-base flex flex-row gap-2 items-center font-spline-400 font-semibold p-2 rounded-3xl duration-200 ${
              page === 2 ? "bg-primary-100 text-white" : "hover:bg-neutrals-200/20 cursor-pointer"
            }`}
          >
            
            <EventIcon></EventIcon>
            Eventos
           </button>
        </div>
      </div>
    </div>
  );
}
