# solid-web
Web-based code for Solid app, including web servers, web apps, and infrastructure as code

## Development
To facilitate running apps in debug mode, the `dev:local` command will run all apps locally with the `DEV_LOCAL` environment variable (and the developer must make sure to choose urls using `localhost` when connecting to other apps, i.e. pocketbase).

To run apps in a container environment, using docker-compose, use `dev:up` instead.