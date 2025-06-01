import { api } from "../../../lib/axios.config";

export async function GetAll(id: string) {
  try {
    const response = await api.get(`cities-places-events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }}