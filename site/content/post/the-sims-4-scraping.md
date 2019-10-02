---
author: "Karoline Alencar"
date: 2019-10-01
title: "Tutorial: The Sims 4 Price Scraping with NodeJS, Puppeteer & Nodemailer"
categories: "nodejs"
description: "Tutorial on how to make a nodejs scraping"
keywords: "javascript, tutorial, nodejs, scraping"
---

Hi everyone! :)

In today's post I will teach you guys how to make a The Sims 4 Price Scraping. That means we are going to enter the EA website and extract the prices from their HTML and send to our email a list with the pack title, original, discount and final price. 

Scraping is really cool to play with and you can do fun things with that! You can create your own scraping following this post logic.

So let's begin!

## Installing NPM packages

We need Puppeteer and Nodemailer in your project, so let's install!

```js
    npm install nodemailer puppeteer
```

## Let's create an index.js file and require puppeteer and nodemailer

```js
    const puppeteer = require('puppeteer');
    const nodemailer = require('nodemailer');
```
## Let's begin with the fun part!

### Create an async function called scrape

```js
    const scrape = async () => {}
```
### Tell puppeteer to open EA page

```js
    const scrape = async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.ea.com/games/the-sims/the-sims-4/pc/store');
        await page.waitFor(1000);
    }
```

Here we create an browser instance, open a page and go to EA website. Then we wait for it to open and load. 

### Extract price and pack title

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

Here we get all packs title, original, discount and final price. Note that we need to look at the HTML structure to see how we can get that specific data. In that case they have a specific class for the pack. 

We then return a object with the title and price from each pack. After that we close the browser and return the array. 

Now that we have all packs info, let's create our function to send an email! 

## Create the email send function

```js
    const emailSend = async products => {};
```

This function will receive the product array that we created in the last section.

### Add email and password info

```js
    const emailSend = async products => {
    	const email = 'fake@gmail.com';
    	const password = 'fakepass';
    }
```
Here you can add your email and password. Note that it will only work with gmail and you need to enable 'allow less secure apps' in your config. 

### Create nodemailer transporter

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

Here we create a nodemailer transport with the user and password.

### Create email content

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

Here we create the email HTML. It contains all packs that we got in the scrape function with its title and price info.

### Send email

```js
    const emailSend = async products => {
    	...
    	await transporter.sendMail(mailOptions, function (error, info) {
    	    if (error) return console.log(error)
    	    return console.log(info);
    	});
    }
```

Here we tell nodemailer to send the email.

Now lets execute the code. 

## Executing scrape and emailSend function

```js
    scrape().then(data => emailSend(data));
```

Here we execute the scrape function and pass its result to emailSend. And that's all! =) Now we need to execute that file in nodejs.

## Executing the index.js file in nodejs

Go to the index.js folder and execute that command in the terminal

```js
    node index.js
```
Now check your email! 😛

## Final code

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