import { Map } from "./Map";
import X from "../../../assets/x.svg";
import { useState } from "react";
import type { EventDTO } from "../../../dto/Event/EventDTO";

export function ModalEventUpdate({
  open,
  setOpen,
  eventData,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
 eventData: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    category: string;
    city: string;
    latitude?: number;
    longitude?: number;
    adress?: string;
    startDate?: string;
    endDate?: string;
  };
}) {
 const {id, name, description, imageUrl, category, city, latitude, longitude, adress, startDate, endDate} = eventData;

 const [event, setEvent] = useState<EventDTO>({
  id: id ?? "",
  name:  name ?? "",
  description: eventData?.description ?? "",
  imageUrl: eventData?.imageUrl ?? "",
  category: eventData?.category ?? "",
  city: eventData?.city ?? "",
  latitude: eventData?.latitude ?? 0,
  longitude: eventData?.longitude ?? 0,
  adress: eventData?.adress ?? "",
  startDate: eventData?.startDate ?? "",
  endDate: eventData?.endDate ?? "",
});



  const [image, setImage] = useState<File | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setImage(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvent((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Evento atualizado:", event);
    console.log("Arquivo de imagem:", image);
  }

  return (
    <div
      onClick={() => setOpen(false)}
      className={
        `absolute bg-neutrals-200/60 flex w-full h-full top-0 left-0 z-50 items-center justify-center` +
        (open ? " visible opacity-100 " : "translate-y-20 invisible opacity-0 ")
      }
    >
      <form
        className="w-1/4 h-4/5 p-4 bg-white flex justify-start items-center rounded-3xl relative min-w-[400px]"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll relative overflow-x-hidden pb-12">
          <div className="flex flex-col gap-4 w-full h-full font-roboto-100 font-normal">
            Imagem do evento
            <label
              htmlFor="img"
              className="h-full aspect-video bg-primary-200 rounded-3xl cursor-pointer"
              style={{
                backgroundImage: `url(${event.imageUrl || "https://cupix.com.br/assets/img/cupix-logo.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <input
                type="file"
                id="img"
                className="invisible"
                onChange={handleFileChange}
              />
            </label>

            <label htmlFor="name">Nome do evento</label>
            <input
              type="text"
              id="name"
              value={event.name}
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={event.category}
              onChange={(e) => setEvent({ ...event, category: e.target.value })}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            >
              <option value="">Selecione uma categoria</option>
              <option value="SHOW">SHOW</option>
              <option value="FEIRA">FEIRA</option>
              <option value="CULTURAL">CULTURAL</option>
            </select>

            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              value={event.description}
              onChange={(e) => setEvent({ ...event, description: e.target.value })}
              className="w-full min-h-28 border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <label htmlFor="startDate">Data de início</label>
            <input
              type="date"
              id="startDate"
              value={event.startDate.toString().split("T")[0]}
              onChange={(e) => setEvent({ ...event, startDate: new Date(e.target.value) })}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <label htmlFor="endDate">Data de término</label>
            <input
              type="date"
              id="endDate"
              value={event.endDate.toString().split("T")[0]}
              onChange={(e) => setEvent({ ...event, endDate: new Date(e.target.value) })}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <label>Localização</label>
            <div className="flex flex-row gap-2">
              <input
                type="text"
                id="latitude"
                value={event.latitude.toString()}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (!isNaN(value)) setEvent({ ...event, latitude: value });
                }}
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
              />
              <input
                type="text"
                id="longitude"
                value={event.longitude.toString()}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (!isNaN(value)) setEvent({ ...event, longitude: value });
                }}
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
              />
            </div>

            <input
              type="text"
              id="adress"
              value={event.adress}
              onChange={(e) => setEvent({ ...event, adress: e.target.value })}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <Map position={[event.latitude, event.longitude]} adress={event.adress} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          className="h-8 w-8 bg-white rounded-full absolute top-4 right-4"
        >
          <img src={X} alt="" />
        </button>

        <div className="absolute left-0 px-4 bottom-0 w-full h-fit justify-center items-center pb-4 flex">
          <button
            type="submit"
            className="cursor-pointer z-100 flex justify-center items-center w-full h-fit py-2 rounded-full bg-primary-100 text-neutrals-200 font-roboto-100 font-bold"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
