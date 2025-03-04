running ubuntu:22.04 shell.
```bash
docker run --interactive --tty --rm ubuntu:22.04
```

running ubuntu:22.04 with a name and without --rm. The container will still exist on the system after exiting.
```bash
docker run --interactive --tty --name my-ubuntu-container ubuntu:22.04\
```

list all containers (use -a to view containers that aren't started)
```bash
docker ps -a
```

restart a container: 
```bash
docker start my-ubuntu-container
```

attach to container
```bash
docker attach my-ubuntu-container
```
