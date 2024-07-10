## Backend - Virtus Bank

Este projeto implementa um backend para um sistema de pagamentos PIX simulado, com foco em conteúdo educativo. Ele oferece funcionalidades para gerenciamento de usuários e simulação de transações PIX, demonstrando os conceitos básicos do processo.

### **Funcionalidades:**

* **Autenticação:**
  * **Cadastro de Usuário:** Permite que novos usuários se cadastrem com nome, sobrenome, e-mail e senha. A senha é criptografada para segurança.
  * **Login de Usuário:** Usuários cadastrados podem fazer login e receber um token JWT para autenticação nas demais operações.
* **Transações PIX Simuladas:**
  * **Solicitação de Pagamento:** Usuários podem gerar uma chave PIX para simular a solicitação de um pagamento.
  * **Pagamento PIX:** Usuários podem simular o pagamento de uma solicitação usando a chave PIX. O sistema verifica e atualiza o saldo simulado das carteiras.
  * **Histórico de Transações:** Usuários podem visualizar seu histórico de transações PIX simuladas, incluindo informações sobre o valor, tipo (recebido/pago) e usuário envolvido.
* **Informações do Usuário:** Usuários autenticados podem visualizar seus dados, como nome completo, saldo da carteira simulada e informações da conta.

### **Tecnologias Utilizadas:**

* **Backend:**
  * **Node.js:** Ambiente de execução JavaScript no servidor.
  * **Express.js:** Framework web para Node.js, utilizado para construir a API REST.
  * **TypeORM:** ORM para facilitar a interação com o banco de dados PostgreSQL.
  * **PostgreSQL:** Banco de dados relacional para armazenar os dados dos usuários e transações simuladas.
  * **JWT (JSON Web Tokens):** Para autenticação segura dos usuários.
  * **Joi:** Para validação dos dados de entrada da API.
  * **js-base64:** Para codificação e decodificação das chaves PIX simuladas.
* **Testes:**
  * **Jest:** Framework de testes para garantir a qualidade do código.

### **Pré-requisitos:**

* **Node.js e npm:** Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node) instalados em sua máquina.
* **PostgreSQL:** Instale e configure um banco de dados PostgreSQL para o projeto.

### **Configuração:**

1. **Clone o Repositório:** **Bash**

   ```
   git clone https://github.com/chavatte/virtusbank.git
   ```
2. **Instale as Dependências:** **Bash**

   ```
   cd virtusbank/backend
   npm install
   ```
3. **Renomeie o arquivo `.env.exemple` para `.env`**
   Dentro do arquivo `.env` substitua os valores pelos seus dados de conexão com o PostgreSQL:

   ```
   APP_SECRET=sua_chave_secreta_jwt
   HOST_DB=seu_host_do_banco_de_dados
   PORT_DB=sua_porta_do_banco_de_dados
   USER_DB=seu_usuario_do_banco_de_dados
   PASSWORD_DB=sua_senha_do_banco_de_dados
   DB=seu_nome_do_banco_de_dados
   SCHEMA_DB=public 
   PORT=3000
   HOST=0.0.0.0
   ```
4. **Execute as Migrações:** **Bash**

   ```
   npx typeorm migration:run
   ```

### Execução:

* **Desenvolvimento:** **Bash**

  ```
  npm run dev
  ```

  Isso iniciará o servidor em modo de desenvolvimento, com recarregamento automático em caso de alterações.
* **Produção:** **Bash**

  ```
  npm start
  ```

### Testes:

**Bash**

```
npm run test
```

### Documentação da API:

Acesse a documentação completa da API, incluindo detalhes sobre os endpoints, parâmetros e exemplos de requisições, em:

```
http://localhost:3000/virtusbank/docs
```

### Observações:

* Para interagir com a API, o frontend está localizado na pasta **"frontend"**.
* As transações PIX são simuladas e não envolvem dinheiro real.
* O projeto possui testes automatizados para garantir a qualidade do código.

### Contribuições:

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.
