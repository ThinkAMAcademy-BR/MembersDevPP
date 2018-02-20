# MembersDevPP
Demonstração que lista e filtra os membros do DEV-PP.

# Angular CLI

Angular agora tem sua própria CLI ou <code>command line interface</code>, o que fará a maioria das operações de rotina para você. Para começar a usar o Angular temos que instalá-lo. Ele requer o node 6.9.0 ou superior, bem como o NPM 3 ou superior. Não vamos cobrir sua instalação para o seu sistema, pois é melhor encontrar documentação atualizada para instalação por conta própria. Uma vez que eles estejam ambos instalados, vamos instalar o Angular CLI executando o seguinte:

``npm install -g @angular/cli``

Depois que a instalação for bem sucedida, podemos gerar um novo projeto executando o comando <code>ng new</code>:

<p><code>ng new members-dev-pp</code></p>
  <p><code>create members-dev-pp/README.md (1033 bytes)</code></p>
  <p><code>create members-dev-pp/.angular-cli.json (1254 bytes)</code></p>
  <p><code>create members-dev-pp/.editorconfig (245 bytes)</code></p>
  <p><code>create members-dev-pp/.gitignore (516 bytes)</code></p>
  <p><code>create members-dev-pp/src/assets/.gitkeep (0 bytes)</code></p>
  <p><code>create members-dev-pp/src/environments/environment.prod.ts (51 bytes)</code></p>
  <p><code>create members-dev-pp/src/environments/environment.ts (387 bytes)</code></p>
  <p><code>create members-dev-pp/src/favicon.ico (5430 bytes)</code></p>
  <p><code>create members-dev-pp/src/index.html (304 bytes)</code></p>
  <p><code>create members-dev-pp/src/main.ts (370 bytes)</code></p>
  <p><code>create members-dev-pp/src/polyfills.ts (2405 bytes)</code></p>
  <p><code>create members-dev-pp/src/styles.css (80 bytes)</code></p>
  <p><code>create members-dev-pp/src/test.ts (1085 bytes)</code></p>
  <p><code>create members-dev-pp/src/tsconfig.app.json (211 bytes)</code></p>
  <p><code>create members-dev-pp/src/tsconfig.spec.json (304 bytes)</code></p>
  <p><code>create members-dev-pp/src/typings.d.ts (104 bytes)</code></p>
  <p><code>create members-dev-pp/e2e/app.e2e-spec.ts (301 bytes)</code></p>
  <p><code>create members-dev-pp/e2e/app.po.ts (208 bytes)</code></p>
  <p><code>create members-dev-pp/e2e/tsconfig.e2e.json (235 bytes)</code></p>
  <p><code>create members-dev-pp/karma.conf.js (923 bytes)</code></p>
  <p><code>create members-dev-pp/package.json (1324 bytes)</code></p>
  <p><code>create members-dev-pp/protractor.conf.js (722 bytes)</code></p>
  <p><code>create members-dev-pp/tsconfig.json (363 bytes)</code></p>
  <p><code>create members-dev-pp/tslint.json (3040 bytes)</code></p>
  <p><code>create members-dev-pp/src/app/app.module.ts (316 bytes)</code></p>
  <p><code>create members-dev-pp/src/app/app.component.css (0 bytes)</code></p>
  <p><code>create members-dev-pp/src/app/app.component.html (1141 bytes)</code></p>
  <p><code>create members-dev-pp/src/app/app.component.spec.ts (986 bytes)</code></p>
  <p><code>create members-dev-pp/src/app/app.component.ts (207 bytes)</code></p>
<p><code>Installing packages for tooling via yarn.</code></p>
<p><code>yarn install v1.3.2</code></p>
<p><code>info No lockfile found.</code></p>
<p><code>[1/4] 🔍  Resolving packages...</code></p>
<p><code>[2/4] 🚚  Fetching packages...</code></p>
<p><code>[3/4] 🔗  Linking dependencies...</code></p>
<p><code>warning "@angular/cli > @schematics/angular@0.1.10" has incorrect peer dependency "@angular-devkit/schematics@0.0.40".</code></p>
<p><code>warning "@angular/cli > @angular-devkit/schematics > @schematics/schematics@0.0.10" has incorrect peer dependency "@angular-devkit/schematics@0.0.40".</code></p>
<p><code>[4/4] 📃  Building fresh packages...</code></p>
<p><code>success Saved lockfile.</code></p>
<p><code>✨  Done in 44.12s.</code></p>
<p><code>Installed packages for tooling via yarn.</code></p>
<p><code>Successfully initialized git.</code></p>
<p><code>Project 'members-dev-pp' successfully created.</code></p>
<p><code>Project 'members-dev-pp' successfully created.</code></p>

Entre na pasta criada com o comando <code>cd members-dev-pp</code>

Depois disso, podemos pedir ao nosso novo aplicativo que inicie somente com o comando <code>ng serve</code>:

