# cypress-links-test

cypress framework

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

## CICD Integration

```bash
docker build -t linkstest .
docker run -i -v "`pwd`/cypress":/cypress linkstest
```