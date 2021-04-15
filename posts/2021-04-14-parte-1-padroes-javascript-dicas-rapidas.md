---
author: "Karoline Alencar"
date: 2021-04-14
title: "(Parte 1) Padrões JavaScript: Dicas rápidas"
tag: "javascript"
description: "Dicas de padrões javascript tiradas do livro do Stoyan Stefanov"
keywords: "javascript, dicas, patterns"
---

# 

Olá galera! Tudo bem com vocês? Depois de muuito tempo, resolvi voltar a escrever aqui no blog. 

Como podem adivinhar pelo título, a ideia dessa série é mostrar alguns padrões/dicas que achei interessante do [livro "Padrões JavaScript", do Stoyan Stefanov](https://www.amazon.com.br/Padr%C3%B5es-Javascript-Stoyan-Stefanov/dp/857522266X),
inclusive não poderia indicar mais! Se está procurando entender melhor sobre design patterns, coding patterns & antipatterns, esse livro é perfeito, 
estou adorando o conteúdo! Bom, vamos lá! :p 

## Padrão objeto de configuração

Sabe quando sua função recebe muitos parâmetros e isso acaba dificultando a leitura? Por exemplo:

```js
function registerUser (email, password, name, lastname, birthdate, country, city, subscribeNewsletter) {}
```

Você pode passar um objeto como parâmetro da função nesses casos, ou passar por exemplo, as informações "obrigatórias" como parâmetro
e passar um "objeto de configuração" com os campos opcionais. Alguns exemplos:

```js
function registerUser (email, password, userConfig) {}
...

const userConfig = { 
   name: "Karoline",
   lastname: "Alencar",
   birthdate: "66/66/6666",
   country: "Brazil",
   city: "São Paulo",
   subscribeNewsletter: false
}
registerUser("email@email.com", "password", userConfig)

```

```js
function registerUser (userConfig) {}
...

const userConfig = { 
   email: "email@email.com",
   password: "password",
   name: "Karoline",
   lastname: "Alencar",
   birthdate: "66/66/6666",
   country: "Brazil",
   city: "São Paulo",
   subscribeNewsletter: false
}
registerUser(userConfig)

```

## Utilizando funções imediatas em objetos 

Imagine que, ao iniciar uma aplicação, você precisa enviar uma mensagem baseado na localização do usuário e isso requer uma série de validações, uma alternativa é criar um objeto que faça a validação imediatamente e retorne a mensagem:

```js
const userLocationMessage = {
 message: (function () {
   ...
   return 'hoi'
 })(),
 getMessage: function () {
    return this.message;
 }
}

// usando
userLocationMessage.getMessage() // "hoi"
```
Nesse caso, o valor de `message` é "hoi".


Por hoje é isso! xoxo <3

![Alt Text](https://media.giphy.com/media/GB0lKzzxIv1te/giphy.gif)
