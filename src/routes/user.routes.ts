import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(app: FastifyInstance){
    const userUseCase = new UserUseCase()
    app.post<{ Body: UserCreate }>('/', async(req, reply) => {
        const { name, email } = req.body
        try {
            const data = await userUseCase.create({
                name,
                email,
            })
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })

    app.get('/', (req, reply) => {
        reply.send({hello: 'World'})
    })
}