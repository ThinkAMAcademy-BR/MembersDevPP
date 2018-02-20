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


