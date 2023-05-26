# Sonarqube

Sonarqube is a tool for static code analysis. It can be used to analyze code for bugs, vulnerabilities, code smells, and security hotspots. It can also be used to track code coverage and code duplication.

## Installation

### Docker

The easiest way to install Sonarqube is to use Docker. The following command will pull the latest version of Sonarqube and run it on port 9000.

```bash
docker run -d --name sonarqube -p 9000:9000 sonarqube
```

### Persist data on a volume

To persist data on a volume, you can use the following command:

```bash
docker run -d --name sonarqube -p 9000:9000 -v sonarqube_data:/opt/sonarqube/data sonarqube
```

### Init admin password

The default admin password is admin. You can change it by using the following command:

```bash
docker run -d --name sonarqube -p 9000:9000 -e SONARQUBE_ADMIN_PASSWORD=your_password sonarqube
```

### Using docker compose

You can also use docker compose to run Sonarqube with a persisted volume, port and admin password.

```yaml
version: "3.8"

services:
  sonarqube:
    image: sonarqube
    ports:
      - 9000:9000
    volumes:
      - sonarqube_data:/opt/sonarqube/data
    environment:
      - SONARQUBE_ADMIN_PASSWORD=your_password

volumes:
    sonarqube_data:
```

Then you can run the following command:

```bash
docker-compose up -d
```

### Create project

To create a project, you can use the following command:

```bash
curl -u admin:admin -X POST "http://localhost:9000/api/projects/create?name=project_name&project=project_key"
```

### Create global token for CI/CD

To create a global token for CI/CD, you can use the following command:

```bash
curl -u admin:admin -X POST "http://localhost:9000/api/user_tokens/generate?name=token_name"
```

This command will return a token that you can use in your CI/CD pipeline.

### Create user

To create a user, you can use the following command:

```bash
curl -u admin:admin -X POST "http://localhost:9000/api/users/create?login=user_login&name=user_name&password=user_password"
```