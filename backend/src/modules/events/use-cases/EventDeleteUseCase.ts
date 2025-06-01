import { EventRepository } from "../repositories/EventRepository";
import { CityRepository } from "../../cities/repositories/CityRepository";
import { ServerError } from "../../../shared/errors/serverError";

export class EventDeleteUseCase {
  constructor(
    private eventRepository: EventRepository,
    private cityRepository: CityRepository
  ) {}

  async execute(id: string, userId: string): Promise<void> {
    const event = await this.eventRepository.findUnique(id);
    if (!event) throw new ServerError("Event not found", 404);

    const city = await this.cityRepository.findUnique(event.cityId);
    if (!city) throw new ServerError("City not found", 404);

    if (city.adminId !== userId) {
      throw new ServerError(
        "You are not authorized to delete this event",
        403
      );
    }

    await this.eventRepository.delete(id);
  }
}
