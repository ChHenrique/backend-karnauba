import { Event } from "../entities/EventEntity";
import { EventRepository } from "../repositories/EventRepository";
import { CityRepository } from "../../cities/repositories/CityRepository"; // importar CityRepository
import { parseImageInput } from "../../../shared/utils/parseImageInput";
import { ServerError } from "../../../shared/errors/serverError";
import { eventDTO } from "../dtos/eventDTO";
import { eventUpdateSchema } from "../schemas/eventUpdateSchema";

export class EventUpdateUseCase {
    constructor(
        private eventRepository: EventRepository,
        private cityRepository: CityRepository // injetar city repo
    ) {}

    async execute(id: string, data: Partial<eventDTO>, userId: string): Promise<Event> {
        const event = await this.eventRepository.findUnique(id);

        if (!event) {
            throw new ServerError("Event not found", 404);
        }

        // Buscar a cidade atual do evento (antes da atualização)
        const city = await this.cityRepository.findUnique(event.cityId);
        if (!city) {
            throw new ServerError("City not found", 404);
        }

        // Verificar se o usuário é admin da cidade
        if (city.adminId !== userId) {
            throw new ServerError(
                "You are not authorized to update this event",
                403
            );
        }

        const validation = eventUpdateSchema.safeParse(data);

        if (!validation.success) {
            console.log("Erro na validação:", validation.error.format());
            throw new ServerError(
                "Validation Error",
                400,
                validation.error.format()
            );
        }

        const validData = validation.data;

        // Se for tentar mudar a cityId, verifica se o user é admin da nova cidade também
        if (validData.cityId && validData.cityId !== event.cityId) {
            const newCity = await this.cityRepository.findUnique(validData.cityId);
            if (!newCity) {
                throw new ServerError("New city not found", 404);
            }
            if (newCity.adminId !== userId) {
                throw new ServerError(
                    "You are not authorized to move the event to this city",
                    403
                );
            }
        }

        const updatedEvent = new Event(
            event.id,
            validData.name ?? event.name,
            validData.description ?? event.description,
            parseImageInput(validData.imageUrl ?? event.imageUrl) ?? '',
            validData.location ?? event.location,
            validData.startDate ?? event.startDate,
            validData.endDate ?? event.endDate,
            validData.startTime ?? event.startTime,
            validData.endTime ?? event.endTime,
            validData.cityId ?? event.cityId
        );

        await this.eventRepository.update(id, updatedEvent);

        return updatedEvent;
    }
}
