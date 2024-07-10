import swaggerDefinition from "swagger-jsdoc";
import yaml from "js-yaml";
import fs from "fs";

const userYaml = yaml.load(
  fs.readFileSync(process.cwd() + "/src/swagger/spec/user.yaml", "utf8")
);
const pixYaml = yaml.load(
  fs.readFileSync(process.cwd() + "/src/swagger/spec/pix.yaml", "utf8")
);

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API - Virtus Bank",
      version: "1.0.0",
      description: "API para gerenciar usuários e transações PIX.",
      contact: {
        name: "João Carlos Chavatte",
        email: "chavatte@duck.com",
        url: "https://chavatte.vercel.app",
      },
    },

    servers: [
      {
        url: "/api/virtusbank",
      },
    ],

    paths: {
      ...userYaml.paths,
      ...pixYaml.paths,
    },

    components: {
      schemas: {
        ...userYaml.components.schemas,
        ...pixYaml.components.schemas,
      },
      securitySchemes: {
        bearerAuth: userYaml.components.securitySchemes.bearerAuth,
      },
    },

    tags: [
      {
        name: "Autenticação",
        description: "Operações de login e cadastro de usuários",
      },
      {
        name: "Usuário",
        description: "Operações relacionadas aos dados do usuário",
      },
      {
        name: "Pix",
        description: "Operações relacionadas ao Pix",
      },
    ],
  },

  apis: [
    "../../virtusbank/routes/user.routes.js",
    "../../virtusbank/routes/pix.routes.js",
    "../../virtusbank/models/User.cjs",
    "../../virtusbank/models/Pix.cjs",
  ],
};

const openapiSpecification = swaggerDefinition(options);

export default openapiSpecification;
