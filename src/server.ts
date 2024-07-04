import { FastifyInstance, fastify } from 'fastify'
import { userRoutes } from './routes/user.routes'
import { contactsRoutes } from './routes/contact.routes'

const app: FastifyInstance = fastify()

app.register(userRoutes, {
    prefix: '/user'
})

app.register(contactsRoutes, {
    prefix: '/contacts'
})

app.listen({
    port: 3000
}, () => {
    console.log("Server is Running")
})