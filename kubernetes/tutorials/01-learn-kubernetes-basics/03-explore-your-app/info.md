describe : show detailed information about a resource 
```bash
kubectl describe pods
```

exec: execute a command on a container in a pod
```bash
kubectl exec <name of pod> -- env
```

proxy: run a proxy which allows us to access our pods
```bash
kubectl proxy
```

get the only pod and store it in POD_NAME
```bash
export POD_NAME="$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')"
echo Name of the Pod: $POD_NAME
```
```bash
curl http://localhost:8001/api/v1/namespaces/default/pods/$POD_NAME:8080/proxy/
```

get logs 
```bash
kubectl logs "$POD_NAME"
```

enter shell of a pod
```bash
kubectl exec -ti $POD_NAME -- bash
```