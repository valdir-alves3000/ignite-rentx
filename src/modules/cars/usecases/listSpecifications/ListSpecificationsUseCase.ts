import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private SpecificationsRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    const specifications = this.SpecificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
