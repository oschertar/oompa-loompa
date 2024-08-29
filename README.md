# Oompa Loompa Project

This repository contains a React application integrated with Redux and TypeScript. Below you'll find instructions on how to get started, including setting up and running the server locally.

## Prerequisites

Before running the server locally, you will need have installed in your computer Node and a package manager like npm or yarn:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Getting Started

Follow these steps to set up the project and run it locally.

### 1. Clone the Repository

Start by cloning the repository from GitHub:

```bash
git clone https://github.com/oschertar/oompa-loompa.git
cd oompa-loompa
```

### 2. Install the dependencies

Use the command from your package manager to install all the dependencies.

```bash
npm i
```

or

```bash
yarn
```

### 3. Run the project in your computer

To run the server on your computer, introduce the command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

## Considerations

Below, I detail the problems and considerations I had while developing the technical test:

- In the design it is not well appreciated, but I have placed the bar with a sticky position so that it is always present.
- Although I have not modified the design to fit what is requested, I would have made two changes in it:

  - Place the filter input on the bar itself so that it is always accessible to the user.
  - Place an arrow in the lower right area to be able to scroll to the top automatically.

- When changing to react-redux, I have realized that the apiService file is not necessary. Even so I have left it uploaded in case the project does not make use of react-redux.
- When implementing react-redux with the cache system, I have had some problems in the implementation of it.
- I haven't considered necessary to use SASS or any component library because the project itself is quite simple and it seemed to me an unnecessary load.
