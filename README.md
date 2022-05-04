# cypress-links-test

cypress framework with docker, percy integration and inbuilt mochawesome reporting

### Prerequisite

Nodejs >8 must be installed (if not using docker)

## Installation

Run below command to install cypress package (use npm or yarn or any other node package manager)

```bash
npm install
```

## Cypress Test Runner Window

Once installation is completed successfully, run below command

```bash
npx cypress open
```


## Headless Execution

#### To execute all specs headlessly

```bash
npx cypress run
```

#### Local Execution

Use below command to run locally. This is a custom shell file with commands to run specific or all spec files and generate mochawesome report.

```bash
npm run execute-tests
```
## CICD Integration

```bash
docker build -t linkstest .
docker run -i -v "`pwd`/cypress":/cypress linkstest
```