import { api } from "../../../../lib/axios.config";

export async function DeletePlace(id: string){
    try {
        const response = await api.delete(`/places/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting place:", error);
        throw error;
    }
}