import { api } from "../../../lib/axios.config";

export async function DeleteEvent(id: string) {
  try {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
}