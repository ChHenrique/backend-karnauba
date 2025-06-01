import Plus from "../../../assets/Plus.svg";
import { Card } from "../components/CardEvent";
import { useState } from "react";

import { ModalEventCreate } from "../components/ModalEventCreate";
import { ModalEventUpdate } from "../components/ModalEventUpdate";

export function EventsSection() {
  const [openEventUpdate, setOpenEventUpdate] = useState(false);
  const [openEventCreate, setOpenEventCreate] = useState(true);

  const [event, setEvent] = useState<EventDTO>({
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
        open={openEventUpdate}
        setOpen={setOpenEventUpdate}
        eventData={event}
      />
      <ModalEventCreate open={openEventCreate} setOpen={setOpenEventCreate} />

      <div className="w-full h-full p-4 grid place-items-baseline grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 overflow-y-auto overflow-x-hidden">
        <Card
          event={{
            id: "1",
            name: "Local 01",
            description: "Descrição do local",
            imageUrl: "/images/locals/1.png",
            category: "Categoria",
            city: "São Paulo",
            latitude: -23.5505,
            longitude: -46.6333,
            adress: "Avenida Paulista, 1578",
            startDate: "2025-06-10",
            endDate: "2025-06-15",
          }}
          color02="#E8C9FF"
          setUpdate={setOpenEventUpdate}
          setEvent={setEvent}
        />
        <Card
          event={{
            imageUrl: "/images/events/2.png",
            name: "Evento 02",
            city: "Fortaleza",
            id: "2",
            latitude: -3.7272,
            longitude: -38.5233,
            adress: "Dragão do Mar",
            startDate: "2025-06-05T09:00:00.000Z",
            endDate: "2025-06-05T17:00:00.000Z",
            description: "Evento cultural no centro",
            category: "Cultura",
          }}
          setUpdate={setOpenEventUpdate}
          color02="#FFD8C2"
          setEvent={setEvent}
        />
      </div>
    </div>
  );
}
