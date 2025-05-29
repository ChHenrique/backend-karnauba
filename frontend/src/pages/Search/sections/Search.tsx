
import { useEffect, useState } from "react"
import Glass from '../../../assets/Glass.svg'
import Fortaleza from '../../../assets/image.png'
import { Bigcard } from "../../../components/BigCard";

export function SearchSection(){


    return(
          
        <div className="w-full h-[60vh] justify-center items-center flex flex-col">

          <Bigcard name="canela" text="canelisnhas buffos regularis e pé grade" imageUrl={Fortaleza}></Bigcard>

           <div className="w-1/2 justify-center flex mt-6 relative">
            <input type="text" className=" flex w-full h-12 rounded-full border-2 border-neutrals-200/25 px-2" placeholder='Pesquisar...'/>
            <div className=" cursor-pointer h-10 absolute right-1 top-1 bg-primary-100 rounded-full flex justify-center items-center aspect-square "><img src={Glass} alt="" className="aspect-square h-8 justify-center items-center flex" /></div>
            </div>
        </div>
    )
}