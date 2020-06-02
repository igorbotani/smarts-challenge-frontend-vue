# Smart Challenge - Frontend em Vue.js
Dashboard desenvolvido em Vue.js para a exibição, busca, filtragem e ordenação dos Customers

## Tecnologias utilizadas
 - HTML, CSS e JavaScript
 - Vue.js, por sua rápida curva de aprendizado e performance
 - VueRouter para a troca de telas
 - Vuex para manter o estado da tela inicial mesmo trocando de telas
 - Axios para requisições HTTP
 - Moment.js para formatação de datas
 - element-ui para componentes prontos (botões, cards, etc.)
 - Jest para testes, por ser simples e ser a referência em testes no Vue.js (além do Mocha)
 - Nginx como servidor web, por sua performance e fácil configuração
 - Docker, por sua simplicidade para outras pessoas desenvolverem e por deploy ágil
 
## Observação
A princípio este pacote está configurado para utilizar a porta 8181. Tenha certeza de que ela esteja liberada no firewall. Para deploy, alterar o docker-compose.yml para porta 80

Para não precisar recompilar o frontend em Vue.js (sendo necessário configurar o ambiente de desenvolvimento local), foi configurada a URL da API diretamente no arquivo /html/smart-vue/dist/index.html como http://localhost:8383/. Alterar essa URL para Deploy ou utilizar variáveis de ambiente.

## Como rodar localmente
Pré-requisitos: possuir o Git, Docker e Docker Composer instalados
 
 - 1º passo: clonar este repositório
 - 2º passo: Entrar no diretório contendo o Dockerfile e subir o contâiner em background
 ```
docker-compose up -d
```

 - 2º passo: acessar o endereço http://localhost:8181/

## Como desenvolver localmente
Pré-requisitos: possuir o Git, Node.js e npm instalados

 - 1º passo: clonar este repositório
 - 2º passo: entrar na pasta /html/smart-vue/
 - 3º passo: rodar o comando
```
npm install
```
 - 4º passo: subir o servidor (já com hot-reload habilitado)
```
npm run serve
```
 - 5º passo: acessar a URL http://localhost:8080/
 - 6º passo: para fazer a build para deploy, executar o comando:
```
npm run build
```

## Como rodar os testes
Para executar os testes do Vue.js com Jest, é necessário ter o ambiente de desenvolvimento local configurado e rodar o comando:
```
npm run test:unit
```

## Como fazer o deploy
O deploy é feito da mesma maneira para rodar localmente, por meio do Docker.

## Dificuldades
A maior dificuldade foi a configuração correta do Docker para desenvolvimento local e deploy sem alteração de configurações.

## Melhorias para o futuro
 - Alteração no visual
