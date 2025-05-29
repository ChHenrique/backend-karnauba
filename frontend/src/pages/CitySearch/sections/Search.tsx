
import { useEffect, useState } from "react"
import Glass from '../../../assets/Glass.svg'

export function SearchSection(){
  const cities = ["Moraujo...", "Massapê...", "Meruoca..."];
  const [index, setIndex] = useState<number> (0);

 useEffect(()=> {
    setTimeout(()=>{
    setIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 6000)
    
  })




    return(
          
        <div className="w-full h-[60vh] justify-center items-center flex flex-col">

           <h1 className="font-roboto-700 font-semibold text-3xl max-md:w-full text-center">Qual cidade você quer conhecer?</h1>
           <div className="w-fit max-md:w-full justify-center flex mt-6 relative">
            <input type="text" className=" flex w-full md:max-w-[800px] max-md:w-full md:min-w-[600px] h-12 rounded-full border-2 border-neutrals-200/25 px-2 bg-neutrals-100 shadow-xl shadow-neutrals-200/10" placeholder={cities[index]}/>
            <div className=" cursor-pointer h-10 absolute right-1 top-1 bg-primary-100 rounded-full flex justify-center items-center aspect-square "><img src={Glass} alt="" className="aspect-square h-8 justify-center items-center flex" /></div>
            </div>
        </div>
    )
}