import { Header } from "./components/Header";
import { Footer } from "../../components/Footer";

import { Bigcard } from "../../components/BigCard";
import { DescriptionSection } from "./Sections/description";
import { SocialSection } from "./Sections/Social";
import { Map } from "./Sections/Map";

import type { cityDataDTO } from "../../dto/City/cityDTO";
import { GetCityInfo } from "../../services/GetCity";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function LocalPage() {
  const { id, localId } = useParams();
  const [city, setCity] = useState<cityDataDTO | null>(null);
  const [place, setPlace] = useState<cityDataDTO["places"][0] | null>(null);

useEffect(() => {
  if (id && localId) {
    GetCityInfo(id).then((data: cityDataDTO) => {
      setCity(data);
      const selectedPlace = data.places.find((place) => place.id === localId);
      setPlace(selectedPlace || null);
    });
  }
}, [id, localId]);


  return (
    <div className="flex flex-col items-center w-screen h-fit bg-neutrals-100 relative">
      <div className="w-full h-[80vh] z-0 absolute top-0 mt-24"
      style={{ backgroundColor: city?.color02 || "#F1DEFE" }}>
      
        <div
          className="h-[25vh] w-full absolute bottom-0 bg-white "
          style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%)" }}
        ></div>
      </div>

      <Header cityName={city?.name} FirstColor={city?.color01}></Header>
      <div className="w-full z-10 max-w-4xl flex flex-col gap-10 px-3 mt-28 ">
        {place && <Bigcard imageUrl={place.imageUrl || "#"} />}{" "}
      </div>
      <div className="w-full z-10 mt-10 max-w-4xl flex flex-col gap-10 px-3">
        {place && (
          <>
            <DescriptionSection
              Tittle={place.name || "Local não encontrado"}
              Description={place.description || "Descrição indisponível"}
            />
            <Map
              city={city?.name || "Cidade"}
              adress={place.adress || "Endereço não disponível"}
              position={[place.latitude ?? 0, place.longitude ?? 0]}
            />
            <SocialSection
              instagram={place.instagram || ""}
              whatsapp={place.whatsapp || ""}
        />
          </>
          
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}
