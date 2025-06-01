import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../../lib/axios.config";

type SearchCityProps = {
  cityName: string;
  imageUrl: string;
};

export function SearchedCity({cityName, imageUrl}: SearchCityProps) {
    const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/city/${cityName}-ce`)} className="flex z-20 mb-2 items-center justify-start px-1 duration-200 w-full h-20 font-medium font-roboto-100 rounded-3xl hover:bg-neutrals-200/20">
        <img
            src={BaseURL + imageUrl}
            alt={cityName}
            className="w-14 h-14 object-cover rounded-3xl"
        />
      <h1 className="text-2xl font-bold ml-4">{cityName}
      </h1>
    </div>
  );
}