<p>** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **</p>
<p>Date: 2018-02-20T00:44:34.860Z</p>
<p>Hash: c7175b6d8044cd2f5efa</p>
<p>Time: 18274ms</p>
<p>chunk {inline} inline.bundle.js (inline) 3.85 kB [entry] [rendered]</p>
<p>chunk {main} main.bundle.js (main) 17.9 kB [initial] [rendered]</p>
<p>chunk {polyfills} polyfills.bundle.js (polyfills) 549 kB [initial] [rendered]</p>
<p>chunk {styles} styles.bundle.js (styles) 41.5 kB [initial] [rendered]</p>
<p>chunk {vendor} vendor.bundle.js (vendor) 7.42 MB [initial] [rendered]</p>
<br />
<p>webpack: Compiled successfully.</p>
<br />
<p>Se acessarmos em nosso navegador o link http://localhost:4200/, a aplicação será exibida como ilustrado aqui:</p>

![Aplicação sendo Exibida](/images/primeiro-ng-serve.PNG "Primeiro ng serve")

O que está acontecendo? O Angular CLI executa o servidor de webpack dev, que sobe nosso aplicativo na próxima porta livre (para que você possa executar vários aplicativos na mesma máquina). Ele observa todas as mudanças no código fonte do projeto e recompila todas as mudanças. Então, usando Angular CLI, já estamos trabalhando em um ambiente de desenvolvimento sem escrever uma linha de configuração ou realmente fazer qualquer coisa que resolva um problema. Mas estamos começando...

# Componentes
<p>Temos o nosso aplicativo vazio em execução. Vamos falar sobre a composição do aplicativo em Angular. Se você tem alguma experiência em AngularJS, você sabe que havia controllers, diretivas e componentes, não se preocupe, hoje em dia é principalmente apenas componentes. O componente é o elemento básico do mundo angular. Vejamos o código que foi gerado pelo Angular CLI.</p>
<br />
<p>Primeiro, aqui está <code>index.html:</code></p>

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MembersDevPp</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

<p>Parece o tipo de marcação que você vê todos os dias. Mas há uma tag especial que é a app-root, Como o Angular faz isso funcionar, e como podemos saber o que está acontecendo dentro dele?</p>
<br />
<p>Vamos abrir o diretório<code>src/app</code> e ver o que há. Você pode ver o que o <code>ng new</code> gerou na pasta ou abri-lo no seu IDE preferido. Você verá que temos o <code>app.component.ts</code> lá (isso pode variar dependendo de quão recente sua versão do Angular é):</p>

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
} 
```

<code>@Component(...)</code> Aqui parece uma chamada de função... O que é isso? Este é o decorador do TypeScript, e falaremos disso um pouco mais tarde. Por enquanto, vamos apenas tentar entender o que ele está fazendo com os parâmetros passados, como o <code>selector</code> que é usado para gerar a declaração do nosso componente. Então é só fazer algo e devolver a declaração do nosso componente. Não precisamos implementar código adicional para suportar nenhum dos params do decorador. Tudo é tratado pelo decorador. Então, geralmente nós chamamos factory methods.

Já vimos o <code>app-root</code> no nosso index.html. Veja como o Angular sabe como encontrar o componente correspondente à nossa etiqueta. Obviamente, <code>templateUrl</code> e <code>styleUrls</code> define onde o Angular deve tirar nosso HTML e CSS. Há muito mais params para o decorador de componentes, e nós vamos usar alguns deles em nosso novo aplicativo, mas se você quer uma referência completa, você sempre pode olhar [aqui](https://angular.io/api/core/Component).

Vejamos o HTML desse componente:
```
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
</div>
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
```

<p>Assim, além de incorporar a Logo do Angular como um SVG, que é bastante legal, isso também parece uma marcação típica qualquer, porém temos uma coisa que é <code>( Welcome to {{ title }}!)</code>, se olharmos o nosso código de componente novamente, veremos <code>title = 'app';</code>. Então, se você já tem alguma prática em linguagens de modelo ou trabalhou com AngularJS, é bem óbvio o que está acontecendo aqui. Se você não sabe, isso é chamado de Angular Interpolation ou simplesmente Interpolação, pelo qual a expressão dentro das chaves duplas curly está sendo extraída de nosso componente (você pode pensar que o <code>{{ title }}</code> é como uma forma simplificada de <code> {{ this.title }}</code>) e exibido em nosso HTML.</p>
<br />
<p>Agora vimos todas as partes do nosso aplicativo angular gerado automaticamente que ocorrem na página exibida em nosso navegador. Vamos recapitular como ele realmente funciona: o Angular CLI executa o Webpack, que está compilando nosso aplicativo Angular em pacotes de JavaScript e injetando-os em nosso index.html. Se olharmos o código real em nosso navegador usando o recurso de inspeção, vemos algo como isto:</p>

![HTML sendo Inspecionado](/images/inspecionar-html-app.png "Inpecionando o HTML do Web App")

<p>Toda vez que alteramos o nosso código, o Angular CLI irá recompilar, reintroduzir se necessário, e solicitar ao nosso navegador que recarregue a página se estiver aberta. Angular é bastante rápido, então na maioria dos casos enquanto você está mudando seu Windows do IDE para o navegador, ele já será recarregado para você.</p>
<br />
<p>Então vamos começar a avançar em direção ao nosso objetivo, e para começar vamos mudar nosso projeto do CSS para o Sass, e abrir nosso <code>.angular-cli.json</code> e editar <code>styles</code> e <code>styleExt</code> propriedades assim:</p>

```javascript
"styles": [
  "styles.scss"
],
[...]
"defaults": {
  "styleExt": "scss",
  "component": {}
}
```
<p>Caso não tenha o <code>yarn</code> instalado, execute o seguinte comando:</p>

```
npm install -g yarn
```

<p>Nós também precisamos adicionar a biblioteca Sass ao nosso projeto e renomear <code>styles.css</code> para <code>styles.scss</code>. Então, para adicionar Sass, estou usando yarn:</p>

```
yarn add sass 
yarn add v1.3.2
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[...]
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
└─ sass@1.0.0-beta.4
✨  Done in 12.06s.
yarn add node-sass@4.7.2 --dev
✨  Done in 5.78s.
```

<p>Eu também quero usar o Twitter Bootstrap em nosso projeto, então vamos rodar <code>yarn add bootstrap@v4.0.0-beta.2</code> tendo algo assim como resultado em nosso terminal ou CMD:</p> 

```
yarn add bootstrap@v4.0.0-beta.2
yarn add v1.3.2
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > bootstrap@4.0.0-beta.2" has unmet peer dependency "jquery@1.9.1 - 3".
warning " > bootstrap@4.0.0-beta.2" has unmet peer dependency "popper.js@^1.12.3".
[4/4] 📃  Building fresh packages...
success Saved lockfile.
success Saved 1 new dependency.
└─ bootstrap@4.0.0-beta.2
✨  Done in 134.10s.
```

<p>E editar o nosso <code>styles.scss</code> para incluir isso:</p>

```
/* You can add global styles to this file, and also import other style files */
@import "../node_modules/bootstrap/scss/bootstrap";
 
