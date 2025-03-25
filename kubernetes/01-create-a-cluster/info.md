install minikube (differs on platform)
```url
https://minikube.sigs.k8s.io/docs/start/
```

start the cluster 
```bash
minikube start
```

open the dashboard in default browser
```bash
minikube dashboard
```

create a deployment. A deployment is a wrapper that watches its pod and restarts it if the pod fails 
```bash
kubectl create deployment hello-node --image=registry.k8s.io/e2e-test-images/agnhost:2.39 -- /agnhost netexec --http-port=8080

```