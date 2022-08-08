import { CategoriesRepository } from "../repositories/CategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

/*
 * [X] - Definir o tipo de retorno
 * [X] - Alterar o retorno de erro
 * [X] - Acessar o reposotório
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  excute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) throw new Error("Category already exists");

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };