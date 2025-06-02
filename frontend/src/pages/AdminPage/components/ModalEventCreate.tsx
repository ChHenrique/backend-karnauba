import { Map } from "./Map";
import X from "../../../assets/X.svg";
import { useState } from "react";
import type { EventDTO } from "../../../dto/Event/EventDTO";

export function ModalEventCreate({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [event, setEvent] = useState<EventDTO>({
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    category: "",
    city: "",
    latitude: 0,
    longitude: 0,
    adress: "",
    startDate: "",
    endDate: "",
  });

  const [image, setImage] = useState<File | null>(null);

  function handleFileChange(eventInput: React.ChangeEvent<HTMLInputElement>) {
    const file = eventInput.target.files?.[0];
    setImage(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEvent((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(eventSubmit: React.FormEvent) {
    eventSubmit.preventDefault();
    console.log("Evento criado:", event);
    console.log("Arquivo da imagem:", image);
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
              placeholder="Ex: Festival Cultural"
              value={event.name}
              onChange={(e) => setEvent({ ...event, name: e.target.value })}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              value={event.category}
              onChange={(e) => setEvent((prev) => ({ ...prev, category: e.target.value }))}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            >
              <option value="">Selecione uma categoria</option>
              <option value="SHOW">SHOW</option>
              <option value="FEIRA">FEIRA</option>
              <option value="CULTURAL">CULTURAL</option>
            </select>

            <label htmlFor="description">
              Descrição do evento
              <p className="text-xs font-medium text-neutrals-200/50">
                Descreva brevemente e resuma o evento em 96 caracteres
              </p>
            </label>
            <textarea
              id="description"
              placeholder="Ex: Um evento para toda a família com música, comida e arte."
              value={event.description}
              onChange={(e) =>
                setEvent((prev) => ({ ...prev, description: e.target.value }))
              }
              className="w-full min-h-28 border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <div className="font-roboto-100 font-normal w-full">
              <h1>Datas do evento</h1>
              <p className="text-xs font-medium text-neutrals-200/50">
                Selecione o período de realização do evento
              </p>

              <label htmlFor="startDate">Data de início</label>
              <input
                type="date"
                id="startDate"
                value={event.startDate}
                onChange={(e) =>
                  setEvent((prev) => ({ ...prev, startDate: e.target.value }))
                }
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
              />

              <label htmlFor="endDate">Data de término</label>
              <input
                type="date"
                id="endDate"
                value={event.endDate}
                onChange={(e) =>
                  setEvent((prev) => ({ ...prev, endDate: e.target.value }))
                }
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
              />

              <label>Localização</label>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  id="latitude"
                  placeholder="-7.12345"
                  value={event.latitude.toString()}
                  onChange={(e) => {
                    if (!isNaN(Number(e.target.value))) {
                      setEvent((prev) => ({
                        ...prev,
                        latitude: Number(e.target.value),
                      }));
                    }
                  }}
                  className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal font-spline-500"
                />
                <input
                  type="text"
                  id="longitude"
                  placeholder="-39.12345"
                  value={event.longitude.toString()}
                  onChange={(e) => {
                    if (!isNaN(Number(e.target.value))) {
                      setEvent((prev) => ({
                        ...prev,
                        longitude: Number(e.target.value),
                      }));
                    }
                  }}
                  className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal font-spline-500"
                />
              </div>

              <input
                type="text"
                id="adress"
                placeholder="Rua do Evento, 456 - Centro"
                value={event.adress}
                onChange={(e) =>
                  setEvent((prev) => ({ ...prev, adress: e.target.value }))
                }
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal font-spline-500"
              />

              <Map position={[event.latitude, event.longitude]} adress={event.adress} />
            </div>
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
