# Docker cheat sheet

## Using existing Docker images

**Run a container**

Simple run

```
docker run <image-name>
```

Run with a name

```
docker run --name <name> <image-name>
```

Run in detached mode - will run in the background and get back the hand of the terminal

```
docker run -d <image-name>
```

Remove automatically the container when it stops

```
docker run --rm <image-name>
```

**List docker processes**

```
docker ps
```

**List all docker processes**

This will include `stopped containers`

```
docker ps -a
```

**Stop a container**

```
docker stop <container-id>
```

## Building Docker images

**Dockerfile example**

A docker file is a set of instructions to build a docker image

```
FROM node:lts

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["node", "server.js"]
```

**FROM**

The base image to use

**WORKDIR**

The working directory inside the container

**COPY**

Copy files from the host to the container

**RUN**

Run a command inside the container

**EXPOSE**

Expose a port inside the container - this is a documentation purpose for your images users

**CMD**

The command to run when the container starts

**Build an image**

```
docker build .
```

Build with a tag

```
docker build -t <tag> .
```

Build with a name and tag

```
docker build -t <name>:<tag> .
```

Use a custom docker file name

```
docker build -f <dockerfile-name> .
```

## Manage containers and images

**List images**

```
docker images
```

**Remove an image**

```
docker rmi <image-id>
```

**List containers**

```
docker container ls
```

**Remove a container**

```
docker rm <container-id>
```

**Remove all stopped containers**

```
docker container prune
```

**Remove all dangling images**

```
docker image prune
```

** Remove all images**

```
docker image prune -a
```

**Inspect an image**

```
docker image inspect <image-id>
```

## Advanced

**Copy a file into a running container**

```
docker cp <file> <container-id>:<path>
```

** Copy a file from a running container**

```
docker cp <container-id>:<path> <file>
```

## Get Help

Just add `--help` to any docker command

```
docker --help
docker run --help
docker build --help

etc...
```