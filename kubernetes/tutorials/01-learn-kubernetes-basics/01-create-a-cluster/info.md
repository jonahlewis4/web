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

Expose a pod as a service.
Pods are only accessible by their internal IP addresses by default. 
To  make a container accessible outside the Kubernetes virtual network,
it is required to expose a pod as a service.

--type=LoadBalancer indicates to expose the service outside the cluster
```bash
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
```

view all services
```bash
kubectl get services
```
open a minkube service in a browser window.
Replace "hello-node" with the service name 
seen in kubectl get services
```bash
minikube service hello-node
```

List minkube addons
```bash
minikube addons list
```
enable an addon: (an addon is a pod and a service). services are stored in the namespace kube-system
metrics-server lets you use commands like `kubectl top pods`,, which displays information about the nuber of cores and memory a pod.
```bash
minikube addons enable metrics-server
```

disable an addon
```bash
minikube addons disable metrics-server
```

delete resources: 
```bash
kubectl delete service hello-node
kubectl delete deployment hello-node
```

stop a minkube cluster
```bash
minikube stop
```

delete the Minkube VM
```bash
minkube delete
```