import { api } from "../../../../lib/axios.config";

export async function UpdateEvent({event}: any){
    try{
        const response = await api.put(`/events/${event.id}`, event);
        return response.data;

    }catch (error) {
        console.error("Error updating event:", error);
        throw error;
    }
}