import { Map } from "./Map";
import X from "../../../assets/X.svg";
import { useEffect, useState } from "react";
import { UpdatePlace } from "../services/Places/UpdatePlace";

export function ModalLocalUpdate({
  open,
  setOpen,
  place,
}: {
  place: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    category: string;
    city: string;
    latitude?: number;
    longitude?: number;
    adress?: string;
    instagram?: string;
    whatsapp?: string;
  };
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [local, setLocal] = useState({
    id: place?.id ?? "",
    name: place?.name ?? "",
    description: place?.description ?? "",
    imageUrl: place?.imageUrl ?? "",
    category: place?.category ?? "",
    city: place?.city ?? "",
    latitude: place?.latitude ?? 0,
    longitude: place?.longitude ?? 0,
    adress: place?.adress ?? "",
    instagram: place?.instagram ?? "",
    whatsapp: place?.whatsapp ?? "",
  });

  console.log("Local:", place);

  
     async function upPlace({local}: any) {
      if (local.id) {
        const updatedPlace = await UpdatePlace(local);
        console.log("Local updated:", updatedPlace);
      }
     }
     
 

  const [image, setImage] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setImage(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocal((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    upPlace(local);
    console.log("Local updated:", local);
    console.log("Image file:", image);
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
            Imagem da localização
            <label
              htmlFor="img"
              className="h-full aspect-video bg-primary-200 rounded-3xl cursor-pointer"
              style={{
                backgroundImage: `url(${local.imageUrl || "https://cupix.com.br/assets/img/cupix-logo.png"})`,
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

            <label htmlFor="name">Nome do local</label>
            <input
              type="text"
              id="name"
              placeholder={place.name}
              onChange={(e) => setLocal({ ...local, name: e.target.value })}
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <label htmlFor="category">Categoria</label>
            <select
              id="category"
              onChange={(e) =>
                setLocal((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
              value={place.category}
            >
              <option value="">Selecione uma categoria</option>
              <option value="GASTRONOMIA">GASTRONOMIA</option>
              <option value="PAISAGEM">PAISAGEM</option>
              <option value="HOTEL">HOTEL</option>
            </select>

            <label htmlFor="description">
              Descrição da cidade
              <p className="text-xs font-medium text-neutrals-200/50">
                Descreva brevemente e resuma sua cidade em 96 caracteres
              </p>
            </label>
            <textarea
              id="description"
              placeholder={place.description}
              onChange={(e) =>
                setLocal((prev) => ({ ...prev, description: e.target.value }))
              }
              className="w-full min-h-28 border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
            />

            <div className="font-roboto-100 font-normal w-full">
              <h1>Redes sociais</h1>
              <p className="text-xs font-medium text-neutrals-200/50">
                Coloque as informações desejadas OBS: Caso não possua não é
                necessário colocar
              </p>

              <label htmlFor="instagram">Instagram</label>
              <input
                type="text"
                id="instagram"
                placeholder={place.instagram || "https://instagram.com/..."}
                onChange={(e) =>
                  setLocal((prev) => ({ ...prev, instagram: e.target.value }))
                }
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal font-spline-500"
              />

              <label htmlFor="whatsapp">WhatsApp</label>
              <input
                type="text"
                id="whatsapp"
                placeholder={place.whatsapp || "88 9 96913-4510"}
                onChange={(e) =>
                  setLocal((prev) => ({ ...prev, whatsapp: e.target.value }))
                }
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal font-spline-500"
              />

              <label>Localização</label>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  id="latitude"
                  placeholder={String(place.latitude)}
                  onChange={(e) => {
                    if (!isNaN(Number(e.target.value))) {
                      setLocal((prev) => ({
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
                  placeholder={String(place.longitude)}
                  onChange={(e) => {
                    if (!isNaN(Number(e.target.value))) {
                      setLocal((prev) => ({
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
                placeholder={place.adress}
                onChange={(e) =>
                  setLocal((prev) => ({ ...prev, adress: e.target.value }))
                }
                className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal font-spline-500"
              />

              <Map
                position={[place?.latitude, place?.longitude]}
                adress={place.adress}
                
              />
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
