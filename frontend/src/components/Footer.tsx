import Logo from '../assets/Logo-dark.svg'

import Email from '../assets/email.svg'
import Insta from '../assets/Insta.svg'
import Whats from '../assets/Whatsapp.svg'


export function Footer(){



    return(
        <div className="w-screen bg-neutrals-200 h-40 mt-30 flex pb-2  flex-col justify-end items-center">
            <div className=' flex justify-center gap-6   items-center h-fit  w-1/6 mb-6'>
            <img src={Insta} alt="" className='h-6 aspect-square'/>
            <img src={Whats} alt="" className='h-6 aspect-square' />
            <img src={Email} alt="" className='h-6 aspect-square' />
            </div>

            <img src={Logo} alt="" className='h-12' />
            <h1 className="text-neutrals-100/30 font-spline-400 text-sm text-center">Cactour @2025 Todos os direitos reservados</h1>

        </div>
    )
}