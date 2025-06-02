import Plus from "../../../assets/Plus.svg";
import { Card } from "../components/CardLocal";

import type { PlaceDTO } from "../../../dto/Place/SimplePlaceDTO";

import { ModalLocalUpdate } from "../components/ModalLocalUpdate";

import { useState } from "react";
import { ModalLocalCreate } from "../components/ModalLocalCreate";

export function LocalsSection({ allPlaces }: any) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);


  const [local, setLocal] = useState({
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    city: "",
    latitude: 0,
    longitude: 0,
    adress: "",
    instagram: "",
    whatsapp: "",
  });

  return (
    <div className="w-full h-full rounded-3xl p-6 pt-10">
      <div className="w-full h-12 flex items-center justify-end mb-6">
        <button
          onClick={() => setOpenCreate(true)}
          className="w-fit p-2 px-4 shadow-xl shadow-neutrals-200/10 rounded-3xl flex flex-row items-center justify-center cursor-pointer bg-primary-100"
        >
          Criar Local <img src={Plus} className="h-6  w-6" alt="" />
        </button>
      </div>

      <ModalLocalUpdate
        place={local}
        open={openUpdate}
        setOpen={setOpenUpdate}


      ></ModalLocalUpdate>
      <ModalLocalCreate
        open={openCreate}
        setOpen={setOpenCreate}
      ></ModalLocalCreate>

      <div className="w-full h-full p-4 grid place items-baseline grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2  overflow-y-auto overflow-x-hidden">
        {allPlaces ? allPlaces.map((place) => (
        <Card
          place={{
            id: place.id,
            name: place.name,
            description: place.description,
            imageUrl: place.imageUrl,
            category: place.category,
            city: place.city,
            latitude: place.latitude,
            longitude: place.longitude,
            adress: place.adress,
            instagram: place.instagram,
            whatsapp: place.whatsapp,
          }}
          color02={place.color02}
          key={place.id}
          setUpdate={setOpenUpdate}
          setLocals={setLocal}
        />)): null}

      </div>
    </div>
  );
}
