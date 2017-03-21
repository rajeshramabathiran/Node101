# Node 101

[![Build Status](https://travis-ci.org/rajeshramabathiran/Node101.svg?branch=master)](https://travis-ci.org/rajeshramabathiran/Node101)

This repository contains code samples that will help you

- Get started with node
- Use Test Driven Development (TDD)
- Use typescript
- Use express as your app server
- Use swagger for your API definition
- Create a basic web API that exposes data from a mongodb database
- Debug your web API in VS Code
- Enable app telemetry
- Deploy your first node based web API to Azure

## Pre-requisites

- [Git][1]
- [Node js][2]
- [NPM][3]
- [Visual Studio Code][4] (or any other editor of your choice)
- [Mongodb][5]

## Steps to try it out

**Clone Node101 repo**

```
git clone https://github.com/rajeshramabathiran/Node101.git
```

**Install packages**

```
npm install
```

Notice that all dependencies are now available in `node_modules` folder.

**Generate js files and swagger document**

The repository has a file in the root directory called `gulpfile.js`. This file contains the build scripts to transpile typescript to javascript. It also contians the scirpt to copy the swagger file to the target folder.

> Note: [Swagger][6] is a powerful open source framework backed by a large ecosystem of tools that helps you design, build, document, and consume your RESTful APIs.

```
npm run build
```

At this point, a new folder called `dist` is created with all the js files and swagger.

**Ensure mongodb is installed locally**

Ensure that mongodb is present locally, and you are able to connect to it. Alternatively, if you have a mongodb instances running in the cloud you can use `MONGODB_CONNECTIONSTRING` environment variable to populate its connection string.

** Try it out **

To try out the web api, run

```
npm start
```

In the command prompt, you will notice that the web server is up and running in port 3000.

```
> node101@1.0.0 start /Users/rajeshramabathiran/gh/Node101
> node ./dist/index.js

Listening on port 3000

```

>Note: If you want to use any other port, use the `PORT` environment variable to override it.

![Node 101 web api up and running in localhost:3000][7]

Test the web apis

To test the web apis, run

```
npm test
```
```
> node101@1.0.0 test /Users/rajeshramabathiran/gh/Node101
> mocha --reporter spec --compilers ts:ts-node/register 'test/**/*.ts'



  baseRoute
    ✓ should respond with HTTP 200 status

  booksRoute
    ✓ should respond with HTTP 200 status


  2 passing (73ms)
```


<!-- References -->
[1]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[2]: https://nodejs.org/en/download/
[3]: http://blog.npmjs.org/post/85484771375/how-to-install-npm
[4]: https://code.visualstudio.com/docs/setup/setup-overview
[5]: https://docs.mongodb.com/manual/installation/
[6]: http://swagger.io/
[7]: ./images/node101.png