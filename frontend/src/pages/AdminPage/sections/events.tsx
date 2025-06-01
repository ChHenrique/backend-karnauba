import Plus from '../../../assets/Plus.svg';
import { Card } from '../components/Card';
import { useState } from 'react';

import { ModalEventCreate } from '../components/ModalEventCreate';
import { ModalEventUpdate } from '../components/ModalEventUpdate';

export function EventsSection() {
  const [openEventUpdate, setOpenEventUpdate] = useState(false);
  const [openEventCreate, setOpenEventCreate] = useState(true);

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

      <ModalEventUpdate open={openEventUpdate} setOpen={setOpenEventUpdate} />
      <ModalEventCreate open={openEventCreate} setOpen={setOpenEventCreate} />

      <div className="w-full h-full p-4 grid place-items-baseline grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 overflow-y-auto overflow-x-hidden">
        <Card
          imageUrl={'/images/events/1.png'}
          name="Evento 01"
          city="Fortaleza"
          color02="#FFD8C2"
          id="1"
          latitude={-3.7172}
          longitude={-38.5433}
          adress="Praça do Ferreira, Centro"
          startDate="2025-06-01T10:00:00.000Z"
          endDate="2025-06-01T18:00:00.000Z"
        />
        <Card
          imageUrl={'/images/events/2.png'}
          name="Evento 02"
          city="Fortaleza"
          color02="#FFD8C2"
          id="2"
          latitude={-3.7272}
          longitude={-38.5233}
          adress="Dragão do Mar"
          startDate="2025-06-05T09:00:00.000Z"
          endDate="2025-06-05T17:00:00.000Z"
        />
        <Card
          imageUrl={'/images/events/3.png'}
          name="Evento 03"
          city="Fortaleza"
          color02="#FFD8C2"
          id="3"
          latitude={-3.7372}
          longitude={-38.5133}
          adress="Av. Beira Mar, 1500"
          startDate="2025-06-10T12:00:00.000Z"
          endDate="2025-06-10T20:00:00.000Z"
        />
      </div>
    </div>
  );
}
