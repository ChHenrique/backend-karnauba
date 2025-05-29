import { z } from "zod";

// Schema base sem refinamentos
export const eventSchemaBase = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    imageUrl: z.array(z.string()).nullable().optional(),
    location: z.string().min(1, "Location is required"),
    startDate: z.date({ invalid_type_error: "Start date is required" }),
    endDate: z.date({ invalid_type_error: "End date is required" }),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
    cityId: z.string().min(1, "City is required"),
});

// Schema com refine (para validação completa)
export const eventSchema = eventSchemaBase.refine(
  (data) => data.endDate >= data.startDate,
  {
    message: "End date cannot be before start date",
    path: ["endDate"],
  }
);

// Schema de update (todos opcionais, com a mesma regra de refine)
export const eventUpdateSchema = eventSchemaBase.partial().refine(
  (data: any) => {
    if (data.startDate && data.endDate) {
      return data.endDate >= data.startDate;
    }
    return true;
  },
  {
    message: "End date cannot be before start date",
    path: ["endDate"],
  }
);
