import { api } from "../../../../lib/axios.config";

export async function UpdateCity(
  id: string,
  name: string,
  description: string,
  color02: string,
  color01: string,
) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('description', description);

  formData.append('color02', color02);
  formData.append('color01', color01);

  try {
    const response = await api.put(`/cities/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating city:", error);
    throw error;
  }
}
