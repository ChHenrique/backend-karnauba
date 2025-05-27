
import { useEffect, useState } from "react"

export function SearchSection(){
  const cities = ["Moraujo...", "Massapê...", "Meruoca..."];
  const [index, setIndex] = useState<number> (0);

 useEffect(()=> {
    setTimeout(()=>{
    setIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 4000)
    
  })




    return(
          
        <div className="w-full h-[60vh] justify-center items-center flex flex-col">

           <h1 className="font-roboto-700 font-semibold text-3xl">Qual cidade você quer conhecer?</h1>
            <input type="text" className=" flex w-1/2 h-12 rounded-full border-2 border-neutrals-200/25 px-2 mt-6" placeholder={cities[index]}/>
        </div>
    )
}