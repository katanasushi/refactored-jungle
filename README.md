# cypress-links-test

Cypress dead-link checker, checking both for undefined in href and checking responses via pages set in fixtures/urls.json (initial 404 on brokenpage can be skipped and allow tests to check links on "404 Page")

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