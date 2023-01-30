# NodeJs

<img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" height="100" />

## What is NodeJs?

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

## Installation

First download the latest version of NodeJs from [here](https://nodejs.org/en/download/).

We recommend to use the LTS version (for Long Term Support).

## Usage

__Hello World__

```js
// let's create a file called hello.js
console.log("Hello World!");
```

__Run the file__

```bash
# open a terminal and run the following command
node hello.js
# you should see the following output
> Hello World!
```

## Dependencies

NodeJs comes with a package manager called `npm` (Node Package Manager).

You can install dependencies using the following command:

```bash
# install a package locally
npm install <package-name>
# install a package globally
npm install -g <package-name>
```

## Package.json

The `package.json` file is used to store metadata about your project.

You can create a `package.json` file using the following command:

```bash
npm init
```

This will create a `package.json` file in the current directory with the following content

```json
{
  "name": "my-project", -> the name of your project
  "version": "1.0.0",
  "description": "My Project Description",
  "main": "index.js", -> the entry point of your project
  "scripts": { -> scripts to run
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": { -> dependency list
    "dependency-name": "^1.0.0",
    "other-dependency-name": "^1.0.0"
  },
  "author": "Your Name",
  "license": "ISC"
}
```

## Full Documentation

You can find the official documentation [here](https://nodejs.org/en/docs/).

## Resources

- [NodeJs Official Website](https://nodejs.org/en/)
- [NodeJs Official Documentation](https://nodejs.org/en/docs/)