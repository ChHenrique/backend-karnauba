import type { cityDataDTO } from "../../../dto/City/cityDTO";

import Logo from "../../../assets/Logo-bright.svg";

import { UpdateCity } from "../services/City/UpdateCity";


import { SketchPicker } from "react-color";

import { useEffect, useState } from "react";
import { BaseURL } from "../../../lib/axios.config";

export function CitySection({ city }: any) {
  // const {name, description, imageUrl} = city;

  const [color1, setColor1] = useState<string>(city?.color01 ?? "#FFFFFF");
  const [color2, setColor2] = useState<string>(city?.color02 ?? "#F1DEFE");

  const [color1On, setColor1On] = useState<boolean>(false);
  const [color2On, setColor2On] = useState<boolean>(false);

  const [cityData, setCityData] = useState({
    name: city?.name,
    description: city?.description,
    imageUrl: BaseURL + city?.imageUrl,
    color01: city?.color01,
    color02: city?.color02,
  });

  console.log(cityData);

  const [image, setImage] = useState<File | null>(city?.imageUrl);

  
    async function updateCity() {
      if (cityData.name && cityData.description && cityData.imageUrl) {
        try {
          const response = await UpdateCity(
            city.id,
            cityData.name,
            cityData.description,
            color2,
            color1
          );
          console.log("City updated successfully:", response);
        } catch (error) {
          console.error("Error updating city:", error);
        }
      }
    }
    
  
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setImage(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCityData((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="w-full h-full flex max-xl:justify-center justify-evenly items-center rounded-3xl p-8">
      <form action="" className="" onSubmit={(e) => {updateCity()
        e.preventDefault();
      }}>
        <div className="flex flex-col overflow-y-scroll pr-4 gap-4 w-full h-full font-roboto-100 font-normal">
          Imagem da cidade
          <label
            htmlFor="img"
            className="h-36 aspect-video bg-primary-200 rounded-3xl"
            style={{
              backgroundImage: `url(${cityData?.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <input type="file" id="img" className="invisible" onChange={(e) => handleFileChange(e)} />
          </label>
          <label htmlFor="name" className="font-roboto-100 font-normal w-full">
            Nome da cidade
          </label>
          <input
            type="text"
            id="name"
            value={city?.name || ""}
            readOnly
            className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"
          />
          <label
            htmlFor="description"
            className="font-roboto-100 font-normal w-full"
          >
            Descrição da cidade
            <p className="text-xs font-medium text-neutrals-200/50">
              Descreva brevemente e resuma sua cidade em 96 caracteres
            </p>
          </label>
          <textarea
          placeholder={city?.description}
          required
          onChange={(e) => setCityData((prev) => ({ ...prev, description: e.target.value }))}
            id="description"
            className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal h-18 resize-none"
          ></textarea>
          <div className="flex flex-col gap-2 w-full h-fit mb-6">
            <h1 className="font-roboto-100 font-normal w-full">
              Paleta de Cores
              <p className="text-xs font-medium text-neutrals-200/50">
                Defina a paleta de cores de sua cidade
              </p>
            </h1>
            <div className="w-full flex flex-row gap-4 justify-between relative">
              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={() => setColor1On((prev) => !prev)}
                  className="h-8 w-8 rounded-md shadow shadow-neutrals-200/10 z-30 cursor-pointer"
                  style={{ backgroundColor: `${color1}` }}
                ></div>

                <SketchPicker
                  className={`${
                    color1On
                      ? "opacity-100 -translate-y-44"
                      : "invisible opacity-0 -translate-y-10"
                  } duration-200 absolute z-20`}
                  color={color1}
                  onChangeComplete={(newColor) => setColor1(newColor.hex)}
                />
                <p>Cor Primaria</p>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <div
                  onClick={() => setColor2On((prev) => !prev)}
                  className="h-8 w-8 rounded-md shadow shadow-neutrals-200/10 z-30 cursor-pointer"
                  style={{ backgroundColor: `${color2}` }}
                ></div>

                <SketchPicker
                  className={`${
                    color2On
                      ? "opacity-100 -translate-y-44"
                      : "invisible opacity-0 -translate-y-10"
                  } duration-200 absolute z-20`}
                  color={color2}
                  onChangeComplete={(newColor) => setColor2(newColor.hex)}
                />
                <p>Cor Secundaria</p>
              </div>
            </div>
            <button

            type="submit"
            className="cursor-pointer z-100 flex justify-center items-center w-full h-fit py-2 rounded-full bg-primary-100 text-neutrals-200 font-roboto-100 font-bold"
          >
            Salvar
          </button>

          </div>
        </div>
      </form>
      {/*Pre visualização */}
      <div className="w-1/3 h-full flex flex-col mt-14 bg-white shadow-xl shadow-neutrals-200/10 rounded-3xl py-2 max-xl:hidden relative">
      <h1 className="absolute top-0 -translate-y-6">Pre-Visualização</h1>
        <svg
          
          className="w-full h-fit"
          viewBox="0 0 320 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0567 25.9981C21.364 25.9981 20.7602 25.8827 20.2452 25.6518C19.739 25.4209 19.3439 25.0879 19.0597 24.6528C18.7844 24.2177 18.6468 23.6982 18.6468 23.0944H20.3784C20.3784 23.4674 20.5071 23.7915 20.7646 24.0668C21.031 24.342 21.4617 24.4797 22.0567 24.4797C22.6605 24.4797 23.1222 24.3243 23.4419 24.0135C23.7616 23.6938 23.9214 23.2631 23.9214 22.7215V21.7624H23.6817C23.5307 21.94 23.2998 22.1088 22.989 22.2686C22.6871 22.4284 22.2343 22.5083 21.6304 22.5083C21.0976 22.5083 20.6004 22.3929 20.1386 22.162C19.6769 21.9312 19.3039 21.5982 19.0198 21.1631C18.7356 20.7191 18.5935 20.1863 18.5935 19.5647V19.4048C18.5935 18.7833 18.74 18.2416 19.0331 17.7798C19.3261 17.3181 19.739 16.9584 20.2718 16.7009C20.8046 16.4345 21.4262 16.3013 22.1366 16.3013C22.847 16.3013 23.4641 16.4345 23.988 16.7009C24.5119 16.9673 24.916 17.3358 25.2001 17.8065C25.4843 18.2771 25.6264 18.8188 25.6264 19.4315V22.6149C25.6264 23.3697 25.471 24.0002 25.1602 24.5063C24.8582 25.0036 24.4365 25.3765 23.8948 25.6252C23.362 25.8738 22.7493 25.9981 22.0567 25.9981ZM22.1099 21.1497C22.4829 21.1497 22.8026 21.0831 23.069 20.9499C23.3442 20.8167 23.5529 20.6303 23.695 20.3905C23.8459 20.1507 23.9214 19.8666 23.9214 19.538V19.4315C23.9214 18.9342 23.7571 18.5435 23.4286 18.2593C23.1089 17.9663 22.6694 17.8198 22.1099 17.8198C21.5505 17.8198 21.1065 17.9663 20.778 18.2593C20.4583 18.5435 20.2984 18.9342 20.2984 19.4315V19.538C20.2984 19.8666 20.3695 20.1507 20.5116 20.3905C20.6625 20.6303 20.8756 20.8167 21.1509 20.9499C21.4262 21.0831 21.7459 21.1497 22.1099 21.1497ZM28.0128 25.9981C27.6576 25.9981 27.3557 25.8827 27.107 25.6518C26.8673 25.4121 26.7474 25.1057 26.7474 24.7327C26.7474 24.3598 26.8673 24.0579 27.107 23.827C27.3557 23.5872 27.6576 23.4674 28.0128 23.4674C28.3768 23.4674 28.6788 23.5872 28.9185 23.827C29.1583 24.0579 29.2782 24.3598 29.2782 24.7327C29.2782 25.1057 29.1583 25.4121 28.9185 25.6518C28.6788 25.8827 28.3768 25.9981 28.0128 25.9981ZM28.0128 21.5493C27.6576 21.5493 27.3557 21.4339 27.107 21.203C26.8673 20.9633 26.7474 20.6569 26.7474 20.2839C26.7474 19.911 26.8673 19.6091 27.107 19.3782C27.3557 19.1384 27.6576 19.0186 28.0128 19.0186C28.3768 19.0186 28.6788 19.1384 28.9185 19.3782C29.1583 19.6091 29.2782 19.911 29.2782 20.2839C29.2782 20.6569 29.1583 20.9633 28.9185 21.203C28.6788 21.4339 28.3768 21.5493 28.0128 21.5493ZM34.6574 25.8116V23.9202H30.0754V21.9489L33.2987 16.4878H36.3623V22.4018H37.9074V23.9202H36.3623V25.8116H34.6574ZM31.7004 22.4018H34.6574V17.58H34.4176L31.7004 22.1887V22.4018ZM40.8728 25.8116V17.7399H40.633L39.381 20.6969H37.5961L39.5009 16.4878H42.5777V25.8116H40.8728Z"
            fill="#262626"
          />
          <rect
            opacity="0.35"
            x="280.756"
            y="16.725"
            width="18.6477"
            height="9.17583"
            rx="1.92396"
            stroke="#262626"
            stroke-width="0.887984"
          />
          <path
            opacity="0.4"
            d="M300.735 19.537V23.0889C301.45 22.7881 301.915 22.0883 301.915 21.313C301.915 20.5376 301.45 19.8378 300.735 19.537Z"
            fill="#262626"
          />
          <rect
            x="282.088"
            y="18.057"
            width="15.9837"
            height="6.51188"
            rx="1.18398"
            fill="#262626"
          />
          <path
            d="M267.096 23.7613C268.233 22.8004 269.898 22.8004 271.035 23.7613C271.092 23.8129 271.126 23.8856 271.128 23.9625C271.13 24.0396 271.099 24.1146 271.044 24.1686L269.263 25.9635C269.211 26.0163 269.14 26.0465 269.065 26.0465C268.991 26.0465 268.92 26.0163 268.868 25.9635L267.087 24.1686C267.032 24.1145 267.001 24.0396 267.003 23.9625C267.005 23.8856 267.039 23.8129 267.096 23.7613ZM264.719 21.3658C267.169 19.0888 270.963 19.089 273.413 21.3658C273.468 21.4192 273.5 21.4931 273.501 21.5699C273.502 21.6466 273.472 21.7206 273.418 21.775L272.389 22.8141C272.283 22.9202 272.111 22.9223 272.002 22.819C271.197 22.0911 270.151 21.6881 269.065 21.6881C267.981 21.6886 266.935 22.0916 266.131 22.819C266.022 22.9223 265.85 22.9202 265.744 22.8141L264.715 21.775C264.661 21.7207 264.631 21.6466 264.632 21.5699C264.633 21.4931 264.663 21.4192 264.719 21.3658ZM262.343 18.9772C266.101 15.3789 272.029 15.3789 275.787 18.9772C275.841 19.0305 275.872 19.1033 275.873 19.1793C275.873 19.2556 275.843 19.3293 275.789 19.3834L274.759 20.4225C274.653 20.5291 274.481 20.5303 274.373 20.4254C272.941 19.0654 271.041 18.3074 269.065 18.3072C267.09 18.3072 265.19 19.0655 263.758 20.4254C263.65 20.5306 263.477 20.5293 263.371 20.4225L262.34 19.3834C262.286 19.3293 262.256 19.2555 262.257 19.1793C262.257 19.1033 262.288 19.0305 262.343 18.9772Z"
            fill="#262626"
          />
          <path
            d="M244.496 22.4967C244.986 22.4967 245.385 22.8941 245.385 23.3844V25.1608C245.385 25.6511 244.986 26.0485 244.496 26.0485H243.608C243.118 26.0484 242.721 25.6511 242.721 25.1608V23.3844C242.721 22.8941 243.118 22.4967 243.608 22.4967H244.496ZM248.641 20.7203C249.131 20.7203 249.528 21.1186 249.528 21.609V25.1608C249.528 25.6511 249.131 26.0485 248.641 26.0485H247.753C247.263 26.0485 246.864 25.6511 246.864 25.1608V21.609C246.864 21.1186 247.263 20.7203 247.753 20.7203H248.641ZM252.784 18.649C253.275 18.6492 253.672 19.0464 253.672 19.5367V25.1608C253.672 25.6511 253.274 26.0484 252.784 26.0485H251.896C251.406 26.0485 251.008 25.6511 251.008 25.1608V19.5367C251.008 19.0463 251.406 18.649 251.896 18.649H252.784ZM256.928 16.5768C257.418 16.5768 257.816 16.9742 257.816 17.4645V25.1608C257.816 25.6511 257.418 26.0485 256.928 26.0485H256.04C255.55 26.0484 255.152 25.6511 255.152 25.1608V17.4645C255.153 16.9743 255.55 16.5769 256.04 16.5768H256.928Z"
            fill="#262626"
          />
        </svg>

        <div className="w-full h-10 flex flex-col justify-start items-start">
          <img src={Logo} className="h-7 ml-4" alt="" />
          <h1
            className="w-full items-center flex justify-center font-roboto-100 font-semibold"
            style={{ backgroundColor: color1 }}
          >
            Moraujo
          </h1>
        </div>

        <div className="w-full mt-4 flex flex-col justify-center items-center relative p-8">
          <div
            className="w-full aspect-square rounded-lg flex justify-end items-start overflow-hidden pb-2 pl-2 relative"
            style={{ backgroundColor: color2 }}
          >
            <div
              className="w-full h-full rounded-lg relative flex justify-start overflow-hidden"
              style={{ background: `url(${cityData?.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="h-full z-10 hover:bg-gray-100/15 absolute duration-200  w-full bg-gradient-to-tr from-neutrals-200/60 to-60% to-none"></div>
              <div className="text-white absolute w-full max-xl:w-full h-full flex flex-col p-6 max-md:pb-4 max-md:pl-3 justify-end items-start gap-2">
                <h1 className=" z-20 max-md:text-xl text-base font-roboto-700 font-bold">
                  {city?.name || "Nome da Cidade"}
                </h1>
                <h1 className=" z-20 max-md:text-sm font-spline-400 font-medium text-xs">
                  {cityData.description ||
                    "Descrição da cidade"}
                </h1>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
