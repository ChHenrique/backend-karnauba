


export function Bigcard({imageUrl, name, text}: {imageUrl: string, text: string, name: string}){
    

    return(

        <div 
        
        className="h-full cursor-pointer aspect-video flex flex-col text-neutrals-100 justify-end items-start rounded-3xl overflow-hidden relative"
        style={{background: `url(${imageUrl})`, backgroundSize: 'cover'}}
        >
            <div className="h-full z-10 hover:bg-gray-100/15 absolute duration-200  w-full bg-gradient-to-tr from-neutrals-200/90 to-60% to-none"></div>
            <div className=" absolute w-1/2 h-full flex flex-col p-12 justify-end items-start gap-2">
            <h1 className=" z-20 text-2xl font-roboto-700 font-bold">{name}</h1>
            <h1 className=" z-20 font-spline-400 font-medium text-base">{text}</h1>
            </div>
        </div>
    )
}
