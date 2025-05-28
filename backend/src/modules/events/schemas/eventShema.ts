import { z } from "zod"

export const eventSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    imageUrl: z.string().url("Image must be a valid URL").optional(),
    location: z.string().min(1, "Location is required"),
    startDate: z.date({ invalid_type_error: "Start date is required" }),
    endDate: z.date({ invalid_type_error: "End date is required" }),
    cityId: z.string().min(1, "City is required"),
}).refine(data => data.endDate >= data.startDate, {
    message: "End date cannot be before start date",
    path: ["endDate"],
});
