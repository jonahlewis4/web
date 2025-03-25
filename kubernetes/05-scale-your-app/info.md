get replica sets of all deployments.
replica set lists the number of pods, as well as the desired number of pods and the ready number of pods.
```bash
kubectl get rs
```

scale deployment to 4 replicas. Remember that a replica is a pod
```bash
kubectl scale deployments/kubernetes-bootcamp --replicas=4
```