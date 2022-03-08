<h1 align="center">CHARSAY - LOGGER PRINTER WITH CHARACTERS 👨‍💻</h3>



<!-- ABOUT THE PROJECT -->

## About The Project

Character examples

# Usage

## Install globally in your terminal

Make sure you have npm installed in your system

```sh
npm --version
```

Install the package

```sh
npm install -g charsay
```

Check the installation

```sh
charsay --version
```

Finally use it anywhere

- Default cartoon is homer

```sh
# default character is homer
charsay "Hello Dog!"
# diferent character
# list of characters included $ charsay --help
charsay "Hello Dog!" macintosh
# change message margin left
charsay "Hello Dog!" macintosh 25
# combining with echo
echo "Hello dog!" | charsay 
```

For full command usage see and to view all available characters -

```sh
charsay --help
```

## Import in your javascript project

First install in your local project

```sh
# npm
npm install charsay --save
# yarn
yarn add --dev charsay
```

Import the package

```js
import { charsay } from 'charsay';
```

Use the function

```js
// default message margin
charsay("Your message here!",'cat');
// new  message margin
charsay("Your message here!",'cat', 25);
```

Function :-

```js
charsay(<type your message here>,<character name here | optional>,<message margin | optional>)
```
