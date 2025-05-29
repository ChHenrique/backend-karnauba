
import { useEffect, useState } from "react"
import Glass from '../../../assets/Glass.svg'

export function SearchSection(){
  const [search, setSearch] = useState<string>("");





    return(
          
        <div className="w-full h-[60vh] items-center flex flex-col">

           <div className="w-fit max-md:w-full justify-center flex mt-6 relative">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" className=" flex w-full md:max-w-[800px] max-md:w-full md:min-w-[600px] h-12 rounded-full border-2 border-neutrals-200/25 px-2 bg-neutrals-100 shadow-xl shadow-neutrals-200/10" placeholder='Pesquisar...'/>
            <div className=" cursor-pointer h-10 w-24 font-medium font-spline-400 absolute right-1 top-1 bg-primary-100 rounded-full flex justify-start items-center aspect-square px-2">Filtrar</div>
            <div className=" cursor-pointer h-10 absolute right-1 top-1 border-2 border-neutrals-100 bg-primary-100 rounded-full flex justify-center items-center aspect-square "><img src={Glass} alt="" className="aspect-square h-8 justify-center items-center flex" /></div>
            </div>
            <div className="w-full h-full grid grid-cols-4 overflow-y-auto mt-6">
                  
            </div>
        </div>
    )
}