body {
  padding-top: 5rem;
}
```

<p>Precisamos editar <code>index.html</code> para tornar a nossa página responsiva vamos alterar o meta do nosso HTML para isso:</p>

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

<p>E agora podemos substituir <code>app.component.html</code> por isso:</p>

```
<!-- Fixed navbar -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">Membros do DevPP</a>
</nav>
<div class="container-fluid text-center pb-5">
  <div style="text-align:center">
    <h1>
      Bem-vindo ao {{title}}!
    </h1>
  </div>
</div>
```

<p>E agora, se abrimos nosso navegador veremos o seguinte:</p>

![Resultado após adicionar o Twitter Bootstrap](/images/adicionado-twitter-bootstrap.png "Testando Novo Estilo do Web App")

<p>E é isso mesmo para o nosso boilerplate code, ou seja, é um trecho de código que pode ser reutilizado várias vezes sem nenhuma ou com poucas alteração em sua consistência. Vamos continuar a criar nossos próprios componentes.</p>

# Nosso primeiro componente

<p>Nós vamos exibir perfis como cartões em nossa tela, então comecemos por gerar nosso primeiro componente representando o próprio cartão. Para isso, vamos usar o Angular CLI executando o seguinte comando:</p>

```
ng generate component Card
  create src/app/card/card.component.scss (0 bytes)
  create src/app/card/card.component.html (23 bytes)
  create src/app/card/card.component.spec.ts (614 bytes)
  create src/app/card/card.component.ts (262 bytes)
  update src/app/app.module.ts (390 bytes)
