import { SideBar } from "./sections/SideBar"
import { CitySection } from "./sections/CitySection";
import { LocalsSection } from "./sections/locals";


import { useState } from "react";
import { EventsSection } from "./sections/events";

export function AdminPage() {

    const [page, setPage] = useState(0);

    function RenderPage() {
        switch (page) {
            case 0:
                return <CitySection />;
            case 1:
                return <LocalsSection />;
            case 2:
                return <EventsSection/>;
            default:
                return <CitySection />;
        }
    }
    return(
        <div className="w-screen h-screen overflow-hidden flex flex-row gap-12 p-8 relative text-neutrals-200">
            <SideBar name="cupix" page={page} setPage={setPage} ></SideBar>

            <div className="w-full h-full flex justify-center items-center overflow-hidden bg-white shadow-xl shadow-neutrals-200/10 rounded-3xl">
                <RenderPage />

            </div>


        </div>
    )
}