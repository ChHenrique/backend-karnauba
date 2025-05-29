import { z } from "zod";

export const eventSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    imageUrl: z.array(z.string()).nullable().optional(),
    location: z.string().min(1, "Location is required"),
    startDate: z.string({ invalid_type_error: "Start date is required" })
        .transform((val) => new Date(val)),
    endDate: z.string({ invalid_type_error: "End date is required" })
        .transform((val) => new Date(val)),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
    cityId: z.string().min(1, "City is required"),
}).refine(data => data.endDate >= data.startDate, {
    message: "End date cannot be before start date",
    path: ["endDate"],
});
