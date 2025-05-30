type DescriptionProps = {
  Tittle: string;
  Description: string;
};

export function DescriptionSection({Tittle,Description}: DescriptionProps) {
 return(
    <div className="flex flex-col min-h-[200px] rounded-3xl items-start justify-start w-full h-fit p-6 bg-neutrals-100 shadow-xl shadow-neutrals-200/10">
         <h1 className="text-2xl mb-4 font-roboto-100 font-bold w-full text-left">{ Tittle}</h1>
         <h1 className="text-base font-spline-400 font-normal w-full text-left">{ Description }</h1>
    </div>
 )

}