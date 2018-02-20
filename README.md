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
