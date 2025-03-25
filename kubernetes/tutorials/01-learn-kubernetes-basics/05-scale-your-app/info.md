get replica sets of all deployments.
replica set lists the number of pods, as well as the desired number of pods and the ready number of pods.
```bash
kubectl get rs
```

scale deployment to 4 replicas. Remember that a replica is a pod
```bash
kubectl scale deployments/kubernetes-bootcamp --replicas=4
```

Create an environment variable based on the NODE_PORT of a service
```bash
export NODE_PORT="$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')"
echo NODE_PORT=$NODE_PORT
```

create minikube tunnel to a service
```bash
minikube service kubernetes-bootcamp --url
```

scale down to 2 replicas
```bash
kubectl scale deployments/kubernetes-bootcamp --replicas=2
```


