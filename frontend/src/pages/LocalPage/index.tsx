import { Header } from "./components/Header"
import { Footer } from "../../components/Footer"

import { Bigcard } from "../../components/BigCard"
import { DescriptionSection } from "./Sections/description"
import { Map } from "./Sections/Map"

import Fortaleza from "../../assets/image.png"


export function LocalPage(){

    

    return(

        <div className="flex flex-col items-center w-screen h-fit bg-neutrals-100">
                <Header></Header>
                <div className="w-full max-w-4xl flex flex-col gap-10 px-3">
                <Bigcard imageUrl={Fortaleza}></Bigcard>
                </div>
                <div className="w-full mt-10 max-w-4xl flex flex-col gap-10 px-3">
                 <DescriptionSection Tittle="canela club" Description="Um local muito animado e canelado eu so estou escrevendo issso para testar se funciona de uma forma boa a quebra de texto e se o limite de tamanho ira me atrapalhar muito"></DescriptionSection>
                 <Map city="cidade" adress="rua do pau" position={[1.2321,1.11]}></Map>

                </div>
                <Footer></Footer>
        </div>
    )
}