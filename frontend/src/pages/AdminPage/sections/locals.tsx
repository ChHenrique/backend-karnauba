import Plus from '../../../assets/Plus.svg'
import { Card } from '../components/Card'

import { ModalLocalUpdate } from '../components/ModalLocalUpdate'

import { useState } from 'react';
import { ModalLocalCreate } from '../components/ModalLocalCreate';



 export function LocalsSection() {
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openCreate, setOpenCreate] = useState(true);


    return(
       <div className="w-full h-full rounded-3xl p-6 pt-10">

        <div className="w-full h-12 flex items-center justify-end mb-6">
            <button onClick={()=> setOpenCreate(true)} className='w-fit p-2 px-4 shadow-xl shadow-neutrals-200/10 rounded-3xl flex flex-row items-center justify-center cursor-pointer bg-primary-100'>Criar Local <img src={Plus} className='h-6  w-6' alt="" /></button>

        </div>

         <ModalLocalUpdate open={openUpdate} setOpen={setOpenUpdate}></ModalLocalUpdate>
         <ModalLocalCreate open={openCreate} setOpen={setOpenCreate}></ModalLocalCreate>

          
          <div className='w-full h-full p-4 grid place items-baseline grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2  overflow-y-auto overflow-x-hidden'>
            <Card 
            imageUrl={'/images/locals/1.png'}
            name='Local 01'
            city='São Paulo'
            color02='#E8C9FF'
            id='1'
            latitude={-23.5505}
            longitude={-46.6333}
            adress='Avenida Paulista, 1578'
            ></Card>            <Card 
            imageUrl={'/images/locals/1.png'}
            name='Local 01'
            city='São Paulo'
            color02='#E8C9FF'
            id='1'
            latitude={-23.5505}
            longitude={-46.6333}
            adress='Avenida Paulista, 1578'
            ></Card>
                        <Card 
            imageUrl={'/images/locals/1.png'}
            name='Local 01'
            city='São Paulo'
            color02='#E8C9FF'
            id='1'
            latitude={-23.5505}
            longitude={-46.6333}
            adress='Avenida Paulista, 1578'
            ></Card>
                        <Card 
            imageUrl={'/images/locals/1.png'}
            name='Local 01'
            city='São Paulo'
            color02='#E8C9FF'
            id='1'
            latitude={-23.5505}
            longitude={-46.6333}
            adress='Avenida Paulista, 1578'
            ></Card>
                        <Card 
            imageUrl={'/images/locals/1.png'}
            name='Local 01'
            city='São Paulo'
            color02='#E8C9FF'
            id='1'
            latitude={-23.5505}
            longitude={-46.6333}
            adress='Avenida Paulista, 1578'
            ></Card>
                        <Card 
            imageUrl={'/images/locals/1.png'}
            name='Local 01'
            city='São Paulo'
            color02='#E8C9FF'
            id='1'
            latitude={-23.5505}
            longitude={-46.6333}
            adress='Avenida Paulista, 1578'
            ></Card>



           


          </div>

       </div>
         
    )
 }