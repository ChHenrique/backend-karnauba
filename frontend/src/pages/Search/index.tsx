import { Header } from "../../components/Header"
import { SearchSection } from "./sections/Search"
import { Restaurants } from "./sections/Restaurants"
import { Events } from "./sections/Events"
import { Hotels } from "./sections/Hotels"
import { Footer } from "../../components/Footer"

export function Search(){

    return(
        <div className="h-full w-full px-12 pt-4 bg-neutrals-100 flex flex-col items-center">
            <Header></Header>
            <SearchSection></SearchSection>
            <Restaurants></Restaurants>
            <Hotels></Hotels>
            <Events></Events>
            <Footer></Footer>
        </div>
    )
}