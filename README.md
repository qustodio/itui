# e2e tests for Qustodio (PAR/QWEB)

This is the Qustodio end to end tests framework based on CucumberIO 6 and integrating Cucumber.

This project has been designed to be used as a dependencie in the different Qustodio apps (PAR, QWEB..)

To use this framework, add it to your project dependencies with the next command:

```
\$ yarn add https://github.com/qustodio/itui#COMMIT_HASH with the expected commit
```

In order to consume this project, next files should be imported in the app (PAR, QWEB...) where this dependencie is included:

wdio.conf.js
babel.config.js
