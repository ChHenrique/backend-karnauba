import { SideBar } from "./sections/SideBar"
import { CitySection } from "./sections/CitySection";
import { LocalsSection } from "./sections/locals";

import { GetCity } from "./services/City/GetCity";

import type { cityDataDTO } from "../../dto/City/cityDTO";

import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { EventsSection } from "./sections/events";

export function AdminPage() {
 const { id } = useParams();


    const [places, setPlaces] = useState([]);
    const [events, setEvents] = useState([]);
    const [city, setCity] = useState<cityDataDTO>();

    useEffect(() => {
        if(id ){
        async function Gets(){
        try {
            const city = await GetCity(id!);
            setPlaces(city.places);
            setEvents(city.events);
            setCity(city);
            console.log("City:", city);
            console.log("Places:", city.places);
            console.log("Events:", city.events);
        }catch (error) {
            console.error("Error fetching places:", error);
        }}
        Gets();
    }

    }, [id]);

    const [page, setPage] = useState(0);

    function RenderPage() {
        switch (page) {
            case 0:
                return <CitySection city={city} />;
            case 1:
                return <LocalsSection allPlaces={places} />;
            case 2:
                return <EventsSection allEvents={events}/>;
        }
    }
    return(
        <div className="w-screen h-screen overflow-hidden flex flex-row gap-12 p-8 relative text-neutrals-200">
            <SideBar  page={page} setPage={setPage} ></SideBar>

            <div className="w-full h-full flex justify-center items-center overflow-hidden bg-white shadow-xl shadow-neutrals-200/10 rounded-3xl">
                <RenderPage />

            </div>


        </div>
    )
}