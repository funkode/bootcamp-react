# Welcome to the Front-End Boot Camp

## Instructor

Eric Greene

## Schedule

Class:

- Monday - Friday, next 2 weeks: 9am to 5pm PDT

Breaks:

- Morning: 10:25am to 10:35am
- Lunch: Noon to 1pm
- Afternoon #1: 2:15pm to 2:25pm
- Afternoon #2: 3:40pm to 3:50pm

## Course Outline

- 3 days: React (including HTML/CSS/JS)
- 2.5 days: Redux
- 2.5 days: Apollo + GraphQL
- 1.5 days: Project
- 0.5 day: Unit Testing + Other Topics

## Project Setup

### Requirements

- Node.js (version 10 or later)
- Web Browser

### Instructions

**Step 1.** Clone/Download this repository. If downloading the zip file, then extract the zip file.<br>

**Step 2.** Open a terminal window and change to the folder containing the "package.json" file.<br>

**Step 3.** Run the following commands in the following order:<br>

```sh
npm install

npm run start-rest-server
```

**Step 4.** To view the REST Server documentation and available endpoints, open a browser and navigate to [http://localhost:3020](http://localhost:3020).

> The port number will be different if the REST_PORT was changed in the "config" section.


**Step 5.** Open a second terminal window and change to the folder containing the "package.json" file.
**Step 6.** Run the following command:

```sh
npm run start-graphql-server
```

**Step 7.** To run the GraphQL Playground, open a browser and navigate to [http://localhost:3010](http://localhost:3010).

> The port number will be different if the GRAPHQL_PORT was changed in the "config" section.


**Step 8.** Open a third terminal window and change to the folder containing the "package.json" file.
**Step 9.** Run the following command:

```sh
npm run start-client
```

**Step 10.** Your system's default web browser should open and browse to the URL [http://localhost:3000](http://localhost:3000).

> The port number will be different if the CLIENT_PORT was changed in the "config" section.


### Modifying the Project

The server files can be modified in the "server-src" folder. The "server-dist" folder is generated by the "start-server" command. Do not edit the files in the "server-dist" folder as they will be overwritten. The client files can be modified in the "public" and "src" folders. The "src" folder contains the JavaScript code for the Apollo Client and React Components.

### FAQ

1. If you have another version of Node.js installed on your system, then I recommend installing [NVM](https://github.com/creationix/nvm) (for Mac & Linux) or [NVM-Windows](https://github.com/coreybutler/nvm-windows). Both tools support the installation of multiple versions of Node.js and provide tools for easily switching between those versions. Using these tools, installing Node.js version 10 without losing your older version should be possible.

1. The default ports number for the three server applications are as follows:

  - Web Server: 3000
  - GraphQL Server: 3010
  - REST Server: 3020

If your system is running programs on these ports there will be a conflict when these applications are started. Either disable the other applications running on your system or change the port numbers for these applications within your "package.json" file. To change the port numbers, modify the port values specified in the "config" section of the "package.json". No changes to the JavaScript code is needed as the code reads the environment variables set by the config section.

## Links

### Instructor's Resources

- [DevelopIntelligence](http://www.developintelligence.com/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Blog Posts](https://github.com/training4developers/react-flux-blog)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)
- [Redux Videos](https://egghead.io/courses/getting-started-with-redux)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

### Useful Resources

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Redux Videos](https://egghead.io/courses/getting-started-with-redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Observable](https://redux-observable.js.org/)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [SASS](http://sass-lang.com/)
- [Reactstrap](https://reactstrap.github.io/)

### NPM Trends

- [NPM Trends](https://www.npmtrends.com)
- [Comparison between React, Angular & Vue](https://www.npmtrends.com/@angular/core-vs-react-vs-vue)
- [Comparison between Redux, Relay, Apollo & MobX](https://www.npmtrends.com/redux-vs-mobx-vs-apollo-client-vs-relay-runtime)
- [Comparison between Thunk, Saga and Observable](https://www.npmtrends.com/redux-thunk-vs-redux-saga-vs-redux-observable)
- [Comparison between SASS and Less](https://www.npmtrends.com/node-sass-chokidar-vs-node-less-chokidar)
