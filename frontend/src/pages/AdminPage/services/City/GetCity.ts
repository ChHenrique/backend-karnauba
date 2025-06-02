import { api } from "../../../../lib/axios.config";

export async function GetCity(id: string) {
  try {
    const response = await api.get(`/cities/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching city:", error);
    throw error;
  }
}