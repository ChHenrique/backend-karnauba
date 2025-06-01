import type { cityDataDTO } from "../../../dto/City/cityDTO";


export function CitySection({city}: cityDataDTO) {


    return(
        <div className="w-full h-full flex justify-center items-center bg-white shadow-xl shadow-neutrals-200/10 rounded-3xl p-8">
            <form action="">
                <div className="flex flex-col gap-4 w-full h-full">
                    Imagem da cidade
                    <label htmlFor="img" className="h-64 aspect-video bg-primary-200 rounded-3xl"
                    style={{backgroundImage: "url('https://cupix.com.br/assets/img/cupix-logo.png')", backgroundSize: "cover", backgroundPosition: "center"}}
                    ><input type="file" id="img" className="invisible"/></label>

                    <label htmlFor="name" className="font-roboto-100 font-normal w-full">Nome da cidade</label>
                    <input type="text" id="name" className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal"/>

                    <label htmlFor="description" className="font-roboto-100 font-normal w-full">Descrição da cidade</label>
                    <textarea id="description" className="w-full border-2 rounded-2xl mt-1 border-neutrals-200/30 outline-0 px-2 p-1 font-normal h-24 resize-none"></textarea>

                    <div className="flex flex-col gap-2 w-full h-fit">
                        <h1 className="font-roboto-100 font-normal w-full">Paleta de cORES</h1>

                    </div>

                </div>



            </form>

        </div>

    )}