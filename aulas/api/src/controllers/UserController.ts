import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from '../models/User';


class UserController {

    async create(request: Request, response: Response) {
        // Utilizando {name, email} desconstroi-se o valor em variáveis com mesmo nome das propriedades desjadas do valor
        const { name, email } = request.body;

        // Respositório (responsável pela comunicação do controller com o banco de dados)
        const usersRepository = getRepository(User);

        // Verifica se já existe algum usuário cadastrado que possua o mesmo email enviado no body do request
        // findOne({ email }) é o mesmo que SELECT * FROM Users WHERE email = "email"
        const userAlreadyExists = await usersRepository.findOne({ email });

        // Se já existir o usuário, é retornada uma mensagem de erro
        if (userAlreadyExists) {
            let error = "User Already Exists";

            return response.status(400).json({
                error: error
            });
        }

        // Cria um objeto de usuário (não é necessário passar o id e created_at pq eles são criados automaticamente)
        const user = usersRepository.create({ name, email });

        // Salva o usuário no banco
        await usersRepository.save(user);

        return response.json(user);
    }

}

export { UserController };