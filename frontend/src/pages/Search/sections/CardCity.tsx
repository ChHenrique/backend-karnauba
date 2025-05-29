import Fortaleza from "../../../assets/image.png";

import { Bigcard } from "../../../components/BigCard";


type CardCityProps = {
  cityName: string;
  cityText: string;
  cityImageUrl: string;
}

export function CardCity({cityName, cityText, cityImageUrl}: CardCityProps) {
  const Cidades = [
    {
      name: "Fortaleza",
      text: "A capital do Ceará, conhecida por suas belas praias e cultura vibrante.",
      imageUrl: Fortaleza,
    },
  ];

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
