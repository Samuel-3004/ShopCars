# ShopCars

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nodetalhe.com.br/wp-content/uploads/2023/02/carros-esportivos-modelos-mais-desejados-do-mundo.jpg" /></a>
</p>

[circleci-image]: https://nodetalhe.com.br/wp-content/uploads/2023/02/carros-esportivos-modelos-mais-desejados-do-mundo.jpg
[circleci-url]: https://nodetalhe.com.br/wp-content/uploads/2023/02/carros-esportivos-modelos-mais-desejados-do-mundo.jpg

  <p align="center">API de venda de <a href="http://nodejs.org" target="_blank">veículos</a> onde usuários cadastrados poderão anunciar e realizar a compra de veículos.</p>
    <p align="center">

</p>

  ## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

- Editor de texto (IDE) preferencialmente o VScode pois foi nele que a aplicação foi desenvolvida
- Uma ferramenta de teste e depuração de APIs para testes (Opcional)


### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Clonar o Repositório :

- Clique no botão (<>code) e copie e chave SSH


Salvar uma cópia do projeto em sua máquina:

- Abra o diretório onde será salvo o projeto e abra o terminal nesse diretório
- Rode o comando: 

```
git clone (chave SSH copiada)
```

- Após isso você terá uma cópia totalmente editável de todo o projeto em sua máquina



**BACK-END**

## 📦 Implantação

Manipulando o arquivo .env

- Crie um arquivo chamado .env na raiz do projeto
- Dentro dele crie as variáveis de ambiente seguindo o padrão do arquivo .env.example
- Configure suas variáveis de ambiente com suas credenciais do PostgreSQL e um novo banco de dados para estar utilizando no projeto.

- ATENÇÃO: Para que o servidor funcione corretamente as credenciais do arquivo .env devem estar exatamente iguais as credenciais do seu banco de dados PostgreSQL e não se esqueça de salvar o arquivo. 

Execute os seguintes comandos no terminal:

```
$ cd backend
```

Instalando as dependências necessárias para executar o servidor local. 

- Na raiz do projeto abra o terminal
- Em seguida instale as dependências do servidor com o comando:

```
$ npm install 
```

Executando as migrações

- Ainda com o terminal aberto, execute as migrações com o comando: 
```
$ npx prisma migrate dev
```

Executando o servidor localmente 

- Ainda com o terminal aberto, execute o servidor localmente com o comando: 
```
$ npm run start:dev 
```

## 🛠️ Construído com

Ferramentas e tecnologias usadas na criação do projeto

* [Node](https://nodejs.org/pt-br) - O framework Back-end 
* [Nest](https://docs.nestjs.com) - Framework Back-end
* [Typescript](https://www.typescriptlang.org) - Linguagem de programação
* [PostgreSQL](https://www.postgresql.org) - Gerenciador de banco de dados
* [Prisma](https://www.prisma.io) - ORM para Node.js e TypeScript
* [Insomnia](https://insomnia.rest) - Software para debug de requisições HTTP
* [VScode](https://code.visualstudio.com) - Editor de texto (IDE)
* [Dbeaver](https://dbeaver.io) - Vizualizador de banco de dados 



**FRONT-END**

## 📦 Implantação

Execute os seguintes comandos no terminal:

```
$ cd frontend
```

```
$ npm install --force
```

ou

```bash
$ yarn
```

- Ainda com o terminal aberto, execute o servidor localmente:

```
$ npm run dev
```

ou

- Ainda com o terminal aberto, execute o servidor localmente:

```bash
$ yarn dev
```

## 🛠️ Construído com

Ferramentas e tecnologias usadas na criação do projeto

- [React](https://legacy.reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org)
- [Node](https://nodejs.org/pt-br)
- [Axios](https://axios-http.com/ptbr/docs/api_intro)
- [React-router-dom](https://reactrouter.com/en/main)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [styled-components](https://styled-components.com/docs)
- [zod](https://zod.dev)
- [mui/material](https://mui.com)
- [swiper](https://swiperjs.com/swiper-api)
- [Insomnia](https://insomnia.rest)
- [VScode](https://code.visualstudio.com)

## ✒️ Autores

- [Samuel Portela](https://github.com/Samuel-3004)
- [Fábio Luiz](https://github.com/fabioreed)
- [José Martins](https://github.com/JoseMartins0808)
- [Miguel Angel](https://github.com/Miguel-Angel95)
- [Daniel Willian](https://github.com/ShayDarkin)
- [Gedson Cândido](https://github.com/GedsonCS)
- [Sávio Costa](https://github.com/saviocosta01)

Se você tiver alguma dúvida, sugestão ou feedback sobre o código,
sinta-se à vontade para entrar em contato com um dos desenvolvedores mencionados acima.
