import Plus from "../../../assets/Plus.svg";
import { Card } from "../components/CardEvent";
import { useState } from "react";

import { ModalEventCreate } from "../components/ModalEventCreate";
import { ModalEventUpdate } from "../components/ModalEventUpdate";

export function EventsSection({allEvents}: any) {
  const [openEventUpdate, setOpenEventUpdate] = useState(false);
  const [openEventCreate, setOpenEventCreate] = useState(false);

  const [event, setEvent] = useState({
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    city: "",
    adress: "",
    startDate: "",
    endDate: "",
    latitude: 0,
    longitude: 0,
  });

  return (
    <div className="w-full h-full rounded-3xl p-6 pt-10">
      <div className="w-full h-12 flex items-center justify-end mb-6">
        <button
          onClick={() => setOpenEventCreate(true)}
          className="w-fit p-2 px-4 shadow-xl shadow-neutrals-200/10 rounded-3xl flex flex-row items-center justify-center cursor-pointer bg-primary-100"
        >
          Criar Evento <img src={Plus} className="h-6 w-6" alt="" />
        </button>
      </div>

      <ModalEventUpdate
        eventData={event}
        open={openEventUpdate}
        setOpen={setOpenEventUpdate}
        
      />
      <ModalEventCreate open={openEventCreate} setOpen={setOpenEventCreate} />

      <div className="w-full h-full p-4 grid place-items-baseline grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 overflow-y-auto overflow-x-hidden">
        {allEvents.map((event) =>(
       
        <Card
          event={{
            id: event.id,
            name: event.name,
            description: event.description,
            imageUrl: event.imageUrl,
            city: event.city,
            adress: event.adress,
            startDate: event.startDate,
            endDate: event.endDate,
            latitude: event.latitude,
            longitude: event.longitude,

          }}
          setUpdate={setOpenEventUpdate}
          color02={event.color02}
          setEvent={setEvent}
        />))}
      </div>
    </div>
  );
}
