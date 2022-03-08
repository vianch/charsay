<h1 align="center">CHARSAY - LOGGER PRINTER WITH CHARACTERS 👨‍💻</h3>

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

## Character examples

![Screen Shot 2022-03-07 at 7 07 35 PM](https://user-images.githubusercontent.com/1800887/157139714-f8d15de4-faa5-4ba6-bd8c-15456a77185d.png)

![Screen Shot 2022-03-07 at 7 08 25 PM](https://user-images.githubusercontent.com/1800887/157139709-ea8ee45d-56c8-4f05-9a61-fd4eaa699720.png)

![Screen Shot 2022-03-07 at 7 06 50 PM](https://user-images.githubusercontent.com/1800887/157139715-fa65446d-24f3-478e-823c-d9f9b30ee7fd.png)

![Screen Shot 2022-03-07 at 7 04 46 PM](https://user-images.githubusercontent.com/1800887/157139716-327ff3b9-ddd0-49d6-bcb8-9a166c5ce23f.png)
