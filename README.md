<h1 align="center">CoffeeTeria - Web</h2>
<p align="center">
  <br/>
  <a href="https://github.com/andriabakti/coffeeteria-frontend">
    <strong>Explore the Docs</strong>
  </a>
  <br/>
  <br/>
  <a href="https://andria-coffeeteria.netlify.app/main">View Demo</a>
  ·
  <a href="https://github.com/andriabakti/coffeeteria-frontend/issues">Report Bug</a>
  ·
  <a href="https://github.com/andriabakti/coffeeteria-frontend/issues">Request Feature</a>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
  - [Features](#features)
  - [Built With](#built-with)
- [Setup for Development](#setup-for-development)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)
- [Contact](#contact)

## Introduction

<b>CoffeeTeria</b> is a web-based café or coffee shop application that allows customer to easily orders the available foods & beverages in the menu by their own self. This app also provides some features to manage the products only for admin user, such as adding new product, updating & deleting existed product.

### Features

- Customer must sign up & login to see and purchase the product
- Customer also can see and update their profile after login
- Only admin user that can do product management

### Built With

- [React.js](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)

## Setup for Development

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [CoffeeTeria API](https://github.com/andriabakti/coffeeteria-backend.git)

### Installation

1. Clone the repository

```sh
git clone https://github.com/andriabakti/coffeeteria-frontend.git`
```

2. Install package dependencies

```sh
npm install
```

3. Create .env file in your project's root folder & set the variable below

```sh
REACT_APP_BASE_URL='CoffeeTeria_API_Base_URL'
```

4. Make sure you already run the [back-end](https://github.com/andriabakti/coffeeteria-backend.git) first, then run this app locally

```sh
npm start
```

## Screenshots

<p align='center'>
  <span>
    <image width="200" src='./previews/home.png' />
    <image width="200" src='./previews/auth_register.png' />
    <image width="200" src='./previews/auth_login.png' />
    <image width="200" src='./previews/product.png' />
    <image width="200" src='./previews/product_admin.png' />
    <image width="200" src='./previews/product_detail.png' />
    <image width="200" src='./previews/product_edit.png' />
    <image width="200" src='./previews/product_new.png' />
    <image width="200" src='./previews/order_cart.png' />
    <image width="200" src='./previews/order_history.png' />
    <image width="200" src='./previews/user_profile.png' />
  </span>
</p>

## Related Project

- [`CoffeeTeria: Back-end`](https://github.com/andriabakti/coffeeteria-backend)

## Contact

Email : andr.bkti@gmail.com
