import { api } from "../../../../lib/axios.config";

export async function CreatePlace(place: any) {
    try {
        const response = await api.post("/places", place);
        return response.data;
    } catch (error) {
        console.error("Error creating place:", error);
        throw error;
    }
}