# CV

To build the project:

```console
npm install 
npm run dev 
npm run prod
npm run watch
npm run zip #generate the zip
npm run release #build in prod than generate the zip
```

Optional: Update the images:

```console
docker-compose pull
```

Start the project:

```console
docker-compose up -d --force-recreate
```

## Local skeleton

Local skeleton development:

```bash
docker-compose exec skeleton preview emsch:local:pull
docker-compose exec skeleton preview emsch:local:status
docker-compose exec skeleton preview emsch:local:login
docker-compose exec skeleton preview emsch:local:push
```



Useful urls:

You will have to accept self-signed certificate

- [mailhog: capture all email sent](http://mailhog.localhost/)
- [Traefik: routing app](http://localhost:8888/dashboard/#/)
- Preview URLs:
    - [preview](https://preview.cv.localhost/)
- Live URLs:
    - [live](https://live.cv.localhost/)

Useful commands:

- `docker-compose exec skeleton bash` You enter in the skeleton pod:
    - `template`: run the symfony command in the corresponding context
    - `preview`: run the symfony command in the corresponding context
    - `live`: run the symfony command in the corresponding context
    - `template c:c`: clear the cache
    - `template debug:route`: list the template's routes
    - `curl -v -s --header "Host: template-fr.webonss.localhost" http://localhost:9000 1> /dev/null`: test the config
- `docker-compose down` Turn off the pods
- `docker-compose ps` Pod's status
- `docker-compose logs -f` logs
- Test the live urls/config with docker: `curl --header "Host: www.onss.be" http://localhost`
- Test the live url in production
    - Update your vhost: `127.0.0.1 www.onss.be www.rsz.be rsz.be onss.be onss.fgov.be rsz.fgov.be onssrszlss.fgov.be onssrszlss.be`
    - Open a ssh tunnel to openshift
        - `oc login`
        - `oc project socsec-prod-web-content-onss`
        - `oc get pods | grep webonss-live`
        - `oc port-forward ems-webonss-live-10-27hnk 9000:9000`
        - In another console: `curl --header "Host: www.rsz.be" http://localhost:9000`
 
