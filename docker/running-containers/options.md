run basic command
```bash
docker run ubuntu sleep 5
```

run with -d (runs in background and cat id)
```bash
docker run -d ubuntu sleep 99
```

--entrypoint : override entrypoint in the docker file
```bash
docker run --entrypoint echo ubuntu hello
```

--env, -e, --env-file
```bash
docker run --env MY_ENV=hello ubuntu printenv
```

--init: spawns process as subprocess
```bash
docker run --init ubuntu ps
```

-it : interactive terminal
```bash
docker run -it ubuntu
```

--name : give specific name to a container
```bash
docker run -d --name my-container ubuntu sleep 99
```

--network, --net : connect to a docker network. Networks allow applications to communicate
```bash
docker network ls
docker network create my-network
docker run -d --network my-network ubuntu sleep 99
```

--platform: architecture
```bash
docker run --platform linux/arm64/v8 ubuntu dpkg --print-architecture
```

--publish, -p (port) : 8080:8080, connect port 8080 of the network to the host of the container.
(this example image doesn't exist)
```bash
docker run -p 8080:8080 restserver 
```

--restart : specify restarting behavior
```bash
docker run --restart unless-stopped ubuntu
```

--rm : clean up / delete the container when it stops.
```bash
docker run --rm --name this-one-will-be-gone ubuntu
```