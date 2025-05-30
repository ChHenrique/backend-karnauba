import { useEffect, useState } from "react";
import Glass from "../../../assets/Glass.svg";

import { Filter, type Place } from "../../../utils/searchFilter";
import { Card } from "../../../components/Card";

type Params = {
  PlacesEvents: Place[],
  color02: string,
}

export function SearchSection({PlacesEvents, color02}: Params) {
  const [search, setSearch] = useState<string>("");

  const [showFilter, setShowFilter] = useState<boolean>(false);

  const [categories, setCategories] = useState<string[]>([]);
  const [filteredPlaces, setFilteredPlaces] = useState<any[]>([]);

  const categoryList = [
    "GASTRONOMIA",
    "HOTEL",
    "PAISAGENS",
    "EVENTO",
  ];

  function CategoryAdd(category: string){
     if(categories.includes(category)){
      setCategories((prev) => prev.filter((item)=> item != category));
  }else{
    setCategories((prev) => [...prev, category]);

  }}




  useEffect(() => {
    const filtered = Filter({ search, categories, places: PlacesEvents });
    setFilteredPlaces(filtered);
  }, [search, categories]);



  return (
    <div className="w-full h-[60vh] items-center flex flex-col border-b border-neutrals-200/25">
      <div className="w-fit max-md:w-full justify-center flex mt-6 relative">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className=" flex w-full md:max-w-[800px] max-md:w-full md:min-w-[600px] h-12 rounded-full border-2 border-neutrals-200/25 px-2 bg-neutrals-100 shadow-xl shadow-neutrals-200/10"
          placeholder="Pesquisar..."
        />
        <div 
        onClick={() => setShowFilter(!showFilter)}
        className=" cursor-pointer h-10 w-24 font-medium font-spline-400 absolute right-1 top-1 bg-primary-100 rounded-full flex justify-start items-center aspect-square px-2">
          Filtrar
        </div>
         <div className={` ${showFilter ? "visible opacity-100" : "invisible opacity-0 -translate-y-20"} duration-200 w-90 h-fit max-md:w-72 p-4 bg-neutrals-100 z-20 rounded-3xl shadow-xl shadow-neutrals-200/10 absolute top-12 right-0`}>
            <h1 className="text-xl text-neutrals-200 border-b border-neutrals-200/25 font-semibold w-full text-left">Filtrar</h1>
            <div className="flex justify-start mt-4 flex-wrap">
                {
                  categoryList.map((category) => {
                    return(
                      <button 
                      onClick={() => CategoryAdd(category)}
                      className={` ${categories.includes(category) ? 'bg-primary-100' : ''} h-fit w-fit p-1 px-3 text-base font-normal font-spline-400 text-neutrals-200 bg-neutrals-100 rounded-full border-2 border-neutrals-200/25 mr-2 mb-2 transition-colors duration-200`}>
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    )
                  })
                }

            </div>
            </div>
        <div className=" cursor-pointer h-10 absolute right-1 top-1 border-2 border-neutrals-100 bg-primary-100 rounded-full flex justify-center items-center aspect-square ">
          <img
            src={Glass}
            alt=""
            className="aspect-square h-8 justify-center items-center flex"
          />
        </div>
      </div>
      <div className="w-full h-full grid max-md:grid-cols-4 max-sm:grid-cols-3 max-[32rem]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-y-scroll mt-6 max-w-6xl">
        {filteredPlaces.map((place) => (
          <Card
            key={place.name}
            imageUrl={place.imageUrl}
            name={place.name}
            city={place.city}
            startDate={place.startDate}
            endDate={place.endDate}
            color02={color02}
          />
        ))}
      </div>
    </div>
  );
  }
