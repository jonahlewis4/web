
# create the cluster
start a cluster with 4 nodes
```bash
minikube start --nodes 4 -p multinode-demo
```

# create a redis cache

create the configmap with an empty config block
```bash
cat <<EOF >./example-redis-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: example-redis-config
data:
  redis-config: ""
EOF
```

apply the config map that was created as well as the redis pod manifest
```bash
kubectl apply -f example-redis-config.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/website/main/content/en/examples/pods/config/redis-pod.yaml
```
















# cleanup : stop the cluster
Stop the cluster
```bash
minikube stop
```
