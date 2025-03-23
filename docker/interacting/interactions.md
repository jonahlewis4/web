image history : history of commands run
```bash
docker image history hello
```

inspect : show lots of detail
```bash
docker image inspect hello
```

ls : list all images
```bash
docker image ls
```

prune: clean up old images
```bash
docker image prune
```

rm: remove image
```bash
docker image rm hello
```
 
tag: add a tag link to existing image
```bash
docker image tag ubuntu:22.04 my-ubuntu-tag
docker image ls | grep my-ubuntu
```

docker scout: scout for vulnerabilities
```bash
docker scout cves
```



attach : attach to local image in terminal

exec : execute a command in a container

```bash
docker logs hello
```

Volumes:

```bash
    docker volume create my-volume
```
```bash
    docker volume insepect my-volume
```
```bash
    docker volume ls
```

Networks
```bash
docker run -d ubuntu sleep 999
docker network connect my-network <id of ubuntu>
docker network inspect my-network
```