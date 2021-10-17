# React + Shopify (js-buy-sdk)

Um exemplo usando [js-buy-sdk](https://github.com/Shopify/js-buy-sdk) construído com [React](https://facebook.github.io/react/). Este projeto foi inicializado com o [Create React App](https://github.com/facebookincubator/create-react-app).

## Pré-requisitos

Você precisará dos seguintes itens instalados corretamente em seu computador.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)

## Installation

* `git clone https://github.com/BernardoOficial/Aviato.git` this repository
* `npm install`

## Configuring

Se você gostaria de conectar sua loja a este exemplo, abra `src/index.js` e atualize o `domain` e `storefrontAccessToken`:

```js
const client = Client.buildClient({
  storefrontAccessToken: 'your-storefront-access-token',
  domain: 'your-shop-name.myshopify.com',
});
```

## Running

Start a local server:

```
npm start
```

* Visite o seu app em [http://localhost:3000](http://localhost:3000).

## Leitura adicional / Links úteis

* [React](https://facebook.github.io/react/)
* [JS Buy SDK](https://github.com/Shopify/js-buy-sdk)

## Contribuição
Para obter ajuda sobre como configurar o repo localmente, construir, testar e contribuir, consulte [CONTRIBUTING.md](https://github.com/Shopify/storefront-api-examples/blob/master/CONTRIBUTING.md).

## Código de conduta
Todos os desenvolvedores que desejam contribuir por meio de código ou problemas, dê uma olhada no
[CODE_OF_CONDUCT.md](https://github.com/Shopify/storefront-api-examples/blob/master/CODE_OF_CONDUCT.md).

## Licença

MIT, see [LICENSE](https://github.com/Shopify/storefront-api-examples/blob/master/LICENSE.txt) for details.
