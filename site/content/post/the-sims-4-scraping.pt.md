---
author: "Karoline Alencar"
date: 2019-10-01
title: "Tutorial: Scraping dos Preços do The Sims 4 com NodeJS, Puppeteer & Nodemailer"
categories: "nodejs"
description: "Tutorial de como fazer um scraping em nodejs"
keywords: "javascript, tutorial, nodejs, scraping"
---

Olá galera! =)

No post de hoje ensinarei como fazer um Scraping dos Preços do The Sims 4. Isso significa que vamos entrar no site da EA, extrair os preços do HTML e mandar para nosso email uma lista com o título, preço original, desconto e final dos pacotes.

Eu particularmente acho Scraping muito divertido! Você pode criar o seu seguindo a lógica desse post.

Vamos começar! 

## Instalando os pacotes no NPM

Precisamos do Puppeteer e Nodemailer em nosso projeto, então vamos instalá-lo! 

```js
    npm install nodemailer puppeteer
```

## Criando o arquivo index.js e incluindo o puppeteer e nodemailer

```js
    const puppeteer = require('puppeteer');
    const nodemailer = require('nodemailer');
```
## Vamos começar com a parte divertida!

### Crie uma função assíncrona chamada scrape

```js
    const scrape = async () => {}
```
### Fale ao puppeteer para abrir a página da EA

```js
    const scrape = async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.ea.com/games/the-sims/the-sims-4/pc/store');
        await page.waitFor(1000);
    }
```

Aqui criamos uma instância do navegador, abrimos a página e vamos para o site da EA. Então esperamos ela abrir e carregar. 

### Extraia o preço e título do pacote

```js
    const scrape = async () => {
    	...
    
    	const result = await page.evaluate(() => {
    		const products = Array.from(document.querySelectorAll('.product__group__pack'));
    	
    	    const productsInfo = products.map(product => {    
    	        const original = product.querySelector('.pack--hover__price--original');
    	        const discount = product.querySelector('.pack--hover__price--discount span');
    	        const final = product.querySelector('.pack--hover__price--final span');
    	
    	        return {
    	            title: product.querySelector('h2').innerText,
    	            price: {
    	                original: original ? original.innerText : null,
    	                discount: discount ? discount.innerText : null, 
    	                final: final ? final.innerText : null,
    	            }
    	        }
    	    });
    	
    	    return productsInfo;
    	});
    	
    	browser.close();
    	return result;
    }
```

Aqui pegamos o título, preço original, desconto e final de todos os pacotes. Note que precisamos olhar a estrutura do HTML e ver como podemos pegar essa informação. Nesse caso eles possuem uma classe específica para os pacotes. 

Feito isso, retornamos um objeto com o título e o preço de cada pacote, fechamos o navegador e retornamos a array.

Agora que temos a array com as informações dos pacotes, vamos criar nossa função que manda o email! 

## Criando a função email send

```js
    const emailSend = async products => {};
```

Essa função irá receber a array de produto que criamos na última parte.

### Adicione seu email e senha

```js
    const emailSend = async products => {
    	const email = 'fake@gmail.com';
    	const password = 'fakepass';
    }
```

Aqui você pode adicionar seu email e senha. Nesse caso ele funciona  apenas com gmail e é preciso habilitar a opção 'aplicativos menos seguros' nas configurações. 

### Criando o transporter do nodemailer

```js
    const emailSend = async products => {
    	...
    	const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: email,
              pass: password 
          }
      });
    }
```

Aqui criamos um transporter do nodemailer com o email e senha. 

### Criando o conteúdo do email

