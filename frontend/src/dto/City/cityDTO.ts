  /* const city = {
    id: response.id,
    name: response.name,
    description: response.description,
    imageUrl: response.imageUrl,
    color01: response.color01,
    color02: response.color02,
   }
    */

   export type cityDataDTO = {
    id:string,
    name: string,
    description: string,
    imageUrl: string,
    color01: string,
    color02: string,
    places: {
      id: string,
      name: string,
      description: string,
      imageUrl: string,
      category: string,
      city: string
      latitude?: number,
      longitude?: number
      adress?: string,
      whatsapp?: string,
      instagram?: string,
    }[],
    events: {
      id: string,
      name: string,
      description: string,
      imageUrl: string,
      startdate: Date,
      enddate: Date,
      cityId: string
    }[]
   }