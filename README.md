# Vortex Code Challenge 2025.2 - API do Sistema de Indicação (Backend)

![Badge do Desafio](https://img.shields.io/badge/Desafio-Laborat%C3%B3rio%20Vortex-blue?style=for-the-badge)
![Badge de Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge)

## 📑 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades da API](#-funcionalidades-da-api)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🤔 Justificativa das Escolhas](#-justificativa-das-escolhas)
- [⚙️ Como Executar o Projeto](#️-como-executar-o-projeto)
- [🤝 Colaboração com IA](#-colaboração-com-ia)

## 📖 Sobre o Projeto

Este repositório contém o **backend** do Sistema de Indicação (Referral System), desenvolvido como parte do desafio técnico do processo seletivo de estágio para o **Laboratório Vortex**.

A aplicação consiste em uma API RESTful construída com **Express.js**, responsável por gerenciar toda a lógica de negócio: cadastro e autenticação de usuários, geração de links de indicação e o sistema de pontuação.

## ✨ Funcionalidades da API

-   [x] **Cadastro de Usuário:** Endpoint para criar um novo usuário, com senha hasheada e geração de um link de indicação único.
-   [x] **Lógica de Indicação:** O endpoint de cadastro processa a referência, pontuando o usuário indicador.
-   [x] **Autenticação:** Endpoint de login que retorna um token de acesso (JWT) para proteger as rotas.
-   [x] **Perfil de Usuário:** Rota protegida que retorna os dados do usuário logado (nome, pontuação, link).

## 🚀 Tecnologias Utilizadas

-   **Node.js:** Ambiente de execução para o JavaScript no lado do servidor.
-   **Express.js:** Framework principal para a construção da API, gerenciamento de rotas e middlewares.
-   **MongoDB:** Banco de dados NoSQL orientado a documentos, utilizado para armazenar os dados dos usuários.
-   **Mongoose:** ODM (Object Data Modeling) para modelagem dos dados da aplicação e interação com o MongoDB.
-   **CORS:** habilita o compartilhamento de recursos entre domínios diferentes. De maneira geral, permite que o backend responda requisições do frontend.
-   **Nodemon:** ferramenta de desenvolvimento que reinicia a aplicação sempre que alguma alteração é feita nos arquivos do projeto.
-   **JSON Web Token (JWT):** Para a criação de tokens de acesso, garantindo a segurança das rotas protegidas.
-   **Bcrypt:** Biblioteca para hashing de senhas, fundamental para a segurança e armazenamento seguro das credenciais dos usuários.
-   **Dotenv:** Para o gerenciamento de variáveis de ambiente, separando configurações sensíveis do código-fonte.
-   **Nanoid:** Para a geração de IDs únicos e seguros, utilizado na criação dos links de indicação.

## 🤔 Justificativa das Escolhas

### Backend (Express.js)
Optei pelo Express.js por sua natureza minimalista e flexível. Para o escopo deste desafio, que exige uma API RESTful direta com regras de negócio bem definidas em torno de uma única entidade, o Express oferece o controle necessário para construir a arquitetura da aplicação.

### Banco de Dados (MongoDB)
Para a persistência de dados, escolhi o **MongoDB** por sua agilidade e fácil integração com o ecossistema JavaScript. Como a aplicação possui uma única entidade principal (`User`) sem relacionamentos com outras entidades, um banco de dados NoSQL se mostrou a opção mais direta e eficiente para a resolução do desafio.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a API em seu ambiente local.

### Pré-requisitos

Para executar este projeto em seu ambiente local, você precisará ter algumas ferramentas instaladas e configuradas. Siga os guias abaixo para cada uma delas.

#### 1. Node.js e NPM

O Node.js é o ambiente que executa o código JavaScript no servidor, e o NPM é o gerenciador de pacotes para o Node.js, usado para instalar as dependências do projeto.

-   **Instalação:**
    1.  Acesse o site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/)
    2.  Baixe e instale a versão **LTS (Long Term Support)**, que é a mais estável e recomendada.
    3.  O NPM já vem incluído na instalação do Node.js, então não é necessário instalá-lo separadamente.

-   **Verificação:**
    Para confirmar que a instalação foi bem-sucedida, abra seu terminal e execute os seguintes comandos:
    ```bash
    # Deve retornar a versão do Node.js (ex: v18.18.0)
    node -v
    
    # Deve retornar a versão do NPM (ex: 9.8.1)
    npm -v
    ```

#### 2. MongoDB

Você precisa de uma instância do banco de dados MongoDB. Existem duas maneiras principais de fazer isso: usando um serviço em nuvem (mais fácil) ou instalando localmente. Irei demonstrar como fazer pela nuvem.

##### (MongoDB Atlas - Recomendado)

Esta é a forma mais rápida de começar, pois não requer instalação na sua máquina.

1.  **Crie uma Conta:** Acesse o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) e crie uma conta gratuita.
2.  **Crie um Cluster Gratuito:** Siga as instruções para criar um novo cluster. Você pode escolher o provedor de nuvem e a região de sua preferência. O tier `M0 Sandbox` é gratuito para sempre.
3.  **Configure o Acesso:**
    * **Database Access:** Crie um usuário e senha para o banco de dados. Anote-os, pois você os usará na string de conexão.
    * **Network Access:** Adicione seu endereço IP à lista de permissões. Para um ambiente de desenvolvimento, a forma mais fácil é permitir o acesso de qualquer lugar, adicionando o IP `0.0.0.0/0`.
4.  **Criar o DB e a Coleção**: Na barra lateral a esquerda, selecione "Overview" - "DATABASE" - "Browse Collections". Depois disso, basta clicar em "Create Database" e inserir como nome "referralSystemDB" e para nome de coleção, "users".
5.  **Obtenha a String de Conexão:**
    * No painel do seu cluster, clique em "Connect".
    * Selecione a opção "MongoDB for VS Code".
    * Copie a string de conexão fornecida e insira no `.env`(Explicarei na seção abaixo), mais especificamente na variável `DB_CONNECTION_STRING`. Vale lembrar, que no final da URI, deve-se inserir o nome do DB, no caso, seria algo dessa forma: "mongodb+srv://<user>:<password>@cluster.xxxxxxx.mongodb.net/referralSystemDB".

### Instalação

1.  Clone este repositório:
    ```bash
    git clone https://github.com/vortex-code-challenge-2025-2/referral-system-backend.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd referral-system-backend
    ```
3.  Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente:
    ```
    DB_CONNECTION_STRING="string_de_conexão_aqui"
    PORT=3000
    JWT_SECRET="segredo_para_o_jwt"
    ```
4.  Instale as dependências:
    ```bash
    npm install
    ```

### Execução
```bash
npm start
```

## 🤝 Colaboração com IA

Conforme incentivado pelo edital, utilizei o **Gemini 2.5 pro(Google)** como uma ferramenta de colaboração e mentoria ao longo do desenvolvimento deste projeto. A interação ocorreu nas seguintes áreas:

-   **Code Review:** A IA atuou como um revisor de código constante, sugerindo melhorias no tratamento de erros para fornecer respostas mais específicas da API, boas práticas, etc.

-   **Construção do `README.md`:** A área em questão é autoexplicativa. O modelo me auxiliou na construção de um README.md harmônico e ao mesmo tempo bem explicativo.

## 👨‍💻 Autor

Desenvolvido por **João Pedro Lima**.

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jo%C3%A3o-pedro-lima-464398222/)
