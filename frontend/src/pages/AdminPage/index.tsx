import { SideBar } from "./sections/SideBar"
import { CitySection } from "./sections/CitySection";

import { useState } from "react";

export function AdminPage() {

    const [page, setPage] = useState(0);

    return(
        <div className="w-screen h-screen flex flex-row gap-12 p-8 relative">
            <SideBar name="cupix" page={page} setPage={setPage} ></SideBar>

            <div className="w-full h-full flex justify-center items-center">
              <CitySection/>

            </div>

        </div>
    )
}