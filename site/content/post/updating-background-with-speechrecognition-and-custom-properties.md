---
author: "Karoline Alencar"
date: 2019-01-04
title: Updating Background with SpeechRecognition & Custom Properties
categories: "javascript"
description: "Tutorial on how to update your background with CSS Custom Properties and SpeechRecognition API"
keywords: "javascript, tutorial, css, SpeechRecognition"
---

**Warning: It only works on Chrome.**

After a long time, I decided to write a quick tutorial from my 
[Updating Background with SpeechRecognition & Custom Properties Pen](https://codepen.io/KarolinedeAlencar/pen/Oxvjve), 
where I use the SpeechRecognition API and CSS Custom Properties to update the background color of the body. 
Building this Pen helped me understand more about the  SpeechRecognition API and how to update Custom Properties via JavaScript and I hope it helps you too! 

Now let's start! 

```css
:root {
  --color: palevioletred;
  font-size: 16px;
}

@media (max-width: 500px) {

  :root {
    font-size: 12px;
  }

}

body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--color);
}

.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 .6rem;
  
  color: #232121;
  text-align: center;
  border: 2px solid #232121;
}

.title {
  margin: 0;
  font-size: 4rem;
}

.description {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 300;
}

.value {
  font-size: 3rem;
  font-weight: 300;
}

.color-value {
  font-weight: bold;
}

.loader {
  font-size: 20px;
  font-style: italic;
}
```

## Base HTML

```html
<main class="main">
        <h1 class="title">Speak!</h1>
        <p class="description">You need accept the microphone permission!</p>
        <p class="value">Actual value: <span class="color-value" data-js="varValue">palevioletred</span></p>
        <span class="loader"></span>
</main>
```

## Base CSS

Note that we are setting the **--color** variable and using it on the body's background-color. The variable has an initial value, which we set in the HTML too.

That's all we need to start writing our JavaScript. Let's start! :)


## Tutorial

#### Setting the SpeechRecognition Object

```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
```
*We are using webkitSpeechRecognition because Chrome supports the API only with prefixed properties.*


#### Defining an instance 


```javascript
const recognition = new SpeechRecognition();
```

#### Setting the language 


```javascript
recognition.lang = 'en-US';
```


####  Starting the Recognition

```javascript
recognition.start();
```

#### Updating the Loader text

We can also update the loader text when the API begins to listen to the incoming audio, so the user knows that the API has started.


```javascript
recognition.addEventListener('start', () => loader.textContent = 'Detecting...');
```

#### 'Restarting' the API

Now we need to listen the end event and 'restart' the API, so the user can update the color again


```javascript
recognition.addEventListener('end', recognition.start);
```


#### Getting the result from the API

First we need to listen the result event


```javascript
recognition.addEventListener('result', e => {
});
```

Then get the results from the API

```javascript
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript);
});

```

And that's all, we have the API initialized and we have the results from the speech recognition. Now we need to update the background and update the color value in the HTML.

#### Updating the variable value

Now that we have the result, we can update the --color variable 

```javascript
recognition.addEventListener('result', e => {
    document.body.style.setProperty('--color', transcript);
});

```

And then, update the HTML with the current color

#### Updating the HTML

```javascript
recognition.addEventListener('result', e => {
    span.textContent = transcript;
});
```

#### Removing the loader

We can also 'remove' the loader by updating the value to ''


```javascript
recognition.addEventListener('result', e => {
    loader.textContent = '';
});
```


#### Our Final Javascript:

```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const span = document.querySelector('[data-js="varValue"]');
const main = document.querySelector('.main');
const loader = document.querySelector('.loader');

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)

    document.body.style.setProperty('--color', transcript);
    span.textContent = transcript;
    loader.textContent = '';
});

recognition.addEventListener('start', () => loader.textContent = 'Detecting...');

recognition.addEventListener('end', recognition.start);

recognition.start();
```


And that's all :)

