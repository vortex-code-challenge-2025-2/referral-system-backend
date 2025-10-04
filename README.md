# Vortex Code Challenge 2025.2 - API do Sistema de Indicação (Backend)

![Badge de Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge)

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades da API](#-funcionalidades-da-api)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🤔 Justificativa das Escolhas](#-justificativa-das-escolhas)
- [⚙️ Como Executar o Projeto](#️-como-executar-o-projeto)
- [🤝 Colaboração com IA](#-colaboração-com-ia)
- [👨‍💻 Autor](#-autor)

## 📖 Sobre o Projeto

Este repositório contém o **backend** do Sistema de Indicação (Referral System), desenvolvido como parte do desafio técnico do processo seletivo de estágio para o **Laboratório Vortex**.

A aplicação consiste em uma API RESTful construída com **Express.js**, responsável por gerenciar toda a lógica de negócio: cadastro e autenticação de usuários, geração de links de indicação e o sistema de pontuação.

## ✨ Funcionalidades da API

-   [ ] **Cadastro de Usuário:** Endpoint para criar um novo usuário, com senha hasheada e geração de um link de indicação único.
-   [ ] **Lógica de Indicação:** O endpoint de cadastro processa a referência, pontuando o usuário indicador.
-   [ ] **Autenticação:** Endpoint de login que retorna um token de acesso (JWT) para proteger as rotas.
-   [ ] **Perfil de Usuário:** Rota protegida que retorna os dados do usuário logado (nome, pontuação, link).

## 🚀 Tecnologias Utilizadas

| Módulo      | Tecnologias                                                                                                                                                                                                                         |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backend** | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) |

## 🤔 Justificativa das Escolhas

A seleção de cada tecnologia foi pensada para atender aos requisitos do desafio e demonstrar conhecimento em ferramentas eficientes e consolidadas no mercado.

### Backend (Express.js)
Optei pelo **Express.js** por sua natureza minimalista, flexível e por ser o framework de fato padrão do ecossistema Node.js. Para o escopo deste desafio, que exige uma API RESTful direta e com regras de negócio bem definidas, o Express oferece o controle necessário sem a complexidade de um framework mais opinativo. Essa escolha me permite construir a arquitetura da aplicação de forma mais granular, demonstrando um profundo entendimento do ciclo de vida de requisições HTTP em um ambiente Node.js.

### Banco de Dados (MongoDB)
Para a persistência de dados, escolhi o **MongoDB**. Dada a natureza simples da aplicação, com uma única entidade principal (`User`) e sem a necessidade de relacionamentos complexos, um banco de dados NoSQL se mostrou a opção mais ágil e direta. O formato de armazenamento em documentos (BSON) se integra perfeitamente ao ecossistema JavaScript, simplificando as operações de CRUD através de bibliotecas como o Mongoose.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a API em seu ambiente local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 18 ou superior)
-   [MongoDB](https://www.mongodb.com/try/download/community) (ou uma instância em nuvem como o MongoDB Atlas)
-   Um gerenciador de pacotes como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Instalação e Execução

```bash
# 1. Clone este repositório
git clone [URL_DO_SEU_REPOSITORIO_BACKEND]

# 2. Navegue até o diretório
cd [NOME_DA_PASTA_DO_PROJETO]

# 3. Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente
# Exemplo:
# MONGO_URI="mongodb://localhost:27017/vortex-challenge"
# PORT=3000

# 4. Instale as dependências
npm install

# 5. Rode a aplicação em modo de desenvolvimento
npm run dev

# O servidor estará rodando em http://localhost:3000 (ou na porta que você definiu)
```

## 🤝 Colaboração com IA

Conforme incentivado pelo edital, utilizei ferramentas de Inteligência Artificial como um parceiro de desenvolvimento. A principal IA utilizada foi o **Gemini (Google)**, atuando como um "arquiteto de software" e "mentor de código". A colaboração se deu em:
- **Planejamento e Arquitetura:** Discussão sobre a stack, validação de ideias e pivô estratégico do NestJS para o Express.js para melhor se adequar ao escopo do projeto.
- **Estruturação de Código:** Sugestões de organização de pastas e arquivos para uma API Express robusta.
- **Criação de Templates:** Geração de templates de documentação, como este `README.md`.
- **Tira-dúvidas:** Sanar dúvidas conceituais sobre Node.js, Mongoose e padrões de API REST.

## 👨‍💻 Autor

Desenvolvido por **João Pedro Lima**.