```js
    const emailSend = async products => {
    	...
    	const mailOptions = {
    	    from: email, 
    	    to: email, 
    	    subject: 'The Sims 4 Prices', 
    	    html: `
    	        <h1>The Sims 4 Prices</h1> 
    	        <ul>
    	            ${products.map(product => 
    	                `<li>
    	                    <h2>${product.title}</h2>
    	                    <ul>
    	                        ${
    	                            product.price.original 
    	                            ? 
    	                            `<li>
    	                                <p>
    	                                    <b>Original:</b> ${product.price.original}
    	                                </p>
    	                            </li>`
    	                            : ''
    	                        }           
    	                        ${
    	                            product.price.discount 
    	                            ? 
    	                            `<li>
    	                                <p>
    	                                    <b>Discount:</b> ${product.price.discount}%
    	                                </p>
    	                            </li>`
    	                            : ''
    	                        } 
    	                        ${
    	                            product.price.final 
    	                            ? 
    	                            `<li>
    	                                <p>
    	                                    <b>Final:</b> ${product.price.final}
    	                                </p>
    	                            </li>`
    	                            : ''
    	                        } 
    	                    </ul>
    	                </li>`
    	            ).join('')}
    	        </ul>
    	    `
    	};
    }
```

Aqui criamos o HTML do email. Ele contém todos os pacotes que pegamos na função scrape, com título e preços. 

### Mandando o email

```js
    const emailSend = async products => {
    	...
    	await transporter.sendMail(mailOptions, function (error, info) {
    	    if (error) return console.log(error)
    	    return console.log(info);
    	});
    }
```

Aqui falamos para o nodemailer enviar o email.

Agora vamos executar o código.

## Executando a função scrape e emailSend

```js
    scrape().then(data => emailSend(data));
```

Aqui executamos a função e passamos seu resultado para o emailSend.

Isso é tudo! Agora precisamos executar o arquivo index.js no nodejs.

## Executando o arquivo index.js no nodejs

Vá para a pasta do index.js e execute o seguinte comando no terminal

```js
    node index.js
```
Agora cheque seu email! 😛 

## Código Final

```js
    const puppeteer = require('puppeteer');
    const nodemailer = require('nodemailer');
    
    const scrape = async () => {
      const browser = await puppeteer.launch({ headless: false });
    	const page = await browser.newPage();
    	await page.goto('https://www.ea.com/games/the-sims/the-sims-4/pc/store');
    	await page.waitFor(1000);
    
        const result = await page.evaluate(() => {
    		const products = Array.from(document.querySelectorAll('.product__group__pack'));
    	
    	    const productsInfo = products.map(product => {    
    	        const original = product.querySelector('.pack--hover__price--original');
    	        const discount = product.querySelector('.pack--hover__price--discount span');
    	        const final = product.querySelector('.pack--hover__price--final span');
    	
    	        return {
    	            title: product.querySelector('h2').innerText,
    	            price: {
    	                original: original ? original.innerText : null,
    	                discount: discount ? discount.innerText : null, 
    	                final: final ? final.innerText : null,
    	            }
    	        }
    	    });
    	
    	    return productsInfo;
    	});
    	
    	browser.close();
    	return result;
    }
    
    const emailSend = async products => {
        const email = 'fake@gmail.com';
    		const password = 'fakepass';
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: password 
            }
        });
    
        const mailOptions = {
    	    from: email, 
    	    to: email, 
    	    subject: 'The Sims 4 Prices', 
    	    html: `
    	        <h1>The Sims 4 Prices</h1> 
    	        <ul>
    	            ${products.map(product => 
    	                `<li>
    	                    <h2>${product.title}</h2>
    	                    <ul>
    	                        ${
    	                            product.price.original 
    	                            ? 
    	                            `<li>
    	                                <p>
    	                                    <b>Original:</b> ${product.price.original}
    	                                </p>
    	                            </li>`
    	                            : ''
    	                        }           
    	                        ${
    	                            product.price.discount 
    	                            ? 
    	                            `<li>
    	                                <p>
    	                                    <b>Discount:</b> ${product.price.discount}%
    	                                </p>
    	                            </li>`
    	                            : ''
    	                        } 
    	                        ${
    	                            product.price.final 
    	                            ? 
    	                            `<li>
    	                                <p>
    	                                    <b>Final:</b> ${product.price.final}
    	                                </p>
    	                            </li>`
    	                            : ''
    	                        } 
    	                    </ul>
    	                </li>`
    	            ).join('')}
    	        </ul>
    	    `
        };
        
        await transporter.sendMail(mailOptions, function (error, info) {
    	    if (error) return console.log(error)
    	    return console.log(info);
    	});
    };
    
    scrape().then(data => emailSend(data));
```