```

<p>Se olharmos para dentro de <code>src/app/card/card.component.ts</code>, podemos ver que eles são quase o mesmo código do nosso AppComponent, com uma pequena diferença:</p>

```
[...]
@Component({
  selector: 'app-card',
[...]
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
```

<p>Gostaria de mencionar, neste ponto, que é considerado uma boa prática prefazer nossos seletores de componentes com um prefixo comum e, por padrão, é app-. Você pode alterá-lo para o prefixo de sua preferência editando a propriedade <code>prefix</code> em <code>.angular-cli.json</code>, então é preferível fazê-lo antes de usar <code>ng generate</code> pela primeira vez.</p>

<p>
Então temos um construtor para o nosso componente, bem como uma função <code>ngOnInit</code> para ele. Se você está curioso porque fizemos isso, você pode ler sobre isso na documentação do Angular. Mas em um nível básico pense nesses métodos como: um construtor está sendo chamado logo após a criação do componente, muito antes de os dados serem passados ​​para ele já estão prontos e preenchidos, enquanto <code>ngOnInit</code> apenas executa após o primeiro ciclo de mudanças no dados, então você tem acesso às suas entradas de componentes. Falaremos sobre entradas e comunicação de componentes em breve, mas por agora, vamos lembrar que é preferível usar o construtor para constantes, como coisas que estão realmente sendo codificadas em seu componente e <code>ngOnInit</code> para tudo o que depende de dados externos.
</p>

<p>
Vamos preencher nossa implementação do CardComponent. Para começar, vamos apenas adicionar um novo template inicial a ela. O conteúdo padrão para o HTML é algo assim:
</p>

```
<p>
  card works!
</p>
```

<p>Vamos substituí-lo pelo código para que ele se comporte como um cartão de visita de um membro do DevPP:</p>

```
<div class="card">
  <div class="card-block">
    <p class="card-text">Nome: Nome e Sobrenome</p>
    <p class="card-text">Localidade: Cidade ou Estado</p>
    <p class="card-text">Data de Entrada: Data de Entrada no Meetup</p>
    <p class="card-text">Perfil no Meetup: URL do Site do Meetup</p>
  </div>
</div>
```
<p>
Agora é um bom momento para exibir o componente do cartão, mas isso levanta outras questões: Quem será responsável por exibir os cartões? O AppComponent? Mas o AppComponent será carregado antes de qualquer outra coisa no aplicativo, então devemos considerá-lo organizado e pequeno. É melhor criar mais um componente para cuidar de armazenar uma lista de cartões e exibi-lo em nossa página.
</p>

<p>Como descrevemos as responsabilidades de nossos componentes, é claro que isso deveria ser um componente de lista de cartões de visita. Vamos pedir ao Angular CLI para gerá-lo para nós:</p>

```
ng generate component CardList
  create src/app/card-list/card-list.component.scss (0 bytes)
  create src/app/card-list/card-list.component.html (28 bytes)
  create src/app/card-list/card-list.component.spec.ts (643 bytes)
  create src/app/card-list/card-list.component.ts (281 bytes)
  update src/app/app.module.ts (483 bytes)
```

<p>Antes de começar a implementá-lo, vejamos o que ignoramos depois de gerar o nosso primeiro componente. Angular CLI nos diz que ele atualizou <code>app.module.ts</code> para nós. É comum esquecermos isso, então vamos corrigi-lo:</p>

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

<p>Obviamente, <code>BrowserModule</code> e <code>NgModule</code> são módulos internos do Angular. Podemos ler mais sobre ambos na documentação. O AppComponent estava aqui antes de começar a gerar qualquer código, então nossos novos componentes realmente preencheram o módulo em dois lugares: Primeiro, eles são importados de seus arquivos de definição, e em seguida, eles estão incluídos na matriz de declarações do nosso NgModule decorator. Se você estiver criando um novo componente a partir do zero e esquecendo de adicionar um novo módulo ao NgModule, mas tentando adicionar no seu HTML, seu aplicativo não funcionará com o seguinte erro no console JS:</p>

```
Uncaught Error: Template parse errors:
'app-card-list' is not a known element:
1. If 'app-card-list' is an Angular component, then verify that it is part of this module.
2. If 'app-card-list' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("
```

<p>Então, se o seu aplicativo não estiver funcionando, sem motivo aparente, não se esqueça de verificar o seu console.</p>

<p>
Vamos preencher a marcação de componente da lista de cartões ( <code>src/app/card-list/card-list.component.html</code>):
</p>

```
<div class="container-fluid text-center pb-5">
  <div class="row">
    <app-card class="col-4"></app-card>
    <app-card class="col-4"></app-card>
    <app-card class="col-4"></app-card>
  </div>
</div>
```

<p>E adicionar o <code>app-card-list</code> no <code>card.component.html</code> dessa forma:</p>

```
<!-- Fixed navbar -->
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">Membros do DevPP</a>
</nav>
<div class="container-fluid text-center pb-5">
  <div style="text-align:center">
    <h1>
      Bem-vindo ao {{title}}!
    </h1>
  </div>
  <app-card-list></app-card-list>
</div>
```

<p>Se abrimos no nosso navegador veremos algo como isto:</p>

![Listando os Cartões Fixos](/images/listando-cartoes-fixos.png "Resultado Parcial do Web App")

<p>
Vamos trazer o nosso código um pouco mais próximo de um caso de caso real, criando um array de cartões em nossa aplicação de dados extraídos do site do Meetup:
</p>

```
export class AppComponent {
  public cards: Array<any> = [
    { "name": "Adael Oliveira", "location": "Presidente Prudente", "joinedGroupOn": "12/18/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244156736/" },
    { "name": "Adiane", "location": "Rio de Janeiro", "joinedGroupOn": "02/04/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/94853272/" },
    { "name": "Afonso Tessari Ferreira", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243693250/" },
    { "name": "Alessandro Altino", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/201072348/" },
    { "name": "Alex Mota", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243780452/" },
    { "name": "Allan Albuquerque", "location": "Presidente Prudente", "joinedGroupOn": "02/02/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247399408/" },
    { "name": "Anderson Vincoletto", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243903087/" },
    { "name": "Andressa Gouveia", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243713570/" },
    { "name": "André Hungaro", "location": "Vancouver, BC", "joinedGroupOn": "02/13/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/198473852/" },
    { "name": "André Ozawa", "location": "Presidente Prudente", "joinedGroupOn": "02/15/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/248276095/" },
    { "name": "Augusto César", "location": "Marília", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243902464/" },
    { "name": "Breno S. Beletato", "location": "Presidente Prudente", "joinedGroupOn": "02/15/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/248281509/" },
    { "name": "Bruno Vinicius Manfrão", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246669036/" },
    { "name": "Caio Russi", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243696787/" },
    { "name": "Camila Polizello", "location": "Presidente Prudente", "joinedGroupOn": "02/11/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/248012967/" },
    { "name": "Carlos Martins", "location": "Presidente Prudente", "joinedGroupOn": "02/09/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247859861/" },
    { "name": "Cido Araujo", "location": "Presidente Prudente", "joinedGroupOn": "12/19/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244208665/" },
    { "name": "Claudemir Lima", "location": "Presidente Prudente", "joinedGroupOn": "12/10/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243638311/" },
    { "name": "Daniel Eletronic+IoT+blockchain", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/213214420/" },
    { "name": "Daniel Trondoli", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243783067/" },
    { "name": "Darcio Gusman", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243928409/" },
    { "name": "Deyvisson Pinheiro", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243694502/" },
    { "name": "Diego Machado", "location": "Presidente Prudente", "joinedGroupOn": "12/19/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244208247/" },
    { "name": "DR FABIANO Teranisi", "location": "Presidente Prudente", "joinedGroupOn": "08/18/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/234382186/" },
    { "name": "Edson Welington", "location": "Presidente Prudente", "joinedGroupOn": "08/10/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/233728242/" },
    { "name": "Eduardo Lopes", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243722185/" },
    { "name": "Emanuel Henrique", "location": "Presidente Prudente", "joinedGroupOn": "12/20/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244288714/" },
    { "name": "Emanuel Herique Magri da Silva", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246667174/" },
    { "name": "Emerson Miyasaki", "location": "Presidente Prudente", "joinedGroupOn": "01/24/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246785916/" },
    { "name": "Enrique Prieto", "location": "São Paulo", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/219852879/" },
    { "name": "Felipe", "location": "Presidente Prudente", "joinedGroupOn": "12/23/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244249934/" },
    { "name": "Felipe Albuquerque de Almeida", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243678940/" },
    { "name": "Felipe Benincasa", "location": "Presidente Prudente", "joinedGroupOn": "01/22/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246629819/" },
    { "name": "Felipe Blini", "location": "Presidente Prudente", "joinedGroupOn": "07/31/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/171930182/" },
    { "name": "Felipe Vicente", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243698808/" },
    { "name": "Fernanda de Almeida", "location": "Santo Anastácio", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246699690/" },
    { "name": "Fernando Cassinelli", "location": "Presidente Prudente", "joinedGroupOn": "02/02/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247390200/" },
    { "name": "Fernando Modafaris de Araujo", "location": "Presidente Prudente", "joinedGroupOn": "01/25/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246821980/" },
    { "name": "Fernando Vicente", "location": "Presidente Prudente", "joinedGroupOn": "01/24/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246788344/" },
    { "name": "Fábio Costa", "location": "Presidente Prudente", "joinedGroupOn": "08/01/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/198700472/" },
    { "name": "Fábio T. Perez", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246716895/" },
    { "name": "Gabriel Branquinho", "location": "São Paulo", "joinedGroupOn": "02/13/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247899396/" },
    { "name": "Gabriel Fredo", "location": "Presidente Prudente", "joinedGroupOn": "08/03/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/233231503/" },
    { "name": "Gabriel Furlan", "location": "São Paulo", "joinedGroupOn": "01/25/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/221828194/" },
    { "name": "Gabriel Majaron", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243757384/" },
    { "name": "Geiziane", "location": "Presidente Prudente", "joinedGroupOn": "01/31/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247277047/" },
    { "name": "Guilherme Alexandre", "location": "Presidente Prudente", "joinedGroupOn": "08/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/234058889/" },
    { "name": "Guilherme Cavichioli", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243692886/" },
    { "name": "Guilherme H. L. Santos", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243707023/" },
    { "name": "Gustavo Marquini", "location": "Campinas", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/13572281/" },
    { "name": "Gustavo Sasaki", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243695499/" },
    { "name": "Haroldo Teruya", "location": "Presidente Prudente", "joinedGroupOn": "01/26/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246901279/" },
    { "name": "Henrique Cunha", "location": "Presidente Prudente", "joinedGroupOn": "01/22/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246637248/" },
    { "name": "Igor Ludgero Miura", "location": "Presidente Prudente", "joinedGroupOn": "12/26/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/218113203/" },
    { "name": "Igor Yamashita", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243693161/" },
    { "name": "Isabela Santos", "location": "Presidente Prudente", "joinedGroupOn": "02/02/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247364493/" },
    { "name": "J.VALDERIO SANTOS", "location": "Presidente Prudente", "joinedGroupOn": "12/10/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/192324026/" },
    { "name": "Jean Dias", "location": "Presidente Prudente", "joinedGroupOn": "01/31/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247274041/" },
    { "name": "Jeffrey Bittencourt", "location": "Presidente Prudente", "joinedGroupOn": "12/19/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244215670/" },
    { "name": "Jessica Aparecida Amorim", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/207340870/" },
    { "name": "Jonatas Zito", "location": "Pirapozinho", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246669560/" },
    { "name": "José Pascoal Vernilo", "location": "Presidente Prudente", "joinedGroupOn": "01/25/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/232120697/" },
    { "name": "João Cunha", "location": "Dubai", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/160518752/" },
    { "name": "João Hernandes", "location": "Presidente Prudente", "joinedGroupOn": "12/13/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243819418/" },
    { "name": "João Lossi", "location": "Presidente Prudente", "joinedGroupOn": "01/29/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247101611/" },
    { "name": "João Maiorchini", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243692903/" },
    { "name": "Juliana Peixoto", "location": "Presidente Bernardes", "joinedGroupOn": "11/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/241022886/" },
    { "name": "Junior CS", "location": "Presidente Prudente", "joinedGroupOn": "01/28/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/181996192/" },
    { "name": "Junior Rota", "location": "Presidente Prudente", "joinedGroupOn": "02/06/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/185111685/" },
    { "name": "Jéssica Takazono", "location": "Presidente Prudente", "joinedGroupOn": "11/23/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/217943994/" },
    { "name": "Kako Fernandes", "location": "São Paulo", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/65875232/" },
    { "name": "Kleiton Rogério", "location": "São Paulo", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243932068/" },
    { "name": "Leandro Blazão", "location": "Londrina", "joinedGroupOn": "09/21/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/183579862/" },
    { "name": "Leandro Mariano Barbosa", "location": "Presidente Prudente", "joinedGroupOn": "01/29/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247104663/" },
    { "name": "Leonardo Henrique", "location": "Presidente Prudente", "joinedGroupOn": "08/07/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/233493620/" },
    { "name": "Leonardo Lucas Ferreira", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246666909/" },
    { "name": "Leonardo Ochoa Lopes", "location": "São Paulo", "joinedGroupOn": "01/30/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/239620352/" },
    { "name": "Leonardo Vox", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243754836/" },
    { "name": "Letícia Sene", "location": "Presidente Prudente", "joinedGroupOn": "02/08/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247776681/" },
    { "name": "Lucas", "location": "Santo AnastÃ¡cio", "joinedGroupOn": "02/02/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247363850/" },
    { "name": "Lucas Alves", "location": "Presidente Prudente", "joinedGroupOn": "09/30/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/237795911/" },
    { "name": "Lucas Azambuja", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/191322877/" },
    { "name": "Lucas Manuel", "location": "Presidente Prudente", "joinedGroupOn": "01/25/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246808244/" },
    { "name": "Luciano Honorio Ferreira", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243701768/" },
    { "name": "Luiz Filipe Monge", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/227216829/" },
    { "name": "Luiz Paulo Wince Teixeira", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243730320/" },
    { "name": "Marcela Maciel Brandão", "location": "Presidente Prudente", "joinedGroupOn": "02/01/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/207952747/" },
    { "name": "Marcelo", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243695012/" },
    { "name": "Marcelo Lima", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/242516182/" },
    { "name": "Marcelo Rosa", "location": "Presidente Prudente", "joinedGroupOn": "12/10/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243629126/" },
    { "name": "Marcelo Santoro", "location": "Presidente Prudente", "joinedGroupOn": "01/22/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246638588/" },
    { "name": "Marcelo Soares", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246656696/" },
    { "name": "Marco Aurélio Munhóz", "location": "Regente FeijÃ³", "joinedGroupOn": "01/27/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/217107362/" },
    { "name": "Marcos Ferreira", "location": "Presidente Prudente", "joinedGroupOn": "10/15/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/238972662/" },
    { "name": "MARCOS HÚNGARO", "location": "Presidente Prudente", "joinedGroupOn": "09/20/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/237001234/" },
    { "name": "Marcos Oliverlima", "location": "Presidente Prudente", "joinedGroupOn": "09/28/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/237673236/" },
    { "name": "Marlon Araújo", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246702950/" },
    { "name": "Mauricio Souza", "location": "Presidente Prudente", "joinedGroupOn": "12/19/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244221179/" },
    { "name": "Miguel Watanabe", "location": "Rancharia", "joinedGroupOn": "11/18/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/241613496/" },
    { "name": "Murilo Siqueira Ferreira", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243691746/" },
    { "name": "Nathália Puglisi", "location": "Presidente Prudente", "joinedGroupOn": "01/31/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247273096/" },
    { "name": "Otávio Corrêa", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243753958/" },
    { "name": "Pablo Coitino", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243698588/" },
    { "name": "Paulo Carneiro", "location": "Presidente Prudente", "joinedGroupOn": "01/24/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246784259/" },
    { "name": "Paulo Lino Junior", "location": "Presidente Prudente", "joinedGroupOn": "02/05/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247604511/" },
    { "name": "Paulo Sérgio Diniz", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243900884/" },
    { "name": "Paulo Sérgio Diniz", "location": "Presidente Prudente", "joinedGroupOn": "01/22/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246629017/" },
    { "name": "Paulo Tarocchi", "location": "Presidente Prudente", "joinedGroupOn": "12/20/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244277121/" },
    { "name": "Pedro Silva", "location": "Presidente Prudente", "joinedGroupOn": "01/25/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246821626/" },
    { "name": "Pedro Vicari", "location": "Presidente Prudente", "joinedGroupOn": "01/24/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246740296/" },
    { "name": "Pedro Vinicius", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246699195/" },
    { "name": "Phillipe Sant'Ana", "location": "Presidente Prudente", "joinedGroupOn": "12/19/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/244245130/" },
    { "name": "Porfirio Rodrigues", "location": "Presidente Prudente", "joinedGroupOn": "01/30/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247174669/" },
    { "name": "Priscila Gualdi Pantarotto", "location": "Presidente Prudente", "joinedGroupOn": "02/07/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/234710051/" },
    { "name": "Rafael Araujo", "location": "Presidente Prudente", "joinedGroupOn": "01/29/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247099074/" },
    { "name": "Rafael Jacomeli", "location": "Presidente Prudente", "joinedGroupOn": "12/10/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243630725/" },
    { "name": "Rafhael Alkimim C Andrade", "location": "Presidente Prudente", "joinedGroupOn": "02/02/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247383829/" },
    { "name": "Renan Pupin", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243692697/" },
    { "name": "Ricardo Tangerino de Souza", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243694276/" },
    { "name": "Ricardo Veiga", "location": "Presidente Prudente", "joinedGroupOn": "09/18/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/197688987/" },
    { "name": "Roberto Júnior", "location": "Presidente Prudente", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/194594402/" },
    { "name": "Rogger Borges", "location": "Presidente Prudente", "joinedGroupOn": "01/26/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246913881/" },
    { "name": "Rogério Do Carmo", "location": "Presidente Prudente", "joinedGroupOn": "02/08/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/247783481/" },
    { "name": "Sandro Ramone", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243905922/" },
    { "name": "Sino Pessoal", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243917263/" },
    { "name": "Sinomar Calmona", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243916963/" },
    { "name": "Stéfano H", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243689849/" },
    { "name": "Thiago Calistro", "location": "São Paulo", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/130219502/" },
    { "name": "Thiago De Carlo Gonçalves", "location": "Presidente Prudente", "joinedGroupOn": "01/23/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246665192/" },
    { "name": "Thiaguinho Bahia", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/56593552/" },
    { "name": "Valter Rodrigues de Souza", "location": "Osvaldo Cruz", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243772260/" },
    { "name": "Valter Vinícius", "location": "Vancouver, BC", "joinedGroupOn": "02/05/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/207715632/" },
    { "name": "Valério", "location": "Presidente Prudente", "joinedGroupOn": "09/18/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/199376911/" },
    { "name": "Victor Damaceno", "location": "São Paulo", "joinedGroupOn": "01/29/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/220495561/" },
    { "name": "Victor Santos", "location": "QuÃ©bec, QC", "joinedGroupOn": "12/25/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/229346526/" },
    { "name": "Vinicius Teixeira", "location": "Presidente Prudente", "joinedGroupOn": "01/25/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246822607/" },
    { "name": "Vitor Scobin", "location": "Presidente Prudente", "joinedGroupOn": "12/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243900898/" },
    { "name": "Viviane Marques de Carvalho", "location": "Presidente Prudente", "joinedGroupOn": "01/25/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/246835072/" },
    { "name": "Vânia Cristina da Silva", "location": "JaguariÃºna", "joinedGroupOn": "12/12/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243747425/" },
    { "name": "Walmir Carvalho", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243690034/" },
    { "name": "William Fernando", "location": "Presidente Prudente", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/243693499/" },
    { "name": "Yuri Rodrigues", "location": "Presidente Prudente", "joinedGroupOn": "08/14/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/234060979/" },
    { "name": "Érica Betto Sene", "location": "Martinópolis", "joinedGroupOn": "12/11/2017", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/163588852/" },
    { "name": "Ériton Oliveira Silva", "location": "Presidente Prudente", "joinedGroupOn": "02/14/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/248224502/" },
    { "name": "á–‡á•®á˜‰á—©á˜‰ á™–á‘Œá—©á–‡á–‡á—©á’Ž", "location": "Presidente Prudente", "joinedGroupOn": "01/26/2018", "urlOfMemberProfile": "https://www.meetup.com/dev-pp/members/191323019/" }
  ];
```

<p>
Retirei a seguinte DIV com a mensagem do <code>app.component.html</code> que estava utilizando a váriavel title que acabamos de retirar do nosso TypeScript:
</p>

```
  <div style="text-align:center">
    <h1>
      Bem-vindo ao {{title}}!
    </h1>
  </div>
```

<p>
Nós temos nossa lista inicial em <code>card-list.component</code>, mas ainda assim, precisamos passá-la para o componente e renderizá-la para lá. Para isso, precisamos criar nossa primeira entrada. Vamos adicioná-lo ao nosso componente CardList:
</p>

```
import {Component, Input, OnInit} from '@angular/core';
[...]
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;
[...]
```

<p>
Nós importamos o <code>Input</code> do Angular e usamos isso como decorator para cartões variáveis ​​de classe com tipo Array de objetos de qualquer tipo. O ideal é não usar <code>any</code>, devemos usar um padrão para que possamos definir algo como uma modelo de interface, nele conterá todas as propriedades do nosso cartão, porém vamos fazer isso mais tarde por enquanto, estamos usando <code>any</code> apenas para obter uma implementação rápida e suja em andamento.
</p>

<p>
Agora, temos nosso array de cartões em nossa CardList. Como podemos exibi-lo em vez de nosso HTML fixo atual? Vejamos o novo código HTML do arquivo <code>card-list.component.html</code> que é também parte do nosso componente da lista de cartões:
</p>

```
<app-card class="col-4" *ngFor="let card of cards"></app-card>
```

<p>
Isso é algo novo para nós, um nome de atributo que começa a partir de um asterisco. O que isso significa? É uma convenção padrão para nomear diretivas estruturais do angular. As diretivas estruturais controlam a estrutura do nosso modelo. O asterisco aqui é realmente "perfumaria de sintaxe", e você pode ler mais para entender como isso funciona. Mas para o nosso exemplo atual, basta entender o que acontecerá quando o adicionarmos ao nosso componente. Então o <code>ngFor</code> é uma diretiva de repetição e repetirá nosso cartão de visita para cada membro do DevPP no array de cartões. Se olharmos para o navegador ainda teremos uma página vazia.
</p>

<p>
Definimos a nossa gama de cartões no nível do AppComponent, mas não o passamos para a entrada do CardList. Vamos editar o nosso HTML modelo do AppComponent em <code>app.component.html</code> para fazer isso:
</p>

```
<app-card-list [cards]="cards"></app-card-list>
```

<p>
Essa sintaxe com o atributo entre colchetes diz ao Angular que gostaríamos de vincular nossa variável <code>cards</code> do AppComponent à <code>[cards]</code> como entrada do CardListComponent. Assim que fizermos este código, obtemos isso:
</p>

![Resultado Inicial do Carregamento dos Cards](/images/resultado-inicial-carregamento-cards.png "Resultado Ainda Parcial do Web App")

<p>
Claro que queremos exibir os conteúdos reais do nosso array de cartões de visita, e para isso precisamos passar o objeto do cartão para o componente do cartão também. Vamos melhorar o nosso componente de lista de cartões de visita:
</p>

```
<app-card class="col-4" *ngFor="let card of cards" [card]="card"></app-card>
```

<p>
E se olharmos no navegador agora vamos ver o erro no console JS: <code>Can't bind to 'card' since it isn't a known property of 'app-card'.</code> O Angular está nos dizendo que ainda precisamos definir nossa entrada no componente do cartão. Então podemos editar assim:
</p>

```
import {Component, Input, OnInit} from '@angular/core';
[...]
export class CardComponent implements OnInit {
  @Input() card:any;
[...]
```

<p>E vamos adicionar as nossas propriedades do objeto membro do cartão ao modelo de componente do cartão:</p>

```
[...]
  <div class="card-block">
    <p class="card-text">Nome: {{card.name}}</p>
    <p class="card-text">Localidade: {{card.location}}</p>
    <p class="card-text">Data de Entrada: {{card.joinedGroupOn}}</p>
    <p class="card-text"><a href="{{card.urlOfMemberProfile}}" target="_blank">Perfil no Meetup</a></p>
  </div>
[...]
```

<p>
Vamos ver como funciona agora:
</p>

![Resultado com Listagem Dinâmica](/images/listagem-dinamica.png "Resultado da Listagem de Membros do Web App")

<p>Durante a implementação acabei retirando do arquivo a div com a class row de <code>card-list.component.html</code> e a coloquei agora novamente, o arquivo ficou assim:

```
<div class="container-fluid text-center pb-5">
  <div class="row">  
    <app-card class="col-4" *ngFor="let card of cards" [card]="card"></app-card>
  </div>
</div>
```

<p>E o resultado agora é esse:</p>

![Resultado com Listagem Dinâmica e com Linhas](/images/div-class-row.png "Resultado da Listagem de Membros do Web App em Linhas")

<p>Não ta legal ainda né? É por isso que existe a class card que vai na DIV pai do nosso card</p>

```
<div class="card">
[...]
</div>
```

<p>Agora veja o resultado:</p>

![Listagem dos Cards de Membros](/images/listagem-cards.png "Resultado da Listagem dos Cards de Membros do DevPP")




