Create a kubernetes cluster.

```bash
minikube start
```

Stop the cluster
```bash
minikube stop
```

start a cluster with 4 nodes
```bash
minikube start --nodes 4 -p multinode-demo
```

create a configmap from literal values. 
```bash
kubectl create configmap sport --from-literal=sport=football
```

Create a deployment that uses the config map.
```bash
kubectl apply -f deployment-with-configmap-as-volume.yaml
```

Get pods matching a given selector.
```bash
kubectl get pods --selector=app.kubernetes.io/name=configmap-volume
```

Pick one Pod that belongs to the Deployment, and view its logs
```bash
kubectl logs deployments/configmap-volume
```
edit a ConfigMap
```bash
kubectl edit configmap sport
```

tail logs
```bash
kubectl logs deployments/configmap-volume --follow
```
create another ConfigMap from literal values
```bash
kubectl create configmap fruits --from-literal=fruits=apples
```

create a deployment using a config map as enviornment variables
```bash
kubectl apply -f deployment-with-configmap-as-envvar.yaml
```

get logs of the envvar guys
```bash
kubectl logs deployment/configmap-env-var
```

the envvar one won't change!!!  because the enviornment variables are already set.
```bash
kubectl logs deployments/configmap-env-var --follow
```
rollout an update to the deployment and wait for it to finish.
```bash
# Trigger the rollout
kubectl rollout restart deployment configmap-env-var

# Wait for the rollout to complete
kubectl rollout status deployment configmap-env-var --watch=true
```

Get all pods with a given selector (again)
```bash
 kubectl get pods --selector=app.kubernetes.io/name=configmap-env-var
```

after rollout, logs will have mangoes.
```bash
kubectl logs deployment/configmap-env-var
```

# ConfigMap In a multi-container Pod
```bash
kubectl create configmap color --from-literal=color=red
```

expose the deployment 
```bash
kubectl expose deployment configmap-two-containers --name=configmap-service --port=8080 --target-port=80
```

forward the port
```bash
kubectl port-forward service/configmap-service 8080:8080 &
```

# Update config via ConfigMap in a pod possessing a sidecar container
create sidecar application
```bash
kubectl apply -f deployment-with-configmap-and-sidecar-container.yaml
```

expose and forward a port for the exposed service. 
```bash
kubectl expose deployment configmap-sidecar-container --name=configmap-sidecar-service --port=8081 --target-port=80
kubectl port-forward service/configmap-sidecar-service 8081:8081 &
```

access the service.
```bash
curl http://localhost:8081
```

# immutable configmap:

create an immutable configmap 
```bash
kubectl apply -f immutable-configmap.yaml
```

create a deployment that uses the said immutable configmap
```bash
kubectl apply -f deployment-with-immutable-configmap-as-volume.yaml
```


We cannot change an immutable configmap. Instead we need to create a new
config map and edit the deployment to use the new configmap and rollout.
(editing the deployment WILL trigger a rollout.)
```bash
kubectl apply -f new-immutable-configmap.yaml
kubectl edit deployment immutable-configmap-volume
```

good practice to delete the old no longer used configmap.
```bash
kubectl delete configmap company-name-20150801
```