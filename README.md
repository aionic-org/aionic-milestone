# aionic-milestone

![alt text](https://avatars0.githubusercontent.com/u/42389304?s=100&v=4 'Aionic Logo')

Aionic offers open source applications for project management and collaboration. Our focus is on simplifying and accelerating the workflow of agile teams.

## About Aionic

We provide a set of **open source products** for project management, collarboration, productivity and more. All our products are released under the [MIT](https://opensource.org/licenses/MIT) license, so feel free to customize them according to your team’s wishes.

Please keep in mind that we just develop the software and don't host the applications anywhere for public usage. That means you have to take care of the hosting for yourself. You can use a Linux cloud server with nginx for example.

All our products are built on top of [aionic-core](https://github.com/aionic-org/aionic-core/), since this is the place where all your data is maintained and distributed. So for the usage of any other application, you have to use at least aionic-core.

Moreover we highly advice to use [aionic-backend](https://github.com/aionic-org/aionic-backend/) for managing and configuring the data of your Aionic applications.

Installation and usage guides and be found at the GitHub repositories of the individual products.

Some of the technologies we use to build our software:

- Node.js
- React
- MySQL
- Redis

---

## Description

**aionic-milestone** is a web application for project management. It helps you to plan your team's projects and tasks.
The application is a SPA based on React written in JavaScript.

Some of the features included in this app:

- Task Management
- Kanban Boards
- Projects
- Charts
- GitHub API integration

## Prerequisites

- aionic-core
- Node.js

## Installation

First of all, copy the environment file and enter your secret information:

```bash
cp .env.example .env
```

Afterward, run the following commands to start the application

```
yarn install
yarn start
```

## User Guide

In progress.

## Philosophy

> Our focus is on simplifying and accelerating the workflow of agile teams.

We try to help other teams to realize their ideas by offering highly maintainable software for project management and collaboration.

## Community

- [Author](https://github.com/larswaechter)
- [Website](https://aionic.org)
- [GitHub](https://github.com/aionic-org)
- [Twitter](https://twitter.com/aionic_org)

## License

aionic-milestone is released under [MIT](https://github.com/aionic-org/aionic-milestone/blob/master/LICENSE) license.
