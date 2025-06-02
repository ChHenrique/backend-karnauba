import { api } from "../../../../lib/axios.config";

export async function CreateEvent(event: any) {
  try {
    const response = await api.post("/events", event);
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}