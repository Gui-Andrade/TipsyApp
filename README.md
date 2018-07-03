# Tipsy App Wiki

## Demo

https://tipsy.guiandrade.com/


## Usage

It's pretty straight forward, you know what to expect from the commands

npm install

npm run watch

npm run build


## Cypress Testing

1 - npm run cypress

2 - Click tipsy.spec.js


## ESLint

ESLint runs automatically when git committing, if you want to manually run it:

### Testing a file

```
#!javascript
eslint path/filename.js
```

### Fixing a file


```
#!javascript
eslint path/filename.js --fix
```


## Coming soon... Jest testing of React components

npm run test (being implemented)

## Coming soon 2... Past tips(History)

WIP: At the moment it just populates it from a JSON file with a few bits of mock data. Eventually it'll use a (probably Django) backend to allow saving the bill which might help in logging food expenses.
