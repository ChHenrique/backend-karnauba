import { href } from "react-router-dom";

type Props = {
    instagram?: string;
    whatsapp?: string;
}

export function SocialSection({instagram, whatsapp}: Props) {


    return (
    <div className="flex flex-col min-h-[200px] rounded-3xl items-start justify-start w-full h-fit p-6 bg-neutrals-100 shadow-xl overflow-hidden shadow-neutrals-200/10">
         <h1 className="text-2xl mb-4 font-roboto-100 font-bold w-full text-left">Redes Sociais</h1>
       <a href={instagram} className="w-full">   <p className="text-base font-spline-400 font-normal w-fit max-md:w-full break-words whitespace-normal text-left p-1 border rounded-2xl border-neutrals-200">{ instagram }</p> </a>      
         <h1 className="text-base mt-6 font-spline-400 font-normal w-fit text-left p-1 mt-4git  border rounded-2xl border-neutrals-200">{ whatsapp }</h1>

    </div>
    )
}