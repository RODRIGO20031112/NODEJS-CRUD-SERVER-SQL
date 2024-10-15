# Crud NodeJS com SQL Lite

### Instalação

```bash
git clone https://github.com/RODRIGO20031112/NODEJS-CRUD-SERVER-SQL-LITE.git
```

```bash
cd NODEJS-CRUD-SERVER-SQL-LITE
```

### Após a clonagem instale as dependências com

```bash
npm install
```

### Inicie o projeto com

```bash
npm start
```

### E caso precise fazer os testes

```
npm test
```

### Depois de iniciado acesse <a href="http://localhost:3000/api-docs">http://localhost:3000/api-docs</a> para ver a documentação. Caso não se oriente por ela, você pode usar a API normalmente com as instruções abaixo.

# Como Testar as Requisições

## GET todas os tasks:

- **URL:** `http://localhost:3000/tasks`
- **Método:** GET

## GET uma task específico:

- **URL:** `http://localhost:3000/tasks/1`
- **Método:** GET

## POST uma nova task:

- **URL:** `http://localhost:3000/tasks`
- **Método:** POST
- **Corpo da requisição (JSON):**

```json
{
  "task": "Entregar relatório",
  "description": "Entregar relatório as 10:30 da manhã"
}
```

## PUT para atualizar uma task:

- **URL:** `http://localhost:3000/tasks/1`
- **Método:** PUT
- **Corpo da requisição (JSON):**

```json
{
  "task": "Entregar relatório",
  "description": "Relatório entregue as 10:30"
}
```

## DELETE uma task:

- **URL:** `http://localhost:3000/tasks/1`
- **Método:** DELETE

## Considerações

- Use uma ferramenta como Postman ou cURL para testar as requisições.
- Certifique-se de que o servidor está rodando antes de fazer as requisições.
- Esta estrutura é simples e pode ser expandida conforme a complexidade do seu projeto aumenta.
