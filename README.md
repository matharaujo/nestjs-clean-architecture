# NestJS Clean Architecture API

### Projeto
```markdown
📦 src
┣ 📦 application: Nessa camada estarão as classes que terão as regras de negócio da aplicação (Casos de Uso).
┃ ┣ 📂 usecases: Casos de uso orquestram toda a lógica para negócios específicos.
┣ 📦 domain: Nessa camada estarão as classes que não teram dependências com outras camadas (Modelos, Entidades, Repositórios).
┃ ┣ 📂 models: Modelos são responsáveis por mapear as entidades de banco de dados, aqui, podemos utilizar anotações como @Entity, @Column.
┃ ┣ 📂 repositories: Repositórios são classes ou componentes que encapsulam a lógica necessária para acessar fontes de dados. Eles centralizam a funcionalidade comum de acesso a dados.
┣ 📦 infrastructure: Aqui estarão as classes que farão acesso ao mundo externo (Frameworks, bibliotecas, UI, WEB, CLI).
┃ ┣ 📂 controllers: Controladores e apresentadores são camadas intermediárias. Você pode pensar neles como um portão de entrada e saída para os casos de uso.
┃ ┣ 📂 guards: Guardas determinam se uma determinada solicitação será tratada pelo manipulador de rotas ou não, dependendo de certas condições (como permissões, funções, ACLs etc.) presentes em tempo de execução.
┃ ┣ 📂 decorators: Decoradores são uma expressão que retorna uma função. Ele pode receber um destino, um nome e um descritor de propriedade como argumentos. Aplicamos um decorador com um caractere @ e o colocamos no topo do que estamos tentando decorar.
┃ ┣ 📂 interceptors: Interceptores interceptam a rota antes e depois de seu manipulador ser chamado. Isso significa que você pode manipular a solicitação e a resposta para vincular lógica extra.
┃ ┣ 📂 strategies: Estratégias são softwares comportamentais que permitem selecionar um algoritmo em tempo de execução.
┣ 📜 main.ts: Classe inicializadora da aplicação.
┣ 📜 server.module.ts: Módulo que centraliza todas as camadas (Application, Domain, Infrastructure).
📜 nest-cli.json
📜 package.json
📜 README.md
📜 tsconfig.build.json
📜 tsconfig.json
📜 yarn.lock
```

### Configuração Variáveis de Ambiente
 - [Production](.env)
 - [Development](.env.development)

### Instalação de Dependências
```bash
$ npm install
```

### Rodando a Aplicação
```bash
# development mode
$ npm run start

# production mode
$ npm run start:prod

# build
$ npm run build
```

### Prettier e Eslint
```bash
# prettier
$ npm run format:prettier

# eslint
$ npm run lint

# eslint - fix
$ npm run lint:fix
```
