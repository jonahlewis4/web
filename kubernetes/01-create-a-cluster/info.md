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

view all pods
```bash
kubectl get pods
```

view all deployments
```bash
kubectl get deploiyments
```

view all cluster events
```bash
kubectl get events
```

view kubectl config
```bash
kubectl config view
```

view logs of a specific pod (replace the pod name with the actual pod name)
```bash
kubectl logs hello-node-5f76cf6ccf-br9b5
```