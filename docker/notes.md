running ubuntu:22.04 shell.
```bash
docker run --interactive --tty --rm ubuntu:22.04
```

running ubuntu:22.04 with a name and without --rm. The container will still exist on the system after exiting.
```bash
docker run --interactive --tty --name my-ubuntu-container ubuntu:22.04
```

list all containers (use -a to view containers that aren't started)
```bash
docker ps -a
```

restart a container: 
```bash
docker start my-ubuntu-container
```

attach to container and enter shell
```bash
docker attach my-ubuntu-container
```

build a container image with ubuntu image as base and ping install
```bash
docker build --tag my-ubuntu-image -<<EOF
FROM ubuntu:22.04
RUN apt update && apt install iputils-ping --yes
EOF
```

run a container based on an image
```bash
docker run -it --rm my-ubuntu-image
```

create a volume
```bash
docker volume create my-volumne
```

run with a volume mounted, allowing persistent storage (file lives in docker)
```bash
docker run -it --rm --mount source=my-volume,destination=/my-data/ ubuntu:22.04
```

run with a bind mounted in present working directory, allowing persistent storage
```bash
docker run -it --rm --mount type=bind,source="${PWD}"/my-data,destination=/my-data ubunntu:22.04
```