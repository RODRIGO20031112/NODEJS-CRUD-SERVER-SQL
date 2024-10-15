# Crud NodeJS com SQL

### Instalação

1. Clone op projeto

```bash
git clone https://github.com/RODRIGO20031112/NODEJS-CRUD-SERVER-SQL-LITE.git
```

```bash
cd NODEJS-CRUD-SERVER-SQL
```

2. Após a clonagem instale as dependências

```bash
npm install
```

3. Copie o arquivo .env.example para .env e atualize as variáveis ​​de ambiente necessárias:

```bash
cp .env.example .env
```

```bash
SQL_PREFERENCE=MY_SQL  # Opções: SQL_ITE | MY_SQL

# Para MYSQL
DB_NAME=nodejs-server
DB_USER=root
DB_PASSWORD=password
DB_HOST=localhost
```

> _Caso opite usar por SQL_LITE não é necessário configurações externas de banco_

4. Inicie o projeto com

```bash
npm start
```

### Caso precise fazer os testes

```bash
npm test # no terminal
```

### Depois de iniciado acesse <a href="http://localhost:3000/api-docs">http://localhost:3000/api-docs</a> para ver a documentação. Caso não se oriente por ela, você pode usar a API normalmente com as instruções abaixo.

# Como Testar as Requisições

## GET todas os tasks:

- **URL:** `http://localhost:3000/tasks`
- **Método:** GET

## GET uma task específico:

- **URL:** `http://localhost:3000/tasks/1`
- **Método:** GET

## GET todas as métricas:

- **URL:** `http://localhost:3000/tasks/metrics`
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

## PATCH para concluir ou retroceder uma task:

- **URL:** `http://localhost:3000/tasks/1/complete`
- **Método:** PATCH
- **Corpo da requisição (JSON):**

```json
{
  "status": true //para marcar como concluída e false para desmarcar
}
```

## DELETE uma task:

- **URL:** `http://localhost:3000/tasks/1`
- **Método:** DELETE

## Considerações

- Use uma ferramenta como Postman ou cURL para testar as requisições.
- Certifique-se de que o servidor está rodando antes de fazer as requisições.
- Esta estrutura é simples e pode ser expandida conforme a complexidade do seu projeto aumenta.
