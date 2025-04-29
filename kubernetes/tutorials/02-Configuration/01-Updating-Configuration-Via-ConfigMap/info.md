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