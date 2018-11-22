# payroll-panda

Node.js/Express.js backend, JavaScript/Angular v7 frontend.

## How To Use
* Register the player with full name, email, city, Ride in group, Days of weeks.
* Search all the registered palyers on table.
* Delete any specific player who you want.

## Prerequisites

* Express.js v4
* Mysql
* Angular v7

## Install
1. Fclone this repo - https://github.com/javascriptDC/payroll-panda
2. Navigate to API-demo, complete backend setup
3. In a separate terminal window, navigate to frontend, complete frontend setup

## Backend Setup
After navigating to API-demo, in that directory: 
1. Install node modules `npm install`
2. Setup Dababase /utils/db.js, database host, username, password, dabase name 
```
this.info = {
    host : '<database host>',
    user : '<username>',
    password : '<password>',
    database : 'payroll_panda'
  }
```
2. Restore Database `mysql -u <user> -p payroll_panda`
3. Start your server `node server`

## Frontend Setup
After navigating to frontend, in that directory: 
1. Install dependencies `npm install` 
2. Start your server `npm start`

## In Your Browser 
Navigate to the web address of your Node server [http://localhost:4200](http://localhost:4200) - or whatever yours is
