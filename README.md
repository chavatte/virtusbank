# Virtus Bank - Simulador de Sistema de Pagamentos PIX

<img align="center" src="./frontend/src/assets/banner.png" />

Este projeto abrangente oferece uma simulação completa de um sistema bancário, incluindo um frontend interativo e um backend robusto para simular transações PIX. Com foco educativo, o projeto demonstra os princípios básicos do PIX e oferece uma experiência prática para desenvolvedores e entusiastas.

**Subpastas:**

* **frontend:** Contém a interface de usuário da aplicação, construída com React.
* **backend:** Implementa a lógica da API para simulação das transações PIX, utilizando Node.js e Express.js.

## Visão Geral

O Virtus Bank simula um ambiente bancário completo, permitindo que os usuários:

* **Cadastrem-se e façam login:** Crie contas e acesse o sistema de forma segura.
* **Simulem transações PIX:** Gere chaves PIX, solicite e realize pagamentos, e visualize o histórico de transações.
* **Gerenciem informações:** Acesse dados pessoais, saldo da carteira virtual e informações da conta.

## Tecnologias Utilizadas

**Frontend:**

* React
* React Router DOM
* Styled Components
* ReactJS Popup
* Axios
* DayJS

**Backend:**

* Node.js
* Express.js
* TypeORM
* PostgreSQL
* JWT (JSON Web Tokens)
* Joi
* js-base64
* Jest (para testes)

## Como Usar

1. **Clone o Repositório:**
   **Bash**

   ```
   git clone https://github.com/chavatte/virtusbank.git
   ```

2. **Instale as Dependências:**
   **Bash**

   ```
   cd virtusbank/frontend
   npm install

   cd ../backend
   npm install
   ```

3. **Configure o Backend:**

   * Renomeie o arquivo `.env.example` para `.env`.
   * Preencha os dados de conexão com o PostgreSQL no arquivo `.env`.
   * Execute as migrações:`npx typeorm migration:run`
   
4. **Inicie os Servidores:**
   **Bash**

   ```
   # No diretório frontend
   npm start

   # No diretório backend
   npm run dev
   ```

5. **Acesse a Aplicação:**
 *  **Backend:** Abra o navegador e acesse `http://localhost:3000`
 *  **Frontend:** Abra o navegador e acesse `http://localhost:3001`
 
 **Observação:** O React assumirá outra porta, pois a porta 3000 está em uso pelo backend.
 **Para evitar erros:** inicie o backend antes do frontend.
   

## Documentação da API

A documentação completa da API, incluindo endpoints, parâmetros e exemplos, está disponível em:

```
http://localhost:3000/virtusbank/docs
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Observações

* As transações PIX são simuladas e não envolvem dinheiro real.
* O projeto possui testes automatizados para garantir a qualidade do código.
* Para informações mais detalhadas, consulte os READMEs específicos do [frontend](./frontend/README.md) e [backend](./backend/README.md).

## Versões Online
O Virtus Bank também está disponível online para testes e demonstração:

* **Frontend:** [https://virtusbank.vercel.app/](https://virtusbank.vercel.app/)
* **Backend:** [https://api-virtusbank.fly.dev/](https://api-virtusbank.fly.dev/)