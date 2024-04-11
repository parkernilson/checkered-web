# Pocketbase for Solid App
## Development
We have opted to containerize pocketbase in order to maintain a consistent runtime environment and avoid version differences between development and production.

To run locally, use:
```
$ bun dev:local
```

Anytime the docker configuration is changed, or the pocketbase version is updated, the image should be rebuilt with:
```
$ bun dev:local:build
```

To run commands on the pocketbase executable (i.e. `pocketbase -h`), the `bun pb <args>` command may be used to run them on the pocketbase executable inside the docker service.