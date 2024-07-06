<h1 align="center"> Agenda Contatos </h1>

## 💻 Projeto

Este projeto de Back End tem como objetivo administrar uma lista de contatos de usuários. Sua criação teve o intuito de aperfeiçoar o aprendizado de ferramentas backend. O projeto possui as seguintes funcinalidades:
 - Cadastro de Contatos
 - Visualização de Contatos
 - Atualização de Contatos
 - Exclusão de Contatos
 - Autenticação de Usuários
 - Autorização de Acesso às Operações
 - Criação de usuário

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- Typescript
- Prisma
- Fastify

## 🕹️ Executar

### Instalar as dependências:
```bash
npm install -y
```

### Executar servidor
```bash
npm run dev
```

### Rotas
#### Usuários
- GET - `/user` : Captura Todos os usuários cadastrados
- POST - `/user` : Cria um usuário enviando o nome e email do usuário no corpo da requisição em formato JSON. * Retorna os dados cadastrados.
Exemplo:
```json
{
  "name": "Teste",
  "email": "teste@gmail.com",
}
```
#### Contatos
**É preciso que no Header(cabeçalho) tenha o campo email com valor do email de um usuário cadastrado**
- GET - `/contacs` : Captura Todos os contatos criados de um usuário especifíco cadastrado
- POST - `/contacs` : Adiciona um novo contato relacionado ao usuário cadastrado com os seguintes valores passados no body:
```json
{
  "name": "Teste2",
  "email": "teste@gmail.com",
  "phone": "(99) 99999 9999-99
}
```
- PUT - `/contacs/:idContato` : Atualiza os dados de um contato em especifíco de um usuário, passando por parâmetro o id do contato e no corpo da requisição os seguintes valores a serem alterados:
```json
{
  "name": "Teste2",
  "email": "teste@gmail.com",
  "phone": "(99) 99999 9999-99
}
```
- DELETE - `/contacs/:idContato` : Deleta um contato em especifíco de um usuário, passando por parâmetro o id do contato.

---
###### 🚀KaikMcpe12🚀