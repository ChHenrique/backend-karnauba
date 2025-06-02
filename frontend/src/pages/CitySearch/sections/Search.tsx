import { useEffect, useState } from "react";
import Glass from "../../../assets/Glass.svg";
import { GetCities } from "../services/GetCitys";
import type { cityDataDTO } from "../../../dto/City/cityDTO";
import { SearchedCity } from "../components/SearchCity";

export function SearchSection() {
  const [searchCity, setSearchCity] = useState<cityDataDTO[]>([]);

  const [filteredCities, setFiltered] = useState<cityDataDTO[]>([]);
  const [searching, setSearching] = useState<boolean>(false);

  useEffect(() => {


    GetCities().then((data: cityDataDTO[]) => {
      setSearchCity(data);
      setFiltered(data);
    });
  }, []);

  return (
    <div className="w-full h-[60vh] justify-center items-center flex flex-col">
      <h1 className="font-roboto-700 font-semibold text-3xl max-md:w-full text-center">
        Qual cidade você quer conhecer?
      </h1>
      <div className="w-fit max-md:w-full justify-center flex mt-6 relative">
        <input
          onChange={(e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filtered = searchCity.filter((city) =>
              city.name.toLowerCase().includes(searchTerm)
            );
            setFiltered(filtered);
          }}
          onFocus={() => setSearching(true)}
          onBlur={() => setTimeout(() => setSearching(false),500)}
          type="text"
          className=" flex w-full md:max-w-[800px] max-md:w-full md:min-w-[600px] h-12 rounded-full border-2 border-neutrals-200/25 px-2 bg-neutrals-100 shadow-xl shadow-neutrals-200/10"
          placeholder="Pesquisar..."
        />
        <div className=" cursor-pointer h-10 absolute right-1 top-1 bg-primary-100 rounded-full flex justify-center items-center aspect-square ">
          <img
            src={Glass}
            alt=""
            className="aspect-square h-8 justify-center items-center flex"
          />
        </div>
        <div
          className={` ${
            searching
              ? "visible opacity-100"
              : "invisible opacity-0 -translate-y-16"
          } duration-200 absolute w-full z-10 h-64 bg-white overflow-y-auto p-2 flex flex-col top-12 rounded-b-3xl shadow-xl shadow-neutrals-200/10`}
        >
          {filteredCities.map((city) => (
            <SearchedCity
              key={city.name}
              cityName={city.name}
              imageUrl={city.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
