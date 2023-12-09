# CV

Define the .env file (start pby coping the .env.dist: `cp .env.dist .env`)

To build the webpack project (js, css, ...):

```console
npm install
npm run dev
npm run prod
npm run watch
```

Optional: Update the images:

```console
docker compose pull
```

Start the project:

```console
docker compose up -d --force-recreate --remove-orphans
```

## Local skeleton

Local skeleton development:

```bash
docker compose exec skeleton preview emsch:local:pull
docker compose exec skeleton preview emsch:local:status
docker compose exec skeleton preview emsch:local:login
docker compose exec skeleton preview emsch:local:push
```



Useful urls:

You will have to accept self-signed certificate

- [Traefik: routing app](http://localhost:8888/dashboard/#/)
- Preview URLs:
    - [preview](https://preview.cv.localhost/)
- Live URLs:
    - [live](https://live.cv.localhost/)

Useful commands:

- `docker compose exec skeleton bash` You enter in the skeleton pod:
    - `preview`: run the symfony command in the corresponding context
    - `zz_live`: run the symfony command in the corresponding context
    - `preview c:c`: clear the cache
    - `preview debug:route`: list the template's routes
    - `curl -v -s --header "Host: preview.cv.localhost" http://localhost:9000 1> /dev/null`: test the config
- `docker compose down` Turn off the pods
- `docker compose ps` Pod's status
- `docker compose logs -f` logs
- Test the live urls/config with docker: `curl -v -s --header "Host: mathieu.dekeyzer.net" http://localhost:9000 1> /dev/null`

