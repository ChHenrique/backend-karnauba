import { api } from "../../../lib/axios.config";

export async function UpdatePlace({ place }: any) {
  try {
    const response = await api.put(`/places/${place.id}`, place);
    return response.data;
  } catch (error) {
    console.error("Error updating place:", error);
    throw error;
  }
}