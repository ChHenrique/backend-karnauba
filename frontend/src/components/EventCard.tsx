


export function Card({imageUrl, name, city, startDate, endDate}: {imageUrl: string, city: string, name: string, startDate: string, endDate: string}){
    

    return(

        <div 
        
        className="h-full cursor-pointer w-fit flex flex-col text-neutrals-200 justify-end items-start overflow-hidden relative"
        >
            <div className="h-50 aspect-square flex justify-end items-end bg-primary-200 rounded-2xl">
            <div className="h-48 aspect-square rounded-2xl" style={{background: `url(${imageUrl})`, backgroundSize: 'cover'}}>
            <div className="h-full z-10 hover:bg-gray-100/15 absolute duration-200  w-full "></div>
            
            </div></div>

            <div>
                <h1 className="text-base font-roboto-100 font-bold">{name}</h1>
                <h1 className="text-sm font-roboto-100 font-bold">{city}, Ce</h1>
                <h1 className="text-sm font-roboto-100 font-bold">De {startDate} à {endDate}</h1>


            </div>
        </div>
    )
}
