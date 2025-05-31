
import { Bigcard } from "../../../components/BigCard";
import { BaseURL } from "../../../lib/axios.config";


type CardCityProps = {
  cityName: string;
  cityText: string;
  cityImageUrl: string;
}

export function CardCity({cityName, cityText, cityImageUrl}: CardCityProps) {


  return (
    <div className="w-full h-fit  flex justify-center items-center ">
      <div className="w-full h-fit  flex justify-center items-center">
        <div className="w-full max-w-4xl">
          <Bigcard imageUrl={cityImageUrl} name={cityName} text={cityText}>
          </Bigcard>
        </div>
      </div>
    </div>
  );
}
