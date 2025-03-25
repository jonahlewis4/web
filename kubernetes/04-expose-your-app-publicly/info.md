get servicecs
```bash
kubectl get services
```

expose a service on port 8080
```bash
kubectl expose deployment/kubernetes-bootcamp --type="NodePort" --port 8080
```

describe specific service:
```bash
kubectl describe services/kubernetes-bootcamp
```

Create an environment variable called NODE_PORT that has the value of the Node port assigned:
```bash
export NODE_PORT="$(kubectl get services/kubernetes-bootcamp -o go-template='{{(index .spec.ports 0).nodePort}}')"
echo "NODE_PORT=$NODE_PORT"
```

create minikube tunnel
```bash
minikube service kubernetes-bootcamp --url
```

curl through tunnel
```bash
curl 127.0.0.1:6208
```

get pods or srevices based on label 
```bash
kubectl get pods -l app=kubernetes-bootcamp
kubectl get services -l app=kubernetes-bootcamp
```

get only pod name and store in POD_NAME variable
```bash
export POD_NAME="$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')"
echo "Name of the Pod: $POD_NAME"
```

attach a label to a resource 
```bash
kubectl label pods "$POD_NAME" version=v1
```

delete a service 
```bash
kubectl delete service -l app=kubernetes-bootcamp
```

run curl within a container
```bash
kubectl exec -ti $POD_NAME -- curl http://localhost:8080
```