# e2e tests for Qustodio (PAR/QFP/QWEB)

Welcome to automation :)

## Requirements

- Node version 4.8 or higher
- Yarn version 1.0.0 or higher
- node-gyp
```
$ npm install -g node-gyp
```

## Installation

Clone the repo and go to `e2etests` directory. 
Then install dependencies:
```
$ yarn install
```

## Execution

Start the local web server:
```
$ yarn run local-webserver
```

Run tests:
```
$ yarn run wdio